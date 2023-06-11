import * as THREE from 'three';

import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { createNeonSign, createPortrait, setupDesks, updateDeskZ } from './furniture.js';

let composer, camera, scene, renderer, stats, gapSize, scale, deskGroup;
let mesh;

export function init() {

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 10, 40);

  scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0x111122));

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 0.01);
  light.position.set(- 2, 2, 2);
  scene.add(light);

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

  var width = window.innerWidth;
  var height = window.innerHeight;

  // Adjust gap size based on the aspect ratio
  var adjustedGapSize = gapSize * scale;
  if (width < height) {
    adjustedGapSize *= height / width;
  }

  camera.position.z = 4 * adjustedGapSize;

  deskGroup = setupDesks(adjustedGapSize, gapSize, scale);
  scene.add(deskGroup);

  // Add portraits to the scene
  let paulsPortrait = createPortrait( './paul.png', 2.75 );
  paulsPortrait.position.set(-5, 8, -44 );  // Example position for portrait 1
  scene.add(paulsPortrait);

  let garrettsPortrait = createPortrait( './garrett.png', 4. );
  garrettsPortrait.position.set(5, 8, -44 );  // Example position for portrait 1
  scene.add(garrettsPortrait);
  
  scene.add(garrettsPortrait);

  const geometry = new THREE.BoxGeometry(60, 30, 135 );

  const material = new THREE.MeshPhongMaterial({
    color: 0xa0adaf,
    shininess: 10,
    specular: 0x111111,
    side: THREE.BackSide
  });

  mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 10;
  mesh.position.z = 15;
  mesh.receiveShadow = true;
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
  document.body.appendChild(renderer.domElement);

  // About Us Neon sign
  createNeonSign( ( signMesh ) => {
    // Position and rotate the sign
    signMesh.position.set(-7, 15, -45 ); // Example position for the sign
    scene.add( signMesh );
  });

  // Apply Unreal Bloom post-processing effect
  var renderScene = new RenderPass(scene, camera);
  var bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = 0.15;
  bloomPass.strength = 0.4;
  bloomPass.radius = 0.95;

  const outputPass = new OutputPass( THREE.ACESFilmicToneMapping );

  outputPass.toneMappingExposure = Math.pow( Math.PI / 3, 4.0 );

  composer = new EffectComposer(renderer);
  composer.setSize(window.innerWidth, window.innerHeight);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 10, 0);
  controls.update();

  stats = new Stats();
  document.body.appendChild(stats.dom);

  
// Adjust ambient light intensity
var ambientLight = new THREE.AmbientLight(0x4A2F45); // Dim ambient light color
scene.add(ambientLight);

  window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
  
    // Adjust gap size based on the aspect ratio
    var adjustedGapSize = gapSize * scale;
    if (width < height) {
      adjustedGapSize *= height / width;
    }
  
    camera.aspect = width / height;
    camera.position.z = 4 * adjustedGapSize;
    camera.updateProjectionMatrix();
  
    // Adjust desk positions based on the aspect ratio
    deskGroup.children.forEach(function (desk, i) {
      updateDeskZ( desk, i , adjustedGapSize);
    });
  
    renderer.setSize(width, height);
    composer.setSize(width, height);
  
  });

}

export function animate() {
  requestAnimationFrame(animate);

  stats.update();

  composer.render();

}
