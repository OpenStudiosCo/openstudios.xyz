import * as THREE from 'three';

import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject  } from 'three/addons/renderers/CSS3DRenderer.js';


import { scaleEffects, setupEffects } from './effects.js';
import { setupBackwall, setupDesks, updateDeskZ } from './furniture.js';
let tween, tweenActivated;
let bloomComposer, bloomLayer, composer, camera, scene, renderer, stats, gapSize, scale, deskGroup;
let door, room, roomDepth, wallGroup;

let scene2, renderer2;

let materials, darkMaterial, domObject;

export function init(pane) {

  // Scene container.
  scene = new THREE.Scene();
  scene2 = new THREE.Scene();


  // Add the extension functions
  THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
  THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
  THREE.Mesh.prototype.raycast = acceleratedRaycast;

  // // Generate geometry and associated BVH
  // const geom = new THREE.TorusKnotGeometry( 3, 3, 40, 10 );
  // const bvhmesh = new THREE.Mesh( geom, new THREE.MeshStandardMaterial( {
  //   flatShading: true,
  //   color: 0xff9800,
  //   emissive: 0xff9800,
  //   emissiveIntensity: 0.35,

  //   polygonOffset: true,
  //   polygonOffsetUnits: 1,
  //   polygonOffsetFactor: 1,

  // } ));
  // geom.computeBoundsTree();

  // scene.add( bvhmesh );

  gapSize = 1; // Gap size between desks
  scale = 11; // Scale factor

  var adjustedGapSize = calculateAdjustedGapSize();

  deskGroup = setupDesks(adjustedGapSize, gapSize, scale, scene);
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

  room = createRoom();
  scene.add(room);

  var element = document.createElement("iframe");
  element.style.width = "300px";
  element.style.height = "200px";
  element.style.opacity = 0.999;
  element.src = "https://www.youtube.com/embed/pnEoyGDhc80";

  domObject = new CSS3DObject(element);
  domObject.scale.set( 0.02, 0.02, 0.02);
  domObject.position.x = -13.6;
  domObject.position.y = 5.5;
  domObject.position.z = - 20.5 + adjustedGapSize;
  console.log(adjustedGapSize);

  domObject.rotation.y = Math.PI / 2;
  scene2.add(domObject);

  var material = new THREE.MeshPhongMaterial({
    opacity: 0.2,
    color: new THREE.Color("black"),
    blending: THREE.NoBlending,
    side: THREE.DoubleSide
  });
  var geometry = new THREE.PlaneGeometry(6, 4);
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(domObject.position);
  mesh.rotation.copy(domObject.rotation);
  
  //mesh.scale.copy( domObject.scale );
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  scene.add(mesh);

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
		})

  door = createDoor();
  door.position.set(-doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (roomDepth / 2));
  scene.add(door);

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
  
  stats = new Stats();
  document.body.appendChild(stats.dom);

  // Adjust ambient light intensity
  var ambientLight = new THREE.AmbientLight(0x554455); // Dim ambient light color
  scene.add(ambientLight);

  window.addEventListener('resize', function () {
    var adjustedGapSize = calculateAdjustedGapSize();

    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.position.z = - 16 + (roomDepth / 2);
    camera.updateProjectionMatrix();

    // Adjust desk positions based on the aspect ratio
    deskGroup.children.forEach(function (desk, i) {
      updateDeskZ(desk, i, adjustedGapSize);
    });

    roomDepth = 8 * adjustedGapSize;
    const geometry = new THREE.BoxGeometry(60, 30, roomDepth);
    room.geometry = geometry;

    wallGroup.position.z = - 15 - roomDepth / 2;

    door.position.set(- doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (roomDepth / 2));

    renderer.setSize(width, height);
    composer.setSize(width, height);

  });

  tween.start();   

}

export function animate(currentTime) {

  scaleEffects(currentTime, renderer);

  tween.update(currentTime);

  requestAnimationFrame(animate);

  stats.update();

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

function createRoom() {
  var adjustedGapSize = calculateAdjustedGapSize();

  roomDepth = 8 * adjustedGapSize;

  const geometry = new THREE.BoxGeometry(60, 30, roomDepth);

  const material = new THREE.MeshPhongMaterial({
    color: 0xa0adaf,
    shininess: 10,
    specular: 0x111111,
    side: THREE.DoubleSide
  });

  let mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 10;
  mesh.position.z = -15;
  mesh.receiveShadow = true;
  return mesh;
}
