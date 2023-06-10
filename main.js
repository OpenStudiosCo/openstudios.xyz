import * as THREE from 'three';


import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';


let composer, camera, scene, renderer, stats, gapSize, scale, deskGroup;
let pointLight, pointLight2, mesh;

init();
animate();

function init() {

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
  function createDesk() {
    var deskGroup = new THREE.Group();

    // Desk Top
    var deskTopGeometry = new THREE.BoxGeometry(1.5, 0.1, 0.8);
    var deskTopMaterial = new THREE.MeshPhongMaterial({ color: 0x303030 });
    var deskTop = new THREE.Mesh(deskTopGeometry, deskTopMaterial);
    deskTop.position.y = 0.05;

    // Desk Legs
    var legGeometry = new THREE.BoxGeometry(0.1, 0.7, 0.1);
    var legMaterial = new THREE.MeshPhongMaterial({ color: 0x303030 });

    var frontLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
    frontLeftLeg.position.set(-0.7, -0.4, -0.3);

    var frontRightLeg = new THREE.Mesh(legGeometry, legMaterial);
    frontRightLeg.position.set(0.7, -0.4, -0.3);

    var backLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
    backLeftLeg.position.set(-0.7, -0.4, 0.3);

    var backRightLeg = new THREE.Mesh(legGeometry, legMaterial);
    backRightLeg.position.set(0.7, -0.4, 0.3);

    // Desk Side Panels
    var panelGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.8);
    var panelMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });

    var leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
    leftPanel.position.set(-0.8, -0.2, 0);

    var rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
    rightPanel.position.set(0.8, -0.2, 0);

    deskGroup.add(deskTop, frontLeftLeg, frontRightLeg, backLeftLeg, backRightLeg, leftPanel, rightPanel);

    // Add computer screen
    var screenGeometry = new THREE.BoxGeometry(0.6, 0.4, 0.02);
    var screenMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    var screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 0.25, 0.2);
    deskGroup.add(screen);

    // Add computer CPU
    var cpuGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    var cpuMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
    var cpu = new THREE.Mesh(cpuGeometry, cpuMaterial);
    cpu.position.set(0, 0.15, 0.33);
    deskGroup.add(cpu);

      
    // Create an overhead office light geometry
    var lightWidth = 0.5;
    var lightHeight = 0.2;
    var lightDepth = 3;
    var lightGeometry = new THREE.BoxGeometry(lightWidth, lightHeight, lightDepth);

    // Create the overhead office light material
    var lightMaterial = new THREE.MeshPhongMaterial({ color: 0x00EEff, emissive: 0x00EEff, emissiveIntensity: 0.15 });

    // Create the overhead office light mesh
    var lightMesh = new THREE.Mesh(lightGeometry, lightMaterial);

    // Position the overhead office light
    lightMesh.position.set(0, 2.5, 0);
    lightMesh.rotation.y = Math.PI / 2;
    // Add the overhead office light to the scene
    deskGroup.add(lightMesh);
  

    return deskGroup;
  }

  // Create desks
  gapSize = 1; // Gap size between desks
  scale = 10; // Scale factor
  deskGroup = new THREE.Group();

  var width = window.innerWidth;
  var height = window.innerHeight;

  // Adjust gap size based on the aspect ratio
  var adjustedGapSize = gapSize * scale;
  if (width < height) {
    adjustedGapSize *= height / width;
  }

  camera.position.z = 4 * adjustedGapSize;

  for (var i = 0; i < 4; i++) {
    var desk = createDesk();
    desk.rotation.y = Math.PI / 2;
    if (i < 2) {
      desk.position.x = -(gapSize * scale);
      desk.position.z = (i === 0 ? -3.5 : 0.5) * adjustedGapSize;
      desk.rotation.y += Math.PI; // Rotate the desk on the left side
    } else {
      desk.position.x = (gapSize * scale);
      desk.position.z = (i === 2 ? -3.5 : 0.5) * adjustedGapSize;
    }

    desk.scale.set(scale, scale, scale); // Scale up the desk
    deskGroup.add(desk);

  }

  scene.add(deskGroup);

  // Portraits

  // Load textures
  var portraitTexture1 = new THREE.TextureLoader().load('./garrett.png');
  var portraitTexture2 = new THREE.TextureLoader().load('./paul.png');

  // Create portrait materials
  var portraitMaterial1 = new THREE.MeshPhongMaterial({ map: portraitTexture1, specular: 1 });
  var portraitMaterial2 = new THREE.MeshPhongMaterial({ map: portraitTexture2, specular: 1 });


  // Set portrait dimensions
  var portraitWidth = 4;
  var portraitHeight = 4;

  // Create portrait planes
  var portrait1 = new THREE.Mesh(new THREE.PlaneGeometry(portraitWidth, portraitHeight), portraitMaterial1);
  var portrait2 = new THREE.Mesh(new THREE.PlaneGeometry(portraitWidth, portraitHeight), portraitMaterial2);

  // Position the portraits
  portrait1.position.set(-5, 8, -90);  // Example position for portrait 1
  portrait2.position.set(5, 8, -90);   // Example position for portrait 2

  // Add portraits to the scene
  scene.add(portrait1);
  scene.add(portrait2);

  const geometry = new THREE.BoxGeometry(60, 30, 170);

  const material = new THREE.MeshPhongMaterial({
    color: 0xa0adaf,
    shininess: 10,
    specular: 0x111111,
    side: THREE.BackSide
  });

  mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 10;
  mesh.position.z = -20;
  mesh.receiveShadow = true;
  scene.add(mesh);

  //

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
  document.body.appendChild(renderer.domElement);

  // About Us Neon sign
  const loader = new FontLoader();

  loader.load('./cursive.json', function (font) {

    const textGeometry = new TextGeometry('about us', {
      font: font,
      size: 2,
      height: 1,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: .05,
      bevelOffset: 0,
      bevelSegments: 5
    });


    // Create the emissive material for the text
    var textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xff66ff, emissiveIntensity: 1 });
    //    new THREE.MeshBasicMaterial({ color: 0xff00ff, emissive: 0xff00ff, emissiveIntensity: 1 });

    // Create the "About Us" sign mesh
    var signMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Position and rotate the sign
    signMesh.position.set(-7, 15, -105.5); // Example position for the sign
    //signMesh.rotation.x = -Math.PI / 2; // Rotate the sign to face forward

    // Add the sign to the scene
    scene.add(signMesh);
  });

  // Apply Unreal Bloom post-processing effect
  var renderScene = new RenderPass(scene, camera);
  var bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = 0.12;
  bloomPass.strength = 0.5;
  bloomPass.radius = Math.PI / 10;

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
var ambientLight = new THREE.AmbientLight(0x333333); // Dim ambient light color
scene.add(ambientLight);

  window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {
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

    if (i < 2) {
      desk.position.z = (i === 0 ? -3.5 : 0.5) * adjustedGapSize;
    } else {
      desk.position.z = (i === 2 ? -3.5 : 0.5) * adjustedGapSize;
    }
  });

  renderer.setSize(width, height);
  composer.setSize(width, height);

}

function generateTexture() {

  const canvas = document.createElement('canvas');
  canvas.width = 2;
  canvas.height = 2;

  const context = canvas.getContext('2d');
  context.fillStyle = 'white';
  context.fillRect(0, 1, 2, 1);

  return canvas;

}

function animate() {
  requestAnimationFrame(animate);

  stats.update();

  composer.render();

}


