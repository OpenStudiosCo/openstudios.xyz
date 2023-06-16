import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

import { SUBTRACTION, Brush, Evaluator } from 'three-bvh-csg';
import { MeshBVHVisualizer } from 'three-mesh-bvh';


import { scaleEffects, setupEffects } from './effects.js';
import { setupBackwall, setupDesks, updateDeskZ } from './furniture.js';
import { setupTweens, updateTweens } from './tweens.js';

let csgEvaluator;
let bloomComposer, bloomLayer, composer, scene, renderer, stats, gapSize, scale;
let deskGroup, door, room, screenCSSGroup, screenWebGLGroup, wallGroup;

let scene2, renderer2;

let materials, darkMaterial;

export function init(pane) {

  csgEvaluator = new Evaluator();
  csgEvaluator.useGroups = true;

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

  window.virtual_office.scene_objects.screens_loaded = 0;
  room = createOfficeRoom();
  scene.add(room);

  window.virtual_office.scene_objects.door = createDoor();
  window.virtual_office.scene_objects.door.position.set(-doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));
  scene.add(window.virtual_office.scene_objects.door);

  // Camera.
  window.virtual_office.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  window.virtual_office.camera.position.set(0, 10, 15 + (window.virtual_office.room_depth / 2));

  setupTweens();


  // Scene Setup. 
  wallGroup = setupBackwall(scene);
  wallGroup.position.z = - 15 - window.virtual_office.room_depth / 2;
  scene.add(wallGroup);

  [ composer, bloomComposer, bloomLayer ] = new setupEffects( renderer, scene );

  darkMaterial = new THREE.MeshBasicMaterial( { color: 'black' } );
  materials = {};

  const controls2 = new OrbitControls(window.virtual_office.camera, renderer2.domElement);
  controls2.target.set(0, 10, 0);
  controls2.update();

  const controls = new OrbitControls(window.virtual_office.camera, renderer.domElement);
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
    window.virtual_office.room_depth = 8 * adjustedGapSize;

    var width = window.innerWidth;
    var height = window.innerHeight;
    window.virtual_office.camera.aspect = width / height;
    window.virtual_office.camera.position.z = - 16 + (window.virtual_office.room_depth / 2);
    window.virtual_office.camera.updateProjectionMatrix();

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

    const newRoom = createOfficeRoom();
    room.geometry = newRoom.geometry;

    wallGroup.position.z = - 15 - window.virtual_office.room_depth / 2;

    window.virtual_office.scene_objects.door.position.set(- doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));

    renderer.setSize(width, height);
    renderer2.setSize(width, height);
    composer.setSize(width, height);
  }
  
  window.addEventListener('orientationchange', handleViewportChange);
  window.addEventListener('resize', handleViewportChange);

}

export function animate(currentTime) {

  scaleEffects(currentTime, renderer);

  if ( window.virtual_office.started ) {
    updateTweens(currentTime);
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
    renderer2.render(scene2, window.virtual_office.camera);

  } else {
    renderer.render(scene, window.virtual_office.camera); // Render the scene without the effects
    renderer2.render(scene2, window.virtual_office.camera);
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
  var doorBrush = new Brush(doorGeometry, doorMaterial);
  // Set initial position and rotation of the door
  doorBrush.position.set(doorWidth / 2, 0, 0);
  doorBrush.updateMatrixWorld();


  var doorWindowGeometry = new THREE.BoxGeometry(doorWidth / 1.3 , doorHeight /2, doorDepth );

  // Create door material
  var doorWindowMaterial = new THREE.MeshLambertMaterial({
    color: 0xC7E3E1,
    opacity: 0.85,
    transparent: true
  });

  // Create door window mesh
  var windowBrush = new Brush(doorWindowGeometry, doorWindowMaterial);
  // Set initial position and rotation of the door
  windowBrush.position.set(doorWidth / 2, 2.5* (doorHeight/ 12), 0);
  windowBrush.updateMatrixWorld();

  let result = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial()
  );

  csgEvaluator.evaluate( doorBrush, windowBrush, SUBTRACTION, result );

  doorParent.add(result);

  doorParent.add(windowBrush);
  // Add the door to the scene
  return doorParent;
}

function createOfficeRoom() {
  var adjustedGapSize = calculateAdjustedGapSize();

  window.virtual_office.room_depth = 8 * adjustedGapSize;

  var doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth);
  const transparentMaterial = new THREE.MeshLambertMaterial({
     opacity: 0,
     transparent: true
  });

  const doorBrush = new Brush( doorGeometry, transparentMaterial );
  doorBrush.position.set(-doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));
  doorBrush.position.x += 4.1;
  doorBrush.updateMatrixWorld();

  const roomGeometry = new THREE.BoxGeometry(60, 30, window.virtual_office.room_depth);

  const roomMaterial = new THREE.MeshLambertMaterial({
    color: 0xa0adaf,
    opacity: 1,
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