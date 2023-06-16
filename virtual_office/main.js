import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

import { SUBTRACTION, Brush, Evaluator } from 'three-bvh-csg';
import { MeshBVHVisualizer } from 'three-mesh-bvh';


import { scaleEffects, setupEffects } from './effects.js';
import { setupBackwall, setupDesks, updateDeskZ } from './furniture.js';
let tween, tweenActivated;
let bloomComposer, bloomLayer, composer, camera, scene, renderer, stats, gapSize, scale;
let deskGroup, door, room, roomDepth, screenCSSGroup, screenWebGLGroup, wallGroup;

let scene2, renderer2;

let materials, darkMaterial;

export function init(pane) {

  // Scene container.
  scene = new THREE.Scene();
  scene2 = new THREE.Scene();

  gapSize = 1; // Gap size between desks
  scale = 11; // Scale factor

  var adjustedGapSize = calculateAdjustedGapSize();

  [ deskGroup, screenCSSGroup, screenWebGLGroup ] = setupDesks(adjustedGapSize, gapSize, scale, scene);
  scene2.add(screenCSSGroup);
  scene.add(screenWebGLGroup);
  scene.add(deskGroup);

  // Main renderer.
  renderer = new THREE.WebGLRenderer({ antialias: window.virtual_office.fast });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector("#webgl").appendChild(renderer.domElement);

  // Website renderer.
  renderer2 = new CSS3DRenderer();
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.domElement.style.position = "absolute";
  renderer2.domElement.style.top = 0;
  document.querySelector("#css").appendChild(renderer2.domElement);

  window.virtual_office.screensLoaded = 0;
  room = createOfficeRoom();
  scene.add(room);

  // Camera.
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 10, 15 + (roomDepth / 2));
  const coords = {x: 15 + (roomDepth / 2)} // Start at (0, 0)
  // Scene Setup.
  tween = new TWEEN.Tween(coords, false) // Create a new tween that modifies 'coords'.
		.to({x: - 16 + (roomDepth / 2)}, 1500) // Move to (300, 200) in 1 second.
		.easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
    .onUpdate(() => {
			// Called after tween.js updates 'coords'.
			// Move 'box' to the position described by 'coords' with a CSS translation.
      camera.position.z = coords.x;
			camera.updateProjectionMatrix();
		});
  

  wallGroup = setupBackwall(scene);
  wallGroup.position.z = - 15 - roomDepth / 2;
  scene.add(wallGroup);

  [ composer, bloomComposer, bloomLayer ] = new setupEffects(renderer, scene, camera);

  darkMaterial = new THREE.MeshBasicMaterial( { color: 'black' } );
  materials = {};

  const controls2 = new OrbitControls(camera, renderer2.domElement);
  controls2.target.set(0, 10, 0);
  controls2.update();

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 10, 0);
  controls.update();
  
  if (window.virtual_office.debug) {
    stats = new Stats();
    document.body.appendChild(stats.dom);
  }

  // Adjust ambient light intensity
  var ambientLight = new THREE.AmbientLight(window.virtual_office.fast ? 0x554455 : 0x443344); // Dim ambient light color
  scene.add(ambientLight);

  function handleViewportChange() {
    var adjustedGapSize = calculateAdjustedGapSize();
    roomDepth = 8 * adjustedGapSize;

    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.position.z = - 16 + (roomDepth / 2);
    camera.updateProjectionMatrix();

    // Adjust desk positions based on the aspect ratio
    deskGroup.children.forEach(function (desk, i) {
      updateDeskZ(desk, i, adjustedGapSize);
    });

    screenCSSGroup.children.forEach(function (screen, i) {
      updateDeskZ(screen, i, adjustedGapSize);
    });
    screenWebGLGroup.children.forEach(function (screen, i) {
      updateDeskZ(screen, i, adjustedGapSize);
    });

    const geometry = new THREE.BoxGeometry(60, 30, roomDepth);
    room.geometry = geometry;

    wallGroup.position.z = - 15 - roomDepth / 2;

    door.position.set(- doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (roomDepth / 2));

    renderer.setSize(width, height);
    renderer2.setSize(width, height);
    composer.setSize(width, height);
  }
  
  window.addEventListener('orientationchange', handleViewportChange);
  window.addEventListener('resize', handleViewportChange);

}

export function animate(currentTime) {

  if ( window.virtual_office.started == false && window.virtual_office.screensLoaded == 4) {
    window.virtual_office.started = true;
    tween.start();
  }

  scaleEffects(currentTime, renderer);

  if ( window.virtual_office.started ) {
    tween.update(currentTime);
  }

  requestAnimationFrame(animate);

  if (window.virtual_office.debug) {
    stats.update();
  }

  // Render the composer
  if (!window.virtual_office.fast) {
    
    scene.traverse( darkenNonBloomed );
    bloomComposer.render();
    scene.traverse( restoreMaterial );
    composer.render();
    renderer2.render(scene2, camera);

  } else {
    renderer.render(scene, camera); // Render the scene without the effects
    renderer2.render(scene2, camera);
  }

}

function darkenNonBloomed( obj ) {

  if ( obj.isMesh && bloomLayer.test( obj.layers ) === false ) {

    materials[ obj.uuid ] = obj.material;
    obj.material = darkMaterial;

  }

}

function restoreMaterial( obj ) {

  if ( materials[ obj.uuid ] ) {

    obj.material = materials[ obj.uuid ];
    delete materials[ obj.uuid ];

  }

}

function calculateAdjustedGapSize() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  // Adjust gap size based on the aspect ratio
  var adjustedGapSize = gapSize * scale;
  if (width < height) {
    adjustedGapSize *= height / width;
  }

  return adjustedGapSize;
}

// Create door geometry
var doorWidth = 8.2;
var doorHeight = 20.4;
var doorDepth = 0.2;
function createDoor() {
  var doorParent = new THREE.Object3D();


  var doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth);

  // Create door material
  var doorMaterial = new THREE.MeshLambertMaterial({ color: 0x986b41 });

  // Create door mesh
  var mesh = new THREE.Mesh(doorGeometry, doorMaterial);

  // Set initial position and rotation of the door
  mesh.position.set(doorWidth / 2, 0, 0);

  doorParent.add(mesh);

  // Add the door to the scene
  return doorParent;
}

function createOfficeRoom() {
  var adjustedGapSize = calculateAdjustedGapSize();

  roomDepth = 8 * adjustedGapSize;

  door = createDoor();
  door.position.set(-doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (roomDepth / 2));
  
  const csgEvaluator = new Evaluator();
  csgEvaluator.useGroups = true;

  const transparentMaterial = new THREE.MeshLambertMaterial({
     opacity: 0,
     transparent: true
  });

  const doorBrush = new Brush( door.children[0].geometry, transparentMaterial );
  doorBrush.position.copy( door.position );
  doorBrush.position.x += 4.1;
  doorBrush.scale.setScalar( door.scale.x );
  doorBrush.updateMatrixWorld();

  const roomGeometry = new THREE.BoxGeometry(60, 30, roomDepth);

  const roomMaterial = new THREE.MeshLambertMaterial({
    color: 0xa0adaf,
    opacity: 1,
    shininess: 10,
    specular: 0x111111,
    side: THREE.DoubleSide,
    transparent: true
  });
 
  const roomBrush = new Brush( roomGeometry, roomMaterial );
  roomBrush.position.y = 10;
  roomBrush.position.z = -15;
  
  roomBrush.updateMatrixWorld();

  let result = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial()
  );

  result.receiveShadow = true;
  result.layers.enable(1);

  csgEvaluator.evaluate( roomBrush, doorBrush, SUBTRACTION, result );

  return result;
}