import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

import { SUBTRACTION, Brush, Evaluator } from 'three-bvh-csg';
import { MeshBVHVisualizer } from 'three-mesh-bvh';

import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

import { scaleEffects, setupEffects } from './effects.js';
import { handleInteractions, handleViewportChange } from './events.js';
import { setupBackwall, setupDesks, updateDeskZ } from './furniture.js';
import { setupTweens, updateTweens } from './tweens.js';

let csgEvaluator;
let bloomLayer, scene, stats;

let scene2;

let materials, darkMaterial;

export function init(pane) {

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

  // Setup controls.
  window.virtual_office.controls2 = new OrbitControls(window.virtual_office.camera, window.virtual_office.renderers.css.domElement);
  window.virtual_office.controls2.target.set(0, 10, 0);
  window.virtual_office.controls2.enabled = window.virtual_office.debug;
  window.virtual_office.controls2.update();

  window.virtual_office.controls = new OrbitControls(window.virtual_office.camera, window.virtual_office.renderers.webgl.domElement);
  window.virtual_office.controls.enabled = window.virtual_office.debug;
  window.virtual_office.controls.target.set(0, 10, 0);
  window.virtual_office.controls.update();

  if (window.virtual_office.debug) {
    stats = new Stats();
    document.body.appendChild(stats.dom);
  }

  // Setup Tweens.
  setupTweens( );

  window.addEventListener('orientationchange', handleViewportChange);
  window.addEventListener('resize', handleViewportChange);

  function onPointerMove(event) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    window.virtual_office.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    window.virtual_office.pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

  }

  window.addEventListener('pointermove', onPointerMove);

  function onTouchStart(event) {
    event.preventDefault();

    window.virtual_office.pointer.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
    window.virtual_office.pointer.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
    window.virtual_office.pointer.z = 1; // previously mouseDown = true
  }
  function onTouchEnd(event) {
    event.preventDefault();

    window.virtual_office.pointer.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
    window.virtual_office.pointer.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
    window.virtual_office.pointer.z = 0; // previously mouseDown = false
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
        fov = mapRange(aspect, 2, 2.25, 45, 30);
      }
      else {
        if (aspect < 5) {
          fov = mapRange(aspect, 2.25, 5, 30, 90);
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

export function animate(currentTime) {

  requestAnimationFrame(animate);

  if (window.virtual_office.started) {

    updateTweens(currentTime);

    if (!window.virtual_office.debug) {
      handleInteractions( scene );
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
    window.virtual_office.renderers.css.render(scene2, window.virtual_office.camera);

  } else {
    window.virtual_office.renderers.webgl.render(scene, window.virtual_office.camera); // Render the scene without the effects
    window.virtual_office.renderers.css.render(scene2, window.virtual_office.camera);
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

  var doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth);

  // Create door material
  var doorMaterial = new THREE.MeshLambertMaterial({ color: 0x986b41 });

  // Create door mesh
  var door = new THREE.Mesh(doorGeometry, doorMaterial);
  // Set initial position and rotation of the door
  door.position.set(doorWidth / 2, 0, 0);
  door.updateMatrixWorld();

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

      const fillColor = path.userData.style.fill;

      if ( fillColor !== undefined && fillColor !== 'none') {

        const material = new THREE.MeshLambertMaterial({
          emissiveIntensity: 1,
          emissive: new THREE.Color().setStyle(fillColor),
          color: new THREE.Color().setStyle(fillColor)
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
          emissiveIntensity: 1,
          emissive: new THREE.Color().setStyle(strokeColor),
          color: new THREE.Color().setStyle(strokeColor)
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

    doorParent.add(group);
    let backWallLogo = group.clone();
    backWallLogo.scale.multiplyScalar(2);
    backWallLogo.position.x = -5.75;
    backWallLogo.position.y = 23.5;
    backWallLogo.position.z = 1.5;

    window.virtual_office.scene_objects.wallGroup.add(backWallLogo);


  });


  doorParent.add(door);

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

  const roomGeometry = new THREE.BoxGeometry(80, 30, window.virtual_office.room_depth);

  const roomMaterial = new THREE.MeshLambertMaterial({
    color: 0xa0adaf,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: true
  });

  const roomBrush = new Brush(roomGeometry, roomMaterial);
  roomBrush.position.y = 10;
  roomBrush.position.z = -15;

  roomBrush.updateMatrixWorld();

  let result = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial()
  );

  result.receiveShadow = true;
  result.layers.enable(1);

  csgEvaluator.evaluate(roomBrush, doorBrush, SUBTRACTION, result);

  return result;
}

function setupScene() {
  // Scene container.
  scene = new THREE.Scene();
  scene2 = new THREE.Scene();

  [ window.virtual_office.scene_objects.deskGroup, window.virtual_office.scene_objects.screenCSSGroup ] = setupDesks(window.virtual_office.scene_dimensions.gap, window.virtual_office.scene_dimensions.scale, scene);
  scene2.add(window.virtual_office.scene_objects.screenCSSGroup);
  scene.add(window.virtual_office.scene_objects.deskGroup);

  // Adjust ambient light intensity
  var ambientLight = new THREE.AmbientLight(window.virtual_office.fast ? 0x554455 : 0x443344); // Dim ambient light color
  scene.add(ambientLight);

  window.virtual_office.scene_objects.screens_loaded = 0;
  window.virtual_office.scene_objects.room = createOfficeRoom();
  scene.add(window.virtual_office.scene_objects.room);

  window.virtual_office.scene_objects.door = createDoor();
  window.virtual_office.scene_objects.door.position.set(-doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));
  scene.add(window.virtual_office.scene_objects.door);

  window.virtual_office.scene_objects.wallGroup = setupBackwall(scene);
  window.virtual_office.scene_objects.wallGroup.position.z = - 15 - window.virtual_office.room_depth / 2;
  scene.add(window.virtual_office.scene_objects.wallGroup);
  scene2.add(window.virtual_office.scene_objects.tvCSS);
  scene.add(window.virtual_office.scene_objects.tvWebGL);

}

function setupRenderers() {
  // Main 3D webGL Renderer.
  window.virtual_office.renderers.webgl = new THREE.WebGLRenderer({ antialias: window.virtual_office.fast });
  //window.virtual_office.renderers.webgl.setPixelRatio(window.devicePixelRatio);
  window.virtual_office.renderers.webgl.setSize(window.innerWidth, window.innerHeight);
  document.querySelector("#webgl").appendChild(window.virtual_office.renderers.webgl.domElement);

  // Website CSSRenderer.
  window.virtual_office.renderers.css = new CSS3DRenderer();
  window.virtual_office.renderers.css.setSize(window.innerWidth, window.innerHeight);
  window.virtual_office.renderers.css.domElement.style.position = "absolute";
  window.virtual_office.renderers.css.domElement.style.top = 0;
  document.querySelector("#css").appendChild(window.virtual_office.renderers.css.domElement);
}
