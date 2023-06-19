import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

import { SUBTRACTION, Brush, Evaluator } from 'three-bvh-csg';
import { MeshBVHVisualizer } from 'three-mesh-bvh';


import { scaleEffects, setupEffects } from './effects.js';
import { brightenMaterial, setupBackwall, setupDesks, updateDeskZ } from './furniture.js';
import { setupTweens, updateTweens } from './tweens.js';

let csgEvaluator;
let bloomComposer, bloomLayer, composer, scene, webGLRenderer, stats;
let deskGroup, room, screenCSSGroup, screenWebGLGroup, wallGroup;

let scene2, cssRenderer;

let controls, controls2;

let materials, darkMaterial;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let isMouseDown = false;

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
  var fov = setCameraFOV( aspect );
  window.virtual_office.camera = new THREE.PerspectiveCamera(fov, aspect, 1, 1000);
  
  window.virtual_office.camera.aspect = width / height;
  window.virtual_office.camera.position.set(0, 12, 15 + (window.virtual_office.room_depth / 2));

  // Scene Setup. 
  setupScene();

  // Setup effects.
  [ composer, bloomComposer, bloomLayer ] = new setupEffects( webGLRenderer, scene );

  // Bloom effect materials.
  darkMaterial = new THREE.MeshBasicMaterial( { color: 'black' } );
  materials = {};

  // Setup controls.
  controls2 = new OrbitControls(window.virtual_office.camera, cssRenderer.domElement);
  controls2.target.set(0, 10, 0);
  controls2.enabled = window.virtual_office.debug;
  controls2.update();

  controls = new OrbitControls(window.virtual_office.camera, webGLRenderer.domElement);
  controls.enabled = window.virtual_office.debug;
  controls.target.set(0, 10, 0);
  controls.update();
  
  if (window.virtual_office.debug) {
    stats = new Stats();
    document.body.appendChild(stats.dom);
  }

  // Setup Tweens.
  setupTweens( controls, controls2);

  function handleViewportChange() {
    window.virtual_office.scene_dimensions.adjusted_gap = calculateAdjustedGapSize();
    window.virtual_office.room_depth = 8 * window.virtual_office.scene_dimensions.adjusted_gap;

    var width = window.innerWidth;
    var height = window.innerHeight;

    window.virtual_office.camera.aspect = width / height;

    window.virtual_office.camera.fov = setCameraFOV( window.virtual_office.camera.aspect );
    window.virtual_office.camera.position.z = - 20 + (window.virtual_office.room_depth / 2);
    window.virtual_office.camera.rotation.x = - (Math.PI / 30) * window.virtual_office.camera.aspect;
    window.virtual_office.camera.updateProjectionMatrix();

    // Adjust desk positions based on the aspect ratio
    deskGroup.children.forEach(function (desk, i) {
      updateDeskZ(desk, i, window.virtual_office.scene_dimensions.adjusted_gap);
    });

    screenCSSGroup.children.forEach(function (screen, i) {
      updateDeskZ(screen, i, window.virtual_office.scene_dimensions.adjusted_gap);
      screen.position.z += .175;
    });
    screenWebGLGroup.children.forEach(function (screen, i) {
      updateDeskZ(screen, i, window.virtual_office.scene_dimensions.adjusted_gap);
      screen.position.z += .175;
    });

    const newRoom = createOfficeRoom();
    window.virtual_office.scene_objects.room.geometry = newRoom.geometry;

    wallGroup.position.z = - 15 - window.virtual_office.room_depth / 2;

    window.virtual_office.scene_objects.door.position.set(- doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));

    webGLRenderer.setSize(width, height);
    cssRenderer.setSize(width, height);
    composer.setSize(width, height);
    bloomComposer.setSize(width, height);
  }
  
  window.addEventListener('orientationchange', handleViewportChange);
  window.addEventListener('resize', handleViewportChange);

  function onPointerMove( event ) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
  
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
  }

  window.addEventListener( 'pointermove', onPointerMove );

  function onTouchStart(event) {
    event.preventDefault();

    pointer.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;

    isMouseDown = true;
  }
  function onTouchEnd(event) {
    event.preventDefault();

    pointer.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;

    isMouseDown = false;
  }

  window.addEventListener('touchstart', onTouchStart, false);
  window.addEventListener('touchend', onTouchEnd, false);

  function onMouseDown(event) {
    isMouseDown = true;
  }

  function onMouseUp(event) {
    isMouseDown = false;
  }

  // Attach the mouse down and up event listeners
  window.addEventListener("pointerdown", onMouseDown, false);
  window.addEventListener("pointerup", onMouseUp, false);

}

function setCameraFOV(aspect) {
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

function handleDeskClick( desk ) {
  if (isMouseDown && !window.virtual_office.moving ) {
    if ( !window.virtual_office.selected ) {
      window.virtual_office.moving = true;
      window.virtual_office.selected = desk;
      let newPosition = new THREE.Vector3(
        window.virtual_office.selected.position.x + ( window.virtual_office.selected.position.x > 0 ? - 3.75 : 3.75 ),
        3.75 ,
        window.virtual_office.selected.position.z + 3.75
      );
      window.virtual_office.tweens.moveCamera.to(newPosition , 20 * window.virtual_office.camera.position.distanceTo(newPosition)).start();
    }
    else {
      window.virtual_office.moving = true;
      var targetRotation = - (Math.PI / 30) * window.virtual_office.camera.aspect;

      let cameraDefaultPosition = { x: 0, y: 18, z: -20 + (window.virtual_office.room_depth / 2) },
          cameraDefaultRotation = { x: targetRotation, y: 0, z: 0 };

      // Animate the camera resetting from any other position.
      window.virtual_office.tweens.resetCameraPosition = new TWEEN.Tween(window.virtual_office.camera.position)
      .to( cameraDefaultPosition, 1000 )
      .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
      .onUpdate(() => {
        window.virtual_office.camera.updateProjectionMatrix();
      })
      .onComplete(() => {
        window.virtual_office.moving = false;
      })
      ;
      window.virtual_office.tweens.resetCameraRotation = new TWEEN.Tween(window.virtual_office.camera.rotation)
      .to( cameraDefaultRotation, 1000 )
      .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
      .onUpdate(() => {
        window.virtual_office.camera.updateProjectionMatrix();
      })
      ;
      window.virtual_office.tweens.resetCameraRotation.start();
      window.virtual_office.tweens.resetCameraPosition.start();
      window.virtual_office.selected = false;
    }
    
  }
}

function handleWallClick( desk ) {
  if (isMouseDown && !window.virtual_office.moving ) {
    if ( !window.virtual_office.selected ) {
      window.virtual_office.moving = true;
      window.virtual_office.selected = desk;
      let newPosition = new THREE.Vector3(
        0,
        3.75 ,
        window.virtual_office.selected.position.z + 35
      );
      window.virtual_office.tweens.moveCamera.to(newPosition , 20 * window.virtual_office.camera.position.distanceTo(newPosition)).start();
    }
    else {
      window.virtual_office.moving = true;
      var targetRotation = - (Math.PI / 30) * window.virtual_office.camera.aspect;

      let cameraDefaultPosition = { x: 0, y: 18, z: -20 + (window.virtual_office.room_depth / 2) },
          cameraDefaultRotation = { x: targetRotation, y: 0, z: 0 };

      // Animate the camera resetting from any other position.
      window.virtual_office.tweens.resetCameraPosition = new TWEEN.Tween(window.virtual_office.camera.position)
      .to( cameraDefaultPosition, 1000 )
      .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
      .onUpdate(() => {
        window.virtual_office.camera.updateProjectionMatrix();
      })
      .onComplete(() => {
        window.virtual_office.moving = false;
      })
      ;
      window.virtual_office.tweens.resetCameraRotation = new TWEEN.Tween(window.virtual_office.camera.rotation)
      .to( cameraDefaultRotation, 1000 )
      .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
      .onUpdate(() => {
        window.virtual_office.camera.updateProjectionMatrix();
      })
      ;
      window.virtual_office.tweens.resetCameraRotation.start();
      window.virtual_office.tweens.resetCameraPosition.start();
      window.virtual_office.selected = false;
    }
    
  }
}

function handleInteractions() {
  // update the picking ray with the camera and pointer position
  raycaster.setFromCamera( pointer, window.virtual_office.camera );

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects( scene.children );

  // Reset all the other desk labels to the regular colour.
  deskGroup.children.forEach( (desk) => {
    desk.children.forEach( (desk_item) => {
      if (desk_item.name == "desk_label") {
        desk_item.material.emissive.set( 0x00EEff );
        desk_item.material.emissiveIntensity = 0.5 ;
      }
      if (desk_item.name == "ceilLightMesh") {
        desk_item.material.emissive.set( 0x00EEff );
        desk_item.material.emissiveIntensity = 0.25 ;
      }
      if (desk_item.name == "ceilLightActual") {
        desk_item.color.set( 0x00EEff );
        desk_item.intensity = 0.015 ;
      }
    });
  });

  // Reset the portraits and neon to the regular colour.
  wallGroup.children.forEach( (object, i) => {
    
    if (object.name == "neon") {
      object.material.emissive.set( 0xDA68C5 );
      object.material.emissiveIntensity = 1 ;
      object.children[0].color.set(0xDA68C5);
      object.children[0].intensity = window.virtual_office.fast ? 0.35 : 0.1;
    }
    if (object.name == "portrait") {
      object.brightness.current = object.brightness.target;
      let portraitTexture = object.material.map;
      var portraitMaterial = new THREE.MeshStandardMaterial({ map: portraitTexture });

      let newMaterial =  brightenMaterial(portraitMaterial, object.brightness.current);
      wallGroup.children[i].material = newMaterial;
    }
  });

  document.body.style.cursor = "default";

  for ( let i = 0; i < intersects.length; i ++ ) {
    if (intersects[ i ].object.name == "desk_label") {
      // Set the active one to white.
      intersects[ i ].object.material.emissive.set( 0xFFFFFF );
      document.body.style.cursor = "pointer";

      handleDeskClick( intersects[ i ].object.parent );

      break;
    }

    if (intersects[ i ].object.name == "screen" || intersects[ i ].object.name == "desk_part") {
      // Set the screens sibling desk_label to active.
      intersects[ i ].object.parent.getObjectByName("desk_label").material.emissive.set( 0xFFFFFF );
      intersects[ i ].object.parent.getObjectByName("desk_label").material.emissiveIntensity = 0.25 ;
      intersects[ i ].object.parent.getObjectByName("ceilLightMesh").material.emissive.set( 0xFFFFFF );
      intersects[ i ].object.parent.getObjectByName("ceilLightMesh").material.emissiveIntensity = 0.5 ;
      //intersects[ i ].object.parent.getObjectByName("ceilLightActual").color.set( 0xFFFFFF );
      intersects[ i ].object.parent.getObjectByName("ceilLightActual").intensity = 0.03 ;
      document.body.style.cursor = "pointer";
      
      handleDeskClick( intersects[ i ].object.parent );

      break;
    }

    if (intersects[ i ].object.name == "neon") {
      document.body.style.cursor = "pointer";
      intersects[ i ].object.material.emissive.set( 0xFFFFFF );
      intersects[ i ].object.material.emissiveIntensity = 0.5;

      let portraits = intersects[ i ].object.parent.getObjectsByProperty( 'name', 'portrait' );
      portraits.forEach( ( portrait, portraitIndex ) => {
        portraits[portraitIndex].brightness.current = portraits[portraitIndex].brightness.target * 1.0125;
        portraits[portraitIndex].material = brightenMaterial(portraits[portraitIndex].material, portraits[portraitIndex].brightness.current);
      });
      handleWallClick( intersects[ i ].object.parent );

      break;
    }
    if (intersects[ i ].object.name == "portrait") {
      document.body.style.cursor = "pointer";
      intersects[ i ].object.parent.getObjectByName("neon").material.emissive.set( 0xFFFFFF );
      intersects[ i ].object.parent.getObjectByName("neon").material.emissiveIntensity = 0.5;

      let portraits = intersects[ i ].object.parent.getObjectsByProperty( 'name', 'portrait' );
      portraits.forEach( ( portrait, portraitIndex ) => {
        portraits[portraitIndex].brightness.current = portraits[portraitIndex].brightness.target * 1.0125;
        portraits[portraitIndex].material = brightenMaterial(portraits[portraitIndex].material, portraits[portraitIndex].brightness.current);
      });

      handleWallClick( intersects[ i ].object.parent );


      break;
    }
  }
}

export function animate(currentTime) {

  requestAnimationFrame(animate);

  if ( window.virtual_office.started ) {

    updateTweens(currentTime, controls, controls2);

    handleInteractions();

  }

  scaleEffects(currentTime, webGLRenderer);  

  if (window.virtual_office.debug) {
    stats.update();
  }

  // Render the composer
  if (!window.virtual_office.fast) {
    scene.traverse( darkenNonBloomed );
    bloomComposer.render();
    scene.traverse( restoreMaterial );
    composer.render();
    cssRenderer.render(scene2, window.virtual_office.camera);

  } else {
    webGLRenderer.render(scene, window.virtual_office.camera); // Render the scene without the effects
    cssRenderer.render(scene2, window.virtual_office.camera);
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
  var adjustedGapSize = window.virtual_office.scene_dimensions.gap * window.virtual_office.scene_dimensions.scale;
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

  var doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth);
  const transparentMaterial = new THREE.MeshLambertMaterial({
     opacity: 0,
     transparent: true
  });

  const doorBrush = new Brush( doorGeometry, transparentMaterial );
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

function setupScene() {
  // Scene container.
  scene = new THREE.Scene();
  scene2 = new THREE.Scene();

  [ deskGroup, screenCSSGroup, screenWebGLGroup ] = setupDesks( window.virtual_office.scene_dimensions.gap, window.virtual_office.scene_dimensions.scale, scene);
  scene2.add(screenCSSGroup);
  scene.add(screenWebGLGroup);
  scene.add(deskGroup);

  // Adjust ambient light intensity
  var ambientLight = new THREE.AmbientLight(window.virtual_office.fast ? 0x554455 : 0x443344); // Dim ambient light color
  scene.add(ambientLight);

  window.virtual_office.scene_objects.screens_loaded = 0;
  window.virtual_office.scene_objects.room = createOfficeRoom();
  scene.add(window.virtual_office.scene_objects.room);

  window.virtual_office.scene_objects.door = createDoor();
  window.virtual_office.scene_objects.door.position.set(-doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));
  scene.add(window.virtual_office.scene_objects.door);

  wallGroup = setupBackwall(scene);
  wallGroup.position.z = - 15 - window.virtual_office.room_depth / 2;

  scene.add(wallGroup);
}

function setupRenderers() {
   // Main webGLRenderer.
   webGLRenderer = new THREE.WebGLRenderer({ antialias: window.virtual_office.fast });
   webGLRenderer.setPixelRatio(window.devicePixelRatio);
   webGLRenderer.setSize(window.innerWidth, window.innerHeight);
   document.querySelector("#webgl").appendChild(webGLRenderer.domElement);
 
   // Website webGLRenderer.
   cssRenderer = new CSS3DRenderer();
   cssRenderer.setSize(window.innerWidth, window.innerHeight);
   cssRenderer.domElement.style.position = "absolute";
   cssRenderer.domElement.style.top = 0;
   document.querySelector("#css").appendChild(cssRenderer.domElement);
}