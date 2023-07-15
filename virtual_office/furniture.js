import * as THREE from 'three';

import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

/**
 * Setup Back Wall
 * 
 * @param { THREE.Scene } scene 
 * @returns { THREE.Group } wallGroup
 */
export function setupBackwall ( scene ) {
  var wallGroup = new THREE.Group();
  
  // About Us Neon sign
  createNeonSign((signMesh) => {
    // Position and rotate the sign
    signMesh.position.set(-5.75, 12.5, 1); // Example position for the sign
    signMesh.name = "neon";
    wallGroup.add(signMesh);
  }, scene);
  
  // // Add portraits to the scene
  // let paulsPortrait = createPortrait('./paul.png', 2.75);
  // paulsPortrait.position.set(-7.5, 4, 1);  // Example position for portrait 1
  // paulsPortrait.name = "portrait";
  // paulsPortrait.brightness = {
  //   current: 2.75,
  //   target: 2.75
  // };
  // wallGroup.add(paulsPortrait);

  // let garrettsPortrait = createPortrait('./garrett.png', 4.);
  // garrettsPortrait.position.set(7.5, 4, 1);  // Example position for portrait 1
  // garrettsPortrait.brightness = {
  //   current: 4,
  //   target: 4
  // };
  // garrettsPortrait.name = "portrait";
  // wallGroup.add(garrettsPortrait);

  [ window.virtual_office.scene_objects.tvCSS, window.virtual_office.scene_objects.tvWebGL ] = createScreen( 720 );
  window.virtual_office.scene_objects.tvWebGL.position.y = 6;
  window.virtual_office.scene_objects.tvWebGL.position.z = - 14 - window.virtual_office.room_depth / 2;
  window.virtual_office.scene_objects.tvCSS.position.copy(window.virtual_office.scene_objects.tvWebGL.position);
  window.virtual_office.scene_objects.tvCSS.rotation.copy(window.virtual_office.scene_objects.tvWebGL.rotation);
  window.virtual_office.scene_objects.tvWebGL.name = "tvWebGL";

  var screenGeometry = new THREE.BoxGeometry(20.8, 11.7, 0.02);
  var screenMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
  var screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(0 , 6, 0.5);
  screen.name = "tv";
  wallGroup.add(screen);

  wallGroup.name = "backWall";
  wallGroup.webGLScreen = window.virtual_office.scene_objects.tvWebGL;

  return wallGroup;
}

// Create the About Us neon sign.
function createNeonSign(callback, scene) {
  const loader = new FontLoader();

  loader.load('./fonts/Stigmature.json', (font) => {

    const textGeometry = new TextGeometry('about us', {
      font: font,
      size: 2.5,
      height: 0.5,
      curveSegments: 4
    });

    // Create the emissive material for the text
    var textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xDA68C5, emissiveIntensity: 1 });

    // Create the "About Us" sign mesh
    var signMesh = new THREE.Mesh(textGeometry, textMaterial);

    const lightActual = new THREE.PointLight(0xDA68C5, window.virtual_office.fast ? 0.35 : 0.1); // Color: white
    lightActual.position.set(5.5, 0.25, 5); // Set the position of the light
    lightActual.castShadow = true;

    //Set up shadow properties for the light
    // lightActual.shadow.mapSize.width = 32; // default
    // lightActual.shadow.mapSize.height = 32; // default

    if (window.virtual_office.debug) {
      const helper = new THREE.CameraHelper( lightActual.shadow.camera );
      scene.add( helper );
      // Create a directional light helper
      const lightHelper = new THREE.PointLightHelper(lightActual, 5); // The second parameter is the size of the helper
      scene.add(lightHelper);
    }

    signMesh.layers.enable(1);

    signMesh.add(lightActual);

    // Add the sign to the scene
    callback(signMesh);
  });
}

// Creates a portrait plane based on provided image
function createPortrait(img_url, brightness) {

  // Load textures
  var portraitTexture = new THREE.TextureLoader().load(img_url);

  // Create portrait materials
  var portraitMaterial = new THREE.MeshStandardMaterial({ map: portraitTexture });

  portraitMaterial = brightenMaterial(portraitMaterial, brightness);

  // Set portrait dimensions
  var portraitWidth = 8;
  var portraitHeight = 8;

  // Create portrait planes
  var portrait = new THREE.Mesh(new THREE.PlaneGeometry(portraitWidth, portraitHeight), portraitMaterial);

  return portrait;
}

export function brightenMaterial(material, amount) {

  // Increase the brightness of the texture
  material.map.magFilter = THREE.LinearFilter; // Ensures smooth interpolation
  material.map.needsUpdate = true; // Update the material

  // Increase the brightness by adjusting the material color
  const brightness = amount; // Increase the value to make it brighter
  material.color.setRGB(
    material.color.r * brightness,
    material.color.g * brightness,
    material.color.b * brightness
  );

  return material;
}

// Uses createDesk and arranges them in the room.
export function setupDesks(gapSize, scale, scene) {
  // Create groups
  var deskGroup = new THREE.Group(),
      screenCSSGroup = new THREE.Group();

  for (var i = 0; i < 4; i++) {
    var desk = createDesk( i );
    desk.rotation.y = Math.PI / 2;

    // Add screens.
    var [ screenCSS, screenWebGL ] = createScreen( i );
    screenCSS.rotation.y = - Math.PI / 2;
    screenCSS.position.y = 4.4;
    desk.webGLScreen = screenWebGL;

    // Main position coordinates.
    if (i < 2) {
      desk.position.x = -(gapSize * scale) * 1.25;
      desk.rotation.y += Math.PI; // Rotate the desk on the left side
      updateDeskZ(desk, i);

      screenCSS.position.x = -(gapSize * scale) - 3.25 ;
      screenCSS.rotation.y = Math.PI / 4;
      updateDeskZ(screenCSS, i);
      screenCSS.position.z += .175;

    } else {
      desk.position.x = (gapSize * scale) * 1.25;
      updateDeskZ(desk, i);

      screenCSS.position.x = (gapSize * scale) + 3.25;
      screenCSS.rotation.y = - Math.PI / 4;
      updateDeskZ(screenCSS, i);      
      screenCSS.position.z += .175;
    }

    // Space the desks a bit out a wittle.
    if ( i == 0 || i == 3) {
      desk.position.x += 1.25;
    }
    if ( i == 1 || i == 2 ) {
      desk.position.x -= 1.25;
    }

    if ( i == 0 ) {
      screenCSS.position.x += .5;
    }
    if ( i == 1 ) {
      screenCSS.position.x -= 2;
    }

    if ( i == 2 ) {
      screenCSS.position.x -= .5;
    }
    if ( i == 3 ) {
      screenCSS.position.x += 2;
    }
  
    desk.scale.set(scale, scale, scale); // Scale up the desk

    desk.children.forEach((desk_iter) => {
      if (desk_iter.name == 'cpu' || desk_iter.name == 'screen') {
        if ( i < 2 ) {
          desk_iter.rotation.y = - Math.PI / 4;
        }
        else {
          desk_iter.rotation.y = Math.PI / 4;
        }
        desk_iter.updateMatrixWorld();
      }
      if (desk_iter.type == 'DirectionalLight') {
        let factor = 100;
        desk_iter.position.set(
          desk.position.x / factor,
          2.5,
          desk.position.z / factor
        );
        desk_iter.updateMatrixWorld();

        // //Create a helper for the shadow camera (optional)
        if (window.virtual_office.debug) {
          const helper = new THREE.CameraHelper( desk_iter.shadow.camera );
          scene.add( helper );
          // Create a directional light helper
          const lightHelper = new THREE.DirectionalLightHelper(desk_iter, 0.25); // The second parameter is the size of the helper
          scene.add(lightHelper);
        }

      }
    });

    screenWebGL.position.copy(screenCSS.position);
    screenWebGL.rotation.copy(screenCSS.rotation);

    desk.deskIndex = i; // hack for storing the webgl screens in the same group.
    deskGroup.add(desk);
    deskGroup.add(screenWebGL);
    screenCSSGroup.add(screenCSS);  

  }
  return [deskGroup, screenCSSGroup ];
}

/**
 * Updates the Z position of a desk based on it's index in the group.
 * 
 * @param { THREE.Object3D } desk 
 * @param { Number } i 
 */
export function updateDeskZ(desk, i) {
    if (i < 2) {
    desk.position.z = - 15 + (i === 0 ? -1.5 : 0.5) * window.virtual_office.scene_dimensions.adjusted_gap;
  } else {
    desk.position.z = - 15 + (i === 2 ? -1.5 : 0.5) * window.virtual_office.scene_dimensions.adjusted_gap;
  }
}

/**
 * Create a desk containing a PC, desk and overhead office light.
 * 
 * @returns THREE.Group containing a desk workstation
 */
function createDesk( i ) {
  var deskGroup = new THREE.Group();
  deskGroup.name = "desk";

  // Desk Top
  var deskTopGeometry = new THREE.BoxGeometry(1.5, 0.1, 0.8);
  var deskTopMaterial = new THREE.MeshPhongMaterial({ color: 0x986b41 });
  var deskTop = new THREE.Mesh(deskTopGeometry, deskTopMaterial);
  deskTop.position.y = 0.05;
  deskTop.name = "desk_part";

  // Desk Side Panels
  var panelGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.8);
  var panelMaterial = new THREE.MeshPhongMaterial({ color: 0x986b41 });

  var leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  leftPanel.position.set(-0.8, -0.2, 0);
  leftPanel.name = "desk_part";

  var rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  rightPanel.position.set(0.8, -0.2, 0);
  rightPanel.name = "desk_part";

  deskTop.castShadow = true; //default is false
  deskTop.receiveShadow = false; //default

  leftPanel.castShadow = true; //default is false
  leftPanel.receiveShadow = false; //default

  rightPanel.castShadow = true; //default is false
  rightPanel.receiveShadow = false; //default

  deskGroup.add(deskTop, leftPanel, rightPanel);

  // Add computer screen
  var screenGeometry = new THREE.BoxGeometry(0.64, 0.48, 0.02);
  var screenMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
  var screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(0, 0.4, 0.05);
  screen.castShadow = true; //default is false
  screen.receiveShadow = false; //default
  screen.name = "screen";
  deskGroup.add(screen);

  // Add computer CPU
  var cpuGeometry = new THREE.BoxGeometry(0.1, 0.125, 0.025);
  var cpuMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 });
  var cpu = new THREE.Mesh(cpuGeometry, cpuMaterial);
  cpu.position.set(0, 0.1, 0.0625);
  cpu.castShadow = true; //default is false
  cpu.receiveShadow = false; //default
  cpu.name = "cpu";
  deskGroup.add(cpu);

  var deskLabelCallback = (signMesh, i, deskGroup) => {
    signMesh.scale.setScalar( 0.1 );
    signMesh.geometry.computeBoundingBox();
    const boundingBox = signMesh.geometry.boundingBox;

    // Step 4: Extract dimensions from bounding box
    const width = boundingBox.max.x - boundingBox.min.x;

    signMesh.rotation.y = Math.PI;
    if ( i < 2 ) {
      signMesh.rotation.y -= Math.PI / 4;
      signMesh.translateX( - 0.05 - width / 20 );
    }
    else {
      signMesh.rotation.y += Math.PI / 4;
      signMesh.translateX( 0.05 - width / 20 );
    }

    signMesh.position.y = 0.7;

    signMesh.updateMatrixWorld();    

    deskGroup.add(signMesh);
  };
  createDeskLabel( i, deskLabelCallback, deskGroup );

  // Create an overhead office light geometry
  var lightWidth = 0.5;
  var lightHeight = 0.01;
  var lightDepth = 1.5;
  var lightGeometry = new THREE.BoxGeometry(lightWidth, lightHeight, lightDepth);

  // Create the overhead office light material
  var lightMaterial = new THREE.MeshPhongMaterial({ color: 0x00EEff, emissive: 0x00EEff, emissiveIntensity: 0.25 });

  // Create the overhead office light mesh
  var lightMesh = new THREE.Mesh(lightGeometry, lightMaterial);

  // Position the overhead office light
  lightMesh.position.set(0, 2.25, 0);
  lightMesh.rotation.y = Math.PI / 2;
  lightMesh.name = "ceilLightMesh";
  // Add the overhead office light to the scene
  deskGroup.add(lightMesh);

  const lightActual = new THREE.DirectionalLight(0x00EEff, 0.015); // Color: white
  lightActual.position.set(0, 0.275, 0); // Set the position of the light
  lightActual.castShadow = true;
  lightActual.name = "ceilLightActual";

  //Set up shadow properties for the light
  lightActual.shadow.mapSize.width = 64; // Adjust the shadow map size
  lightActual.shadow.mapSize.height = 64;

  lightActual.target = deskTop;

  deskGroup.add(lightActual);

  return deskGroup;
}


// Create the desks sign, i.e. "Projects"
function createDeskLabel(i, callback, deskGroup) {

  // Add screen labels.
  let labelText = '';
  switch ( i ) {
    case 0:
      labelText = 'Services';
      break;
    case 1:
      labelText = 'Case studies';
      break;
    case 2:
      labelText = 'Portfolio';
      break;
    case 3:
      labelText = 'Contact us';
      break;
  }
  
  const loader = new FontLoader();

  loader.load('./fonts/VeraMono.json', (font) => {

    const textGeometry = new TextGeometry(labelText, {
      font: font,
      size: 0.8,
      height: 0.2
    });

    // Create the emissive material for the text
    var textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x00EEff, emissiveIntensity: 0.5 });

    // Create the "About Us" sign mesh
    var signMesh = new THREE.Mesh(textGeometry, textMaterial);

    signMesh.layers.enable(1);

    signMesh.name = "desk_label";

    // Add the sign to the scene
    callback(signMesh, i, deskGroup);
  });
}

/**
 * Create an iFrame based screen that will sit on top of a monitor.
 * 
 * @returns [ HTMLObject, THREE.Mesh ];
 */
function createScreen( i ){
  let url;
  switch ( i ) {
    case 0:
      url = '../pages/services.html';
      break;
    case 1:
      url = '../pages/case_studies.html';
      break;
    case 2:
      url = '../pages/portfolio.html';
      break;
    case 3:
      url = '../pages/contact_us.html';
      break;
    case 720:
      url = '../pages/about_us.html';
      break;
  }
  

  var element = document.createElement("iframe");
  //var element = document.createElement("img");
  element.width = i == 720 ? "1280" : "1024";
  element.height = i == 720 ? "720" : "768";
  element.style.opacity = 0.999;
  
  element.src = url;
  element.addEventListener("load", function() {
    window.virtual_office.scene_objects.screens_loaded += 1;
  });

  var screenCSS = new CSS3DObject(element);
  screenCSS.scale.multiplyScalar( i == 720 ? .015 : 0.00625 );

  element.style.filter = 'blur( ' + ( i==720 ? 2 : 8 ) + 'px )';
  element.style.pointerEvents = 'none';

  var material = new THREE.MeshPhongMaterial({
    opacity: 0.,
    color: new THREE.Color("black"),
    blending: THREE.NoBlending,
    side: THREE.DoubleSide,
    minFilter: THREE.LinearFilter

  });
  var geometry = new THREE.PlaneGeometry(i == 720 ? 19.2 : 6.4, i == 720 ? 10.8 : 4.8);
  var screenWebGL = new THREE.Mesh(geometry, material);
  
  //mesh.scale.copy( domObject.scale );
  screenWebGL.castShadow = false;
  screenWebGL.receiveShadow = true;

  screenWebGL.cssScreen = screenCSS;
  screenWebGL.name = "screenWebGL";
  
  return [ screenCSS, screenWebGL ];
}
