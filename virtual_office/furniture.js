import * as THREE from 'three';

import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
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

  window.virtual_office.scene_objects.tvWebGL = createScreen( 720 );
  window.virtual_office.scene_objects.tvWebGL.position.y = 6;
  window.virtual_office.scene_objects.tvWebGL.position.z = - 14 - window.virtual_office.room_depth / 2;
  window.virtual_office.scene_objects.tvWebGL.name = "tvWebGL";

  var screenGeometry = new THREE.BoxGeometry(20.8, 11.7, 0.02);
  var screenMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
  var screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(0 , 6, 0.5);
  screen.name = "tv";
  wallGroup.add(screen);

  wallGroup.name = "backWall";
  wallGroup.webGLScreen = window.virtual_office.scene_objects.tvWebGL;

  const loader = new FBXLoader();
  loader.load( './models/Small Monstera.fbx', function ( object ) {

    object.traverse( function ( child ) {

      if ( child.isMesh ) {
        child.castShadow = true;
      }

    } );

    object.scale.setScalar(7.5);
    object.position.set(30, -5, window.virtual_office.scene_dimensions.adjusted_gap);

    wallGroup.add(object);

    let plant_left = object.clone();
    plant_left.position.x = -plant_left.position.x;
    plant_left.rotation.z = - Math.PI /2 ;
    wallGroup.add(plant_left);
  });

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

export function brightenMaterial(material, amount) {

  if (material.map) {
    // Increase the brightness of the texture
    material.map.magFilter = THREE.LinearFilter; // Ensures smooth interpolation
    material.map.needsUpdate = true; // Update the material
  }
  
  amount = window.virtual_office.fast ? amount / 4 : amount;

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
  var deskGroup = new THREE.Group();

  for (var i = 0; i < 4; i++) {
    var desk = createDesk( i );
    desk.rotation.y = Math.PI / 2;

    // Add screens.
    var screenWebGL = createScreen( i );
    screenWebGL.rotation.y = - Math.PI / 2;
    screenWebGL.position.y = 6.6;
    desk.webGLScreen = screenWebGL;

    // Main position coordinates.
    if (i < 2) {
      desk.position.x = -(gapSize * scale) * 1.25;
      desk.rotation.y += Math.PI; // Rotate the desk on the left side
      updateDeskZ(desk, i);

      screenWebGL.position.x = -(gapSize * scale) - 3.25 ;
      screenWebGL.rotation.y = Math.PI / 4;
      updateDeskZ(screenWebGL, i);
      screenWebGL.position.z += .175;

    } else {
      desk.position.x = (gapSize * scale) * 1.25;
      updateDeskZ(desk, i);

      screenWebGL.position.x = (gapSize * scale) + 3.25;
      screenWebGL.rotation.y = - Math.PI / 4;
      updateDeskZ(screenWebGL, i);      
      screenWebGL.position.z += .175;
    }

    // Space the desks a bit out a wittle.
    if ( i == 0 || i == 3) {
      desk.position.x += 1.25;
    }
    if ( i == 1 || i == 2 ) {
      desk.position.x -= 1.25;
    }

    if ( i == 0 ) {
      screenWebGL.position.x += .5;
    }
    if ( i == 1 ) {
      screenWebGL.position.x -= 2;
    }

    if ( i == 2 ) {
      screenWebGL.position.x -= .5;
    }
    if ( i == 3 ) {
      screenWebGL.position.x += 2;
    }
  
    desk.scale.set(scale, scale, scale); // Scale up the desk

    desk.children.forEach((desk_iter) => {
      if (desk_iter.name == 'cpu' || desk_iter.name == 'screen' || desk_iter.name == 'base' ) {
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

    desk.deskIndex = i; // hack for storing the webgl screens in the same group.
    deskGroup.add(desk);
    deskGroup.add(screenWebGL);

  }

  // model
  const loader = new FBXLoader();
  loader.load( './models/Office Chair.fbx', function ( object ) {

    object.scale.setScalar(0.1);

    object.traverse( function ( child ) {

      if ( child.isMesh ) {

        child.castShadow = true;
        child.material.forEach((material) =>{         
          material.color.setScalar(material.color.r * (window.virtual_office.fast ? 25 : 100));
        });

      }

    } );

    object.name = "chair";
    object.position.y = -5;
    object.rotation.y = - Math.PI /2;

    for (var i = 0; i < 4; i++) {
      let chair = object.clone();
      chair.deskIndex = i;
      updateDeskZ(chair, i);
      if (i < 2) {
        chair.rotation.y -= Math.PI; // Rotate the desk on the left side
        chair.position.x = -(gapSize * scale) * 0.7;
      }
      else {
        chair.position.x = (gapSize * scale) * 0.7;
      }

       // Space the desks a bit out a wittle.
      if ( i == 0 || i == 3) {
        chair.position.x += 1.25;
      }
      if ( i == 1 || i == 2 ) {
        chair.position.x -= 1.25;
      }

      // Final rotation tweaks to match design reference.
      switch (i) {
        case 0:
          chair.position.x += gapSize;
          break;
        case 1:
          chair.rotation.y += Math.PI / 8;
          break;
        case 2:
          chair.rotation.y -= Math.PI / 12;
          break;
        case 3:
          chair.rotation.y -= Math.PI / 3;
          break;
      }
      deskGroup.add( chair );
    }

  } );
  return deskGroup;
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
 // model
 const loader = new FBXLoader();
 loader.load( './models/Desk.fbx', function ( object ) {

  object.scale.setScalar(0.01);
  window.desk = object;
  let amount = window.virtual_office.fast ? 3 : 1.5;

  object.traverse( function ( child ) {

      if ( child.isMesh ) {

        child.castShadow = true;
        child.material.forEach((material) =>{
          brightenMaterial(material, amount);
        });

      }

    } );
    object.position.y = -0.55;
    object.rotation.y = - Math.PI ;
    deskGroup.add(object);
  }); 

  // Add computer screen
  var screenGeometry = new THREE.BoxGeometry(0.64, 0.48, 0.02);
  var screenMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 });
  var screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(0, 0.6, 0.05);
  screen.castShadow = true; //default is false
  screen.receiveShadow = false; //default
  screen.name = "screen";
  deskGroup.add(screen);

  // Add screen stand (formerly CPU)
  var cpuGeometry = new THREE.BoxGeometry(0.1, 0.15, 0.025);
  var cpuMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 });
  var cpu = new THREE.Mesh(cpuGeometry, cpuMaterial);
  cpu.position.set(0, 0.3, 0.0625);
  cpu.castShadow = true; //default is false
  cpu.receiveShadow = false; //default
  cpu.name = "cpu";
  deskGroup.add(cpu);

  // Add screen stand base.
  var baseGeo = new THREE.BoxGeometry(0.25, 0.01, 0.125);
  var base = new THREE.Mesh(baseGeo, cpuMaterial);
  base.position.set(0, 0.22, 0.0625);
  base.castShadow = true; //default is false
  base.receiveShadow = false; //default
  base.name = "base";
  deskGroup.add(base);

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

    signMesh.position.y = 0.9;

    signMesh.updateMatrixWorld();    

    deskGroup.add(signMesh);
  };
  createDeskLabel( i, deskLabelCallback, deskGroup );

  // Create an overhead office light geometry
  var lightWidth = 0.5;
  var lightHeight = 0.01;
  var lightDepth = 1.5;
  var lightGeometry = new THREE.BoxGeometry(lightWidth, lightHeight, lightDepth);

  const lightTexture = new THREE.TextureLoader().load('./textures/istockphoto-623308802-612x612.jpg');
  lightTexture.wrapS = THREE.RepeatWrapping;
  lightTexture.wrapT = THREE.RepeatWrapping;
  lightTexture.repeat.set( 10, 10 );

  // Create the overhead office light material
  var lightMaterial = new THREE.MeshPhongMaterial({
    color: 0x00EEff,
    emissive: 0x00EEff,
    emissiveIntensity: 0.25,
    bumpMap: lightTexture,
    bumpScale:10,
    shininess: 200
  });

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

  lightActual.target = screen;

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
  let url, pageUrl;
  switch ( i ) {
    case 0:
      url = '../pages/services.png';
      pageUrl = '../pages/services.html';
      break;
    case 1:
      url = '../pages/case_studies.png';
      pageUrl = '../pages/case_studies.html';
      break;
    case 2:
      url = '../pages/portfolio.png';
      pageUrl = '../pages/portfolio.html';
      break;
    case 3:
      url = '../pages/contact_us.png';
      pageUrl = '../pages/contact_us.html';
      break;
    case 720:
      url = '../pages/about_us.png';
      pageUrl = '../pages/about_us.html';
      break;
  }
  
  var screenTexture = new THREE.TextureLoader().load(url);
  var material = new THREE.MeshPhongMaterial({
    map: screenTexture
  });
  var geometry = new THREE.PlaneGeometry(i == 720 ? 19.2 : 6.4, i == 720 ? 10.8 : 4.8);
  var screenWebGL = new THREE.Mesh(geometry, brightenMaterial(material, ( i==720 ? 12 : 8 )));

  screenWebGL.pageUrl = pageUrl; 
  
  //mesh.scale.copy( domObject.scale );
  screenWebGL.castShadow = false;
  screenWebGL.receiveShadow = true;

  screenWebGL.name = "screenWebGL";
  
  return screenWebGL ;
}
