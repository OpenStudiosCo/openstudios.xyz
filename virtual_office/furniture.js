import * as THREE from 'three';

// Uses createDesk and arranges them in the room.
export function setupDesks(adjustedGapSize, gapSize, scale) {
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

  return deskGroup;
}
