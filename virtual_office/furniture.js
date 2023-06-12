import * as THREE from 'three';

import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// Create the About Us neon sign.
export function createNeonSign(callback) {
  const loader = new FontLoader();

  loader.load('./cursive.json', (font) => {

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
    var textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xDA68C5, emissiveIntensity: 1 });

    // Create the "About Us" sign mesh
    var signMesh = new THREE.Mesh(textGeometry, textMaterial);

    const lightActual = new THREE.PointLight(0xDA68C5, 0.01); // Color: white
    lightActual.position.set(0, 0.25, 0); // Set the position of the light
    lightActual.castShadow = true;

    //Set up shadow properties for the light
    lightActual.shadow.mapSize.width = 128; // default
    lightActual.shadow.mapSize.height = 128; // default
    lightActual.shadow.camera.near = 0.5; // default
    lightActual.shadow.camera.far = 250; // default

    signMesh.add(lightActual);

    // Add the sign to the scene
    callback(signMesh);
  });
}

// Creates a portrait plane based on provided image
export function createPortrait(img_url, brightness) {

  // Load textures
  var portraitTexture = new THREE.TextureLoader().load(img_url);

  // Create portrait materials
  var portraitMaterial = new THREE.MeshStandardMaterial({ map: portraitTexture });

  function brightenMaterial(material, amount) {

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

  portraitMaterial = brightenMaterial(portraitMaterial, brightness);

  // Set portrait dimensions
  var portraitWidth = 8;
  var portraitHeight = 8;

  // Create portrait planes
  var portrait = new THREE.Mesh(new THREE.PlaneGeometry(portraitWidth, portraitHeight), portraitMaterial);

  return portrait;
}

// Uses createDesk and arranges them in the room.
export function setupDesks(adjustedGapSize, gapSize, scale, scene) {
  // Create desks
  var deskGroup = new THREE.Group();

  for (var i = 0; i < 4; i++) {
    var desk = createDesk();
    desk.rotation.y = Math.PI / 2;
    if (i < 2) {
      desk.position.x = -(gapSize * scale);
      desk.rotation.y += Math.PI; // Rotate the desk on the left side
      updateDeskZ(desk, i, adjustedGapSize);
    } else {
      desk.position.x = (gapSize * scale);
      updateDeskZ(desk, i, adjustedGapSize);
    }

    desk.scale.set(scale, scale, scale); // Scale up the desk

    desk.children.forEach((desk_iter, i) => {
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

    deskGroup.add(desk);

  }
  return deskGroup;
}

/**
 * Updates the Z position of a desk based on it's index in the group.
 * 
 * @param { THREE.Object3D } desk 
 * @param { Number } i 
 * @param { Number } adjustedGapSize 
 */
export function updateDeskZ(desk, i, adjustedGapSize) {
  if (i < 2) {
    desk.position.z = - 15 + (i === 0 ? -1.5 : 0.5) * adjustedGapSize;
  } else {
    desk.position.z = - 15 + (i === 2 ? -1.5 : 0.5) * adjustedGapSize;
  }
}

/**
 * Create a desk containing a PC, desk and overhead office light.
 * 
 * @returns THREE.Group containing a desk workstation
 */
function createDesk() {
  var deskGroup = new THREE.Group();

  // Desk Top
  var deskTopGeometry = new THREE.BoxGeometry(1.5, 0.1, 0.8);
  var deskTopMaterial = new THREE.MeshPhongMaterial({ color: 0x986b41 });
  var deskTop = new THREE.Mesh(deskTopGeometry, deskTopMaterial);
  deskTop.position.y = 0.05;

  // Desk Side Panels
  var panelGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.8);
  var panelMaterial = new THREE.MeshPhongMaterial({ color: 0x986b41 });

  var leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  leftPanel.position.set(-0.8, -0.2, 0);

  var rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
  rightPanel.position.set(0.8, -0.2, 0);

  deskTop.castShadow = true; //default is false
  deskTop.receiveShadow = false; //default

  leftPanel.castShadow = true; //default is false
  leftPanel.receiveShadow = false; //default

  rightPanel.castShadow = true; //default is false
  rightPanel.receiveShadow = false; //default

  deskGroup.add(deskTop, leftPanel, rightPanel);

  // Add computer screen
  var screenGeometry = new THREE.BoxGeometry(0.6, 0.4, 0.02);
  var screenMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
  var screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(0, 0.5, 0.25);
  screen.castShadow = true; //default is false
  screen.receiveShadow = false; //default
  deskGroup.add(screen);

  // Add computer CPU
  var cpuGeometry = new THREE.BoxGeometry(0.4, 0.2, 0.2);
  var cpuMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 });
  var cpu = new THREE.Mesh(cpuGeometry, cpuMaterial);
  cpu.position.set(0, 0.2, 0.3);
  cpu.castShadow = true; //default is false
  cpu.receiveShadow = false; //default

  deskGroup.add(cpu);

  // Create an overhead office light geometry
  var lightWidth = 0.5;
  var lightHeight = 0.01;
  var lightDepth = 1.5;
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

  const lightActual = new THREE.DirectionalLight(0x00EEff, 0.01); // Color: white
  lightActual.position.set(0, 0.275, 0); // Set the position of the light
  lightActual.castShadow = true;

  //Set up shadow properties for the light
  lightActual.shadow.mapSize.width = 128; // default
  lightActual.shadow.mapSize.height = 128; // default
  lightActual.shadow.camera.near = 0.5; // default
  lightActual.shadow.camera.far = 250; // default

  lightActual.target = deskTop;

  deskGroup.add(lightActual);

  return deskGroup;
}
