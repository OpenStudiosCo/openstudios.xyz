import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { SUBTRACTION, Brush, Evaluator } from 'three-bvh-csg';
import { MeshBVHVisualizer } from 'three-mesh-bvh';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

import { scaleEffects, setupEffects } from './effects.js';
import { handleInteractions, handleViewportChange, handleExitSign } from './events.js';
import { setupBackwall, setupDesks } from './furniture.js';
import { setupTriggers, updateTriggers } from './triggers.js';
import { setupTweens, updateTweens, startTweening } from './tweens.js';

let csgEvaluator;
let scene, stats;

let materials, darkMaterial;

export function init(pane) {

  window.virtual_office.loaders.gtlf = new GLTFLoader();
  window.virtual_office.loaders.texture =  new THREE.TextureLoader();

  // Constructive Solid Geometry (csg) Evaluator.
  csgEvaluator = new Evaluator();
  csgEvaluator.useGroups = true;

  // Size
  window.virtual_office.scene_dimensions.adjusted_gap = calculateAdjustedGapSize();
  window.virtual_office.room_depth = 8 * window.virtual_office.scene_dimensions.adjusted_gap;

  // Setup renderers.
  setupRenderers();

  // Camera.
  var width = window.innerWidth;
  var height = window.innerHeight;
  var aspect = width / height;
  var fov = setCameraFOV(aspect);
  window.virtual_office.camera = new THREE.PerspectiveCamera(fov, aspect, 1, 1000);
  window.virtual_office.camera.aspect = width / height;
  window.virtual_office.camera.position.set(0, 12, 15 + (window.virtual_office.room_depth / 2));
  
  // Reusable pointer for tracking user interaction.
  window.virtual_office.pointer = new THREE.Vector3(); 

  // Reusable raycaster for tracking what the user tried to hit.
  window.virtual_office.raycaster = new THREE.Raycaster();

  // Scene Setup. 
  setupScene();


  if (window.virtual_office.debug) {
    const helper = new THREE.CameraHelper(window.virtual_office.camera);

    scene.add(helper);
  }

  // Setup effects.
  [ window.virtual_office.effects.main, window.virtual_office.effects.bloom, window.virtual_office.effects.bloomLayer ] = new setupEffects(window.virtual_office.renderers.webgl, scene);

  // Bloom effect materials.
  darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
  materials = {};

  window.virtual_office.controls = new OrbitControls(window.virtual_office.camera, window.virtual_office.renderers.webgl.domElement);
  window.virtual_office.controls.enabled = window.virtual_office.debug;
  window.virtual_office.controls.target.set(0, 10, 0);
  window.virtual_office.controls.update();

  if (window.virtual_office.debug) {
    stats = new Stats();
    document.body.appendChild(stats.dom);
  }

  // Setup triggersw
  setupTriggers( );

  // Setup Tweens.
  setupTweens( );

  window.addEventListener('orientationchange', handleViewportChange);
  window.addEventListener('resize', handleViewportChange);

  document.getElementById('exitSign').addEventListener('click', handleExitSign);
  document.getElementById('exitSign').addEventListener('touchend', handleExitSign);

  function onPointerMove(event) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    window.virtual_office.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    window.virtual_office.pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

  }

  window.addEventListener('pointermove', onPointerMove);

  function onTouchStart(event) {
    if (!window.virtual_office.selected) {
      event.preventDefault();

      window.virtual_office.pointer.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
      window.virtual_office.pointer.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
      window.virtual_office.pointer.z = 1; // previously mouseDown = true
    }
  }
  function onTouchEnd(event) {
    if (!window.virtual_office.selected) {
      event.preventDefault();

      window.virtual_office.pointer.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
      window.virtual_office.pointer.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
      window.virtual_office.pointer.z = 0; // previously mouseDown = false
    }
  }

  window.addEventListener('touchstart', onTouchStart, false);
  window.addEventListener('touchend', onTouchEnd, false);

  function onMouseDown(event) {
    window.virtual_office.pointer.z = 1; // previously mouseDown = true
  }

  function onMouseUp(event) {
    window.virtual_office.pointer.z = 0; // previously mouseDown = false
  }

  // Attach the mouse down and up event listeners
  window.addEventListener("pointerdown", onMouseDown, false);
  window.addEventListener("pointerup", onMouseUp, false);

}

export function setCameraFOV(aspect) {
  var fov;

  var threshold = 0.88;

  if (aspect < threshold) {
    // Portrait or square orientation
    fov = mapRange(aspect, 0.5, threshold, 60, 60);
  } else {
    // Widescreen orientation
    if (aspect < 2) {
      // Tolerance for square to widescreen transition
      fov = mapRange(aspect, threshold, 2, 60, 45);
    } else {
      if (aspect < 2.25) {
        fov = mapRange(aspect, 2, 2.25, 45, 40);
      }
      else {
        if (aspect < 3) {
          fov = mapRange(aspect, 2.25, 5, 40, 90);
        }
        else {
          fov = 90;
        }

      }
    }
  }

  return fov;
}

// Function to map a value from one range to another
function mapRange(value, inMin, inMax, outMin, outMax) {
  return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let frameCount = 0;
let lastTime = performance.now();

function updateFPS() {
  // Calculate FPS
  const currentTime = performance.now();
  const timeDiff = currentTime - lastTime;
  frameCount++;
  if (timeDiff >= 1000) {
    window.virtual_office.fps = Math.round((frameCount * 1000) / timeDiff);
    frameCount = 0;
    lastTime = currentTime;
  }
}

export function animate(currentTime) {

  updateFPS();

  requestAnimationFrame(animate);

  if (window.virtual_office.started) {

    updateTriggers(currentTime);

    updateTweens(currentTime);

    if (!window.virtual_office.debug) {
      handleInteractions( scene );
    }

    window.virtual_office.scene_objects.desk_labels.forEach( (desk_label, index) => {
      const phaseShift = index * (Math.PI / 2); // Adjust the phase shift as needed
      const yOffset = Math.sin(currentTime * 0.0025 + phaseShift) * .010; // Adjust the amplitude (10 in this case)

      // Update the label's position based on the calculated yOffset
      desk_label.mesh.position.y = desk_label.originalPosition.y + yOffset;
    } );

  }
  else {
    let ready = false;
    // Check if we can start.
    for ( var measure in window.virtual_office.loaders.stats ) {
      if (
        // Check everything has loaded.
        window.virtual_office.loaders.stats[measure].loaded == window.virtual_office.loaders.stats[measure].target &&
        // Check door sign is loaded up.
        window.virtual_office.scene_objects.door_sign
      ) {
        ready = true;
      }
      else {
        ready = false;
      }
    }
    if (ready) {
      startTweening();
    }
  }

  scaleEffects(currentTime, window.virtual_office.renderers.webgl);

  if (window.virtual_office.debug) {
    stats.update();
  }

  // Render the composer
  if (!window.virtual_office.fast) {
    scene.traverse(darkenNonBloomed);
    window.virtual_office.effects.bloom.render();
    scene.traverse(restoreMaterial);
    window.virtual_office.effects.main.render();
  } else {
    window.virtual_office.renderers.webgl.render(scene, window.virtual_office.camera); // Render the scene without the effects
  }

}

function darkenNonBloomed(obj) {

  if (obj.isMesh && window.virtual_office.effects.bloomLayer.test(obj.layers) === false) {

    materials[obj.uuid] = obj.material;
    obj.material = darkMaterial;

  }

}

function restoreMaterial(obj) {

  if (materials[obj.uuid]) {

    obj.material = materials[obj.uuid];
    delete materials[obj.uuid];

  }

}

export function calculateAdjustedGapSize() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  // Adjust gap size based on the aspect ratio
  var adjustedGapSize = window.virtual_office.scene_dimensions.gap * window.virtual_office.scene_dimensions.scale;
  if (width < height) {
    adjustedGapSize *= height / width;
  }

  return adjustedGapSize;
}

// Create door geometry
export var doorWidth = 8.2;
export var doorHeight = 20.4;
export var doorDepth = 0.2;
function createDoor() {
  var doorParent = new THREE.Object3D();

  window.virtual_office.loaders.texture.load('./models/desk-diffuse.jpg', (doorTexture) => {
    doorTexture.wrapS = THREE.RepeatWrapping;
    doorTexture.wrapT = THREE.RepeatWrapping;
    doorTexture.repeat.set( doorWidth / 8, doorHeight / 8 );

    var doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth);

    // Create door material
    var doorMaterial = new THREE.MeshLambertMaterial({ map: doorTexture, name: 'door' });

    // Create door mesh
    var door = new THREE.Mesh(doorGeometry, doorMaterial);
    // Set initial position and rotation of the door
    door.position.set(doorWidth / 2, 0, 0);
    door.updateMatrixWorld();

    doorParent.add(door);
    window.virtual_office.loaders.stats.textures.loaded ++;
  });

  // instantiate a loader
  const loader = new SVGLoader();

  loader.load("../logo.svg", function (data) {

    const group = new THREE.Group();
    group.scale.multiplyScalar(0.0025);
    group.position.x = 1.35;
    group.position.y = 7.5;
    group.position.z = 0.15;
    group.scale.y *= - 1;

    let renderOrder = 0;

    for (const path of data.paths) {

      // Grab the desired color from the SVG fill.
      const fillColor = path.userData.style.fill;

      if ( fillColor !== undefined && fillColor !== 'none') {

        const material = new THREE.MeshLambertMaterial({
          emissiveIntensity: 0,
          emissive: new THREE.Color().setStyle(fillColor)
        });

        const shapes = SVGLoader.createShapes(path);

        for (const shape of shapes) {

          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);
          mesh.renderOrder = renderOrder++;
          mesh.layers.enable(1);

          group.add(mesh);
        }

      }

      const strokeColor = path.userData.style.stroke;

      if ( strokeColor !== undefined && strokeColor !== 'none') {

        const material = new THREE.MeshLambertMaterial({
          emissiveIntensity: 0,
          emissive: new THREE.Color().setStyle(strokeColor)
        });
        path.userData.style.strokeWidth *= 2;
        for (const subPath of path.subPaths) {
          const geometry = SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style);
          
          if (geometry) {

            const mesh = new THREE.Mesh(geometry, material);
            mesh.renderOrder = renderOrder++;
            mesh.layers.enable(1);

            group.add(mesh);

          }

        }

      }

    }
    window.virtual_office.scene_objects.door_sign = group;

    doorParent.add(group);
    let backWallLogo = group.clone();
    backWallLogo.scale.multiplyScalar(2.5);
    backWallLogo.position.x = -6.85;
    backWallLogo.position.y = 28.5;
    backWallLogo.position.z = 1.5;
    backWallLogo.name = 'backWallLogo';

    window.virtual_office.scene_objects.wallGroup.add(backWallLogo);

    window.virtual_office.loaders.stats.svg.loaded ++;
  });


  // Add the door to the scene
  return doorParent;
}

export function createOfficeRoom() {

  var doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth);
  const transparentMaterial = new THREE.MeshLambertMaterial({
    opacity: 0,
    transparent: true
  });

  const doorBrush = new Brush(doorGeometry, transparentMaterial);
  doorBrush.position.set(-doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));
  doorBrush.position.x += 4.1;
  doorBrush.updateMatrixWorld();

  const roomWidth = 80;
  const roomHeight = 37.5;
  const roomGeometry = new THREE.BoxGeometry(roomWidth, roomHeight, window.virtual_office.room_depth);

  // Create two materials: one for the floor face and one for the other faces
  const floorMaterial = new THREE.MeshPhongMaterial({
    shininess: 5,
    side: THREE.DoubleSide
  });
  floorMaterial.name = 'floor';

  window.virtual_office.loaders.texture.load('./textures/EAK309.png', (floorTexture) => {
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set( 8, 8 );
    floorMaterial.map = floorTexture;
    window.virtual_office.loaders.stats.textures.loaded ++;
  });

  // Create two materials: one for the floor face and one for the other faces
  const ceilMaterial = new THREE.MeshLambertMaterial({
    aoMapIntensity: 1.5,
    //map: ceilTexture,
    //normalMap: ceilNormal,
    normalScale: new THREE.Vector2(7.5, 7.5),
    side: THREE.DoubleSide
  });
  ceilMaterial.name = 'ceiling';

  window.virtual_office.loaders.texture.load('./textures/Ceiling_Drop_Tiles_001_height.png', (ceilHeight) => {
    ceilHeight.wrapS = THREE.RepeatWrapping;
    ceilHeight.wrapT = THREE.RepeatWrapping;
    ceilHeight.repeat.set( 4, 4 );
    ceilMaterial.displacementMap = ceilHeight;
    window.virtual_office.loaders.stats.textures.loaded ++;
  });

  window.virtual_office.loaders.texture.load('./textures/Ceiling_Drop_Tiles_001_ambientOcclusion.jpg', (ceilAO) => {
    ceilAO.wrapS = THREE.RepeatWrapping;
    ceilAO.wrapT = THREE.RepeatWrapping;
    ceilAO.repeat.set( 4, 4 );
    ceilMaterial.aoMap = ceilAO;
    window.virtual_office.loaders.stats.textures.loaded ++;
  } );

  window.virtual_office.loaders.texture.load('./textures/Ceiling_Drop_Tiles_001_basecolor.jpg', (ceilTexture) => {
    ceilTexture.wrapS = THREE.RepeatWrapping;
    ceilTexture.wrapT = THREE.RepeatWrapping;
    ceilTexture.repeat.set( 4, 4 );
    ceilMaterial.map = ceilTexture;
    window.virtual_office.loaders.stats.textures.loaded ++;
  } );
  

  window.virtual_office.loaders.texture.load('./textures/Ceiling_Drop_Tiles_001_normal.jpg', (ceilNormal) => {
    ceilNormal.wrapS = THREE.RepeatWrapping;
    ceilNormal.wrapT = THREE.RepeatWrapping;
    ceilNormal.repeat.set( 4, 4 );
    ceilMaterial.normalMap = ceilNormal;
    window.virtual_office.loaders.stats.textures.loaded ++;
  });

  const backwallMaterial = new THREE.MeshStandardMaterial({
    alphaTest: 0.99,
    aoMapIntensity: .5,
    color: 0xa0adaf,
    displacementScale: 0.001,
    name: 'backwall',
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: true
  });
  
  const sidewallMaterial = backwallMaterial.clone();  
  sidewallMaterial.name = 'sidewall';

  window.virtual_office.loaders.texture.load('./textures/brick_wall_001_displacement_4k.jpg', ( backwallHeight ) => {
    backwallHeight.wrapS = THREE.RepeatWrapping;
    backwallHeight.wrapT = THREE.RepeatWrapping;
    backwallHeight.repeat.set( roomWidth / 10, roomHeight / 10 );
    backwallMaterial.aoMap = backwallHeight;
    backwallMaterial.displacementMap = backwallHeight;

    const sideWallHeight = backwallHeight.clone();
    sideWallHeight.repeat.set( window.virtual_office.room_depth / 10, roomHeight / 10  );  
    sidewallMaterial.aoMap = sideWallHeight;
    sidewallMaterial.displacementMap = sideWallHeight;
    window.virtual_office.loaders.stats.textures.loaded ++;
  });

  window.virtual_office.loaders.texture.load('./textures/brick_wall_001_nor_gl_4k.jpg', ( backwallNormal ) => {
    backwallNormal.wrapS = THREE.RepeatWrapping;
    backwallNormal.wrapT = THREE.RepeatWrapping;
    backwallNormal.repeat.set( roomWidth / 10, roomHeight / 10 );
    backwallMaterial.normalMap = backwallNormal;

    const sideWallNormal = backwallNormal.clone();
    sideWallNormal.repeat.set( window.virtual_office.room_depth / 10, roomHeight / 10  );
    sidewallMaterial.normalMap = sideWallNormal;
    window.virtual_office.loaders.stats.textures.loaded ++;
  });

  window.virtual_office.loaders.texture.load('./textures/brick_wall_001_rough_4k.jpg', ( backwallRough ) => {
    backwallRough.wrapS = THREE.RepeatWrapping;
    backwallRough.wrapT = THREE.RepeatWrapping;
    backwallRough.repeat.set( roomWidth / 10, roomHeight / 10 );
    backwallMaterial.roughnessMap = backwallRough;

    const sideWallRough = backwallRough.clone();
    sideWallRough.repeat.set( window.virtual_office.room_depth / 10, roomHeight / 10  );
    sidewallMaterial.roughnessMap = sideWallRough;
    window.virtual_office.loaders.stats.textures.loaded ++;
  });

  const materials = [
    // Right
    sidewallMaterial,
    // Left
    sidewallMaterial,
    // Ceiling
    ceilMaterial,
    // Floor
    floorMaterial,
    // Front
    backwallMaterial,
    // Back
    backwallMaterial
  ];

  const roomBrush = new Brush(roomGeometry, materials);
  roomBrush.position.y = 13.75;
  roomBrush.position.z = -15;

  roomBrush.updateMatrixWorld();

  let result = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial()
  );

  csgEvaluator.evaluate(roomBrush, doorBrush, SUBTRACTION, result);
  result.receiveShadow = true;
  result.layers.enable(1);
  

  return result;
}

function setupScene() {
  
  // Scene container.
  scene = new THREE.Scene();

  window.virtual_office.scene_objects.door = createDoor();
  window.virtual_office.scene_objects.door.position.set(-doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));
  scene.add(window.virtual_office.scene_objects.door);

  window.virtual_office.scene_objects.deskGroup = setupDesks(window.virtual_office.scene_dimensions.gap, window.virtual_office.scene_dimensions.scale, scene);
  scene.add(window.virtual_office.scene_objects.deskGroup);

  // Adjust ambient light intensity
  var ambientLight = new THREE.AmbientLight(window.virtual_office.fast ? 0x555555 : 0x444444); // Dim ambient light color
  scene.add(ambientLight);

  window.virtual_office.scene_objects.screens_loaded = 0;
  window.virtual_office.scene_objects.room = createOfficeRoom();
  scene.add(window.virtual_office.scene_objects.room);

  window.virtual_office.scene_objects.wallGroup = setupBackwall(scene);
  window.virtual_office.scene_objects.wallGroup.position.z = - 15 - window.virtual_office.room_depth / 2;
  scene.add(window.virtual_office.scene_objects.wallGroup);
  scene.add(window.virtual_office.scene_objects.tvWebGL);

}

function setupRenderers() {

  // Main 3D webGL Renderer.
  window.virtual_office.renderers.webgl = new THREE.WebGLRenderer({ antialias: window.virtual_office.fast });
  window.virtual_office.renderers.webgl.setPixelRatio(window.devicePixelRatio);
  window.virtual_office.renderers.webgl.setSize(window.innerWidth, window.innerHeight);
  document.querySelector("#webgl").appendChild(window.virtual_office.renderers.webgl.domElement);

  // Hide body element scrollbars as the 3D viewport takes over.
  document.querySelector("body").style.overflow = 'hidden';

}
