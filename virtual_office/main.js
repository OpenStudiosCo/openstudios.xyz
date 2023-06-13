import * as THREE from 'three';

import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { scaleEffects, setupEffects } from './effects.js';
import { setupBackwall, setupDesks, updateDeskZ } from './furniture.js';

let composer, camera, scene, renderer, stats, gapSize, scale, deskGroup;
let room, roomDepth, wallGroup;

export function init( pane ) {

  // Scene Setup.

  // Camera.
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 10, 40);

  // Scene container.
  scene = new THREE.Scene();

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
  // Create a desk

  gapSize = 1; // Gap size between desks
  scale = 10; // Scale factor

  var adjustedGapSize = calculateAdjustedGapSize();

  camera.position.z = 4 * adjustedGapSize;

  deskGroup = setupDesks(adjustedGapSize, gapSize, scale, scene);
  scene.add(deskGroup);

  renderer = new THREE.WebGLRenderer({ antialias: window.virtual_office.fast });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  room = createRoom();
  scene.add(room);  

  wallGroup = setupBackwall(scene);
  wallGroup.position.z = - 15 - roomDepth / 2;
  scene.add(wallGroup)

  composer = new setupEffects( renderer, scene, camera );

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
    camera.position.z = 4 * adjustedGapSize;
    camera.updateProjectionMatrix();

    // Adjust desk positions based on the aspect ratio
    deskGroup.children.forEach(function (desk, i) {
      updateDeskZ(desk, i, adjustedGapSize);
    });

    roomDepth = 6 * adjustedGapSize;

    const geometry = new THREE.BoxGeometry(60, 30, roomDepth);
    room.geometry = geometry;

    wallGroup.position.z = - 15 - roomDepth / 2;

    renderer.setSize(width, height);
    composer.setSize(width, height);

  });

}


export function animate( currentTime ) {

  scaleEffects( currentTime, renderer );

  requestAnimationFrame(animate);

  stats.update();

  // Render the composer
  if (! window.virtual_office.fast ) {
    composer.render();
  } else {
    renderer.render(scene, camera); // Render the scene without the effects
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

function createRoom() {
  var adjustedGapSize = calculateAdjustedGapSize();

  roomDepth = 6 * adjustedGapSize;

  const geometry = new THREE.BoxGeometry(60, 30, roomDepth);

  const material = new THREE.MeshPhongMaterial({
    color: 0xa0adaf,
    shininess: 10,
    specular: 0x111111,
    side: THREE.BackSide
  });

  let mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 10;
  mesh.position.z = -15;
  mesh.receiveShadow = true;
  return mesh;
}
