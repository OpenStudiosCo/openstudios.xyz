import * as THREE from 'three';

import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer, stats, gapSize, scale, deskGroup;
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


  // lights

  function createLight(color) {

    const intensity = 2;

    const light = new THREE.PointLight(color, intensity, 20);
    light.castShadow = true;
    light.shadow.bias = - 0.005; // reduces self-shadowing on double-sided objects

    let geometry = new THREE.SphereGeometry(0.3, 12, 6);
    let material = new THREE.MeshBasicMaterial({ color: color });
    material.color.multiplyScalar(intensity);
    let sphere = new THREE.Mesh(geometry, material);
    light.add(sphere);

    const texture = new THREE.CanvasTexture(generateTexture());
    texture.magFilter = THREE.NearestFilter;
    texture.wrapT = THREE.RepeatWrapping;
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.set(1, 4.5);

    geometry = new THREE.SphereGeometry(2, 32, 8);
    material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      alphaMap: texture,
      alphaTest: 0.5
    });

    sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    light.add(sphere);

    return light;

  }

  pointLight = createLight(0x0088ff);
  scene.add(pointLight);

  pointLight2 = createLight(0xff8888);
  scene.add(pointLight2);
  //

  const geometry = new THREE.BoxGeometry(30, 30, 170);

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

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 10, 0);
  controls.update();

  stats = new Stats();
  document.body.appendChild(stats.dom);

  //

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
  render();

}

function render() {

  let time = performance.now() * 0.001;

  pointLight.position.x = Math.sin(time * 0.6) * 9;
  pointLight.position.y = Math.sin(time * 0.7) * 9 + 6;
  pointLight.position.z = Math.sin(time * 0.8) * 9;

  pointLight.rotation.x = time;
  pointLight.rotation.z = time;

  time += 10000;

  pointLight2.position.x = Math.sin(time * 0.6) * 9;
  pointLight2.position.y = Math.sin(time * 0.7) * 9 + 6;
  pointLight2.position.z = Math.sin(time * 0.8) * 9;

  pointLight2.rotation.x = time;
  pointLight2.rotation.z = time;

  renderer.render(scene, camera);

  stats.update();

}
