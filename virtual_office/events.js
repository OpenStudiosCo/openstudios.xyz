/**
 * Events
 * 
 * Handles user interaction with the scene.
 */
import * as THREE from 'three';

import { calculateAdjustedGapSize, createOfficeRoom, setCameraFOV, doorWidth, doorDepth, doorHeight } from './main.js';

import { updateDeskZ } from './furniture.js';
import { resetReusables } from './tweens.js';

export function handleViewportChange() {
  window.virtual_office.scene_dimensions.adjusted_gap = calculateAdjustedGapSize();
  window.virtual_office.room_depth = 8 * window.virtual_office.scene_dimensions.adjusted_gap;

  var width = window.innerWidth;
  var height = window.innerHeight;

  window.virtual_office.camera.aspect = width / height;

  window.virtual_office.camera.fov = setCameraFOV(window.virtual_office.camera.aspect);
  if (!window.virtual_office.selected) {
    window.virtual_office.camera.position.z = - 20 + (window.virtual_office.room_depth / 2);
    window.virtual_office.camera.rotation.x = - (Math.PI / 30) * window.virtual_office.camera.aspect;
  }
  window.virtual_office.camera.updateProjectionMatrix();

  // Adjust desk positions based on the aspect ratio
  window.virtual_office.scene_objects.deskGroup.children.forEach(function (mesh, i) {
    if ( mesh.name == 'desk') {
      updateDeskZ(mesh, mesh.deskIndex);

      updateDeskZ(mesh.webGLScreen, mesh.deskIndex);

      mesh.webGLScreen.position.z += .175;

    }

    if ( mesh.name == 'chair') {
      updateDeskZ(mesh, mesh.deskIndex);
    }
  });
  window.virtual_office.scene_objects.deskGroup.children.forEach(function (mesh, i) {
    if ( mesh.name == 'plant') {
      mesh.position.z = window.virtual_office.scene_dimensions.adjusted_gap;
    }
  });

  const newRoom = createOfficeRoom();
  window.virtual_office.scene_objects.room.geometry = newRoom.geometry;

  let backWallZ = - 15 - window.virtual_office.room_depth / 2;
  window.virtual_office.scene_objects.wallGroup.position.z = backWallZ;
  window.virtual_office.scene_objects.tvWebGL.position.z =  backWallZ +1;

  window.virtual_office.scene_objects.door.position.set(- doorWidth / 2, - 5 + (doorHeight / 2), - 15 + (window.virtual_office.room_depth / 2));

  window.virtual_office.renderers.webgl.setSize(width, height);
  window.virtual_office.effects.main.setSize(width, height);
  window.virtual_office.effects.bloom.setSize(width, height);
}

export function handleInteractions( scene ) {
  // update the picking ray with the camera and pointer position
  window.virtual_office.raycaster.setFromCamera(new THREE.Vector2(window.virtual_office.pointer.x, window.virtual_office.pointer.y), window.virtual_office.camera);

  // calculate objects intersecting the picking ray
  const intersects = window.virtual_office.raycaster.intersectObjects(scene.children);

  // Reset all the other desk labels to the regular colour.
  window.virtual_office.scene_objects.deskGroup.children.forEach((desk) => {
    desk.children.forEach((desk_item) => {
      // if (desk_item.name == "desk_label") {
      //   desk_item.material.emissive.set(0x00EEff);
      //   desk_item.material.emissiveIntensity = 0.5;
      // }
      // if (desk_item.name == "ceilLightMesh2") {
      //   desk_item.children.forEach((child)=>{
      //     // (light bub curves name is currently "CUBezierCurve006_3")
      //     if (child.name == "CUBezierCurve006_3") {
      //       child.material.emissive.set(0x00EEff);
      //       child.material.emissiveIntensity = 0.25;
      //     }
      //   });
      // }
      // if (desk_item.name == "ceilLightActual") {
      //   desk_item.color.set(0x00EEff);
      //   desk_item.intensity = 0.015;
      // }
    });
  });

  if (intersects.length > 0) {  
    for (let i = 0; i < intersects.length; i++) {
      // Clear the hovered object.
      window.virtual_office.hovered = intersects[i].object;

      // If nothing is selected, allow hover effects.
      if (!window.virtual_office.selected) {
        document.documentElement.style.cursor = "default";
        if (intersects[i].object.name == "desk_label") {
          // // Set the active one to white.
          // intersects[i].object.material.emissive.set(0xFFFFFF);
          document.documentElement.style.cursor = "pointer";
    
          handleDeskClick(intersects[i].object.parent);
    
          break;
        }
    
        if (intersects[i].object.name == "screen" || intersects[i].object.name == "desk_part") {
          // Set the screens sibling desk_label to active.
          //intersects[i].object.parent.getObjectByName("desk_label").material.emissive.set(0xFFFFFF);
          //intersects[i].object.parent.getObjectByName("desk_label").material.emissiveIntensity = window.virtual_office.fast ? 1 : 0.25;
          // if (intersects[i].object.name == "ceilLightMesh2") {
          //   intersects[i].object.children.forEach((child)=>{
          //     // (light bub curves name is currently "CUBezierCurve006_3")
          //     if (child.name == "CUBezierCurve006_3") {
          //       child.material.emissive.set(0xFFFFFF);
          //       child.material.emissiveIntensity = window.virtual_office.fast ? 1 : 0.5;
          //     }
          //   });
          // }
          //intersects[i].object.parent.getObjectByName("ceilLightActual").intensity = window.virtual_office.fast ? 0.05 : 0.035;
          document.documentElement.style.cursor = "pointer";
    
          handleDeskClick(intersects[i].object.parent);
    
          break;
        }
    
        if (intersects[i].object.name == "neon_sign" || intersects[i].object.name == "tv") {
          document.documentElement.style.cursor = "pointer";

          handleWallClick(intersects[i].object.parent);
    
          break;
        }
    
      }
      // Otherwise we're only tracking interaction with the exit sign.
      else {
        document.documentElement.style.cursor = "inherit";
      }
    }
  }
  else {
    window.virtual_office.hovered = false;
  }
}

function handleDeskClick(desk) {
  if (window.virtual_office.pointer.z && !window.virtual_office.moving) {
    if (!window.virtual_office.selected) {
      window.virtual_office.moving = true;
      window.virtual_office.selected = desk;

      let tempMesh = new THREE.Object3D();
      tempMesh.scale.copy(virtual_office.selected.webGLScreen.scale);
      tempMesh.position.copy(virtual_office.selected.webGLScreen.position);
      
      var targetRotation = window.virtual_office.selected.webGLScreen.rotation.clone();

      const fovVertical = window.virtual_office.camera.fov * (Math.PI / 180);
      const fovHorizontal = 2 * Math.atan(Math.tan(fovVertical / 2) * window.virtual_office.camera.aspect);
      const distanceHorizontal = window.innerWidth / (2 * Math.tan(fovHorizontal / 2));
      const roomSide = tempMesh.position.x > 0 ? -1 : 1;
      const diffZ = distanceHorizontal * 0.00625;
      tempMesh.translateX(roomSide * diffZ / 1.4);
      tempMesh.translateZ(diffZ / 1.4);

      // Start loading the screen.
      document.getElementById('pageOverlay').src = window.virtual_office.selected.webGLScreen.pageUrl;

      window.virtual_office.tweens.rotateCamera.to({ x: targetRotation.x, y: targetRotation.y, z: targetRotation.z }, 1000).start();
      window.virtual_office.tweens.moveCamera.to(tempMesh.position, 1000).onComplete(stretchSelectedScreen).start();

    }

  }
}


function handleWallClick(desk) {
  if (window.virtual_office.pointer.z && !window.virtual_office.moving) {
    if (!window.virtual_office.selected) {
      window.virtual_office.moving = true;
      window.virtual_office.selected = desk;

      let newPosZ = window.virtual_office.selected.webGLScreen.position.z;

      const fovVertical = window.virtual_office.camera.fov * (Math.PI / 180);
      const fovHorizontal = 2 * Math.atan(Math.tan(fovVertical / 2) * window.virtual_office.camera.aspect);
      const distanceHorizontal = window.innerWidth / (2 * Math.tan(fovHorizontal / 2));

      newPosZ += distanceHorizontal * 0.015;

      let newPosition = new THREE.Vector3(
        0,
        window.virtual_office.selected.webGLScreen.position.y,
        newPosZ
      );

      // Start loading the screen.
      document.getElementById('pageOverlay').src = window.virtual_office.selected.webGLScreen.pageUrl;

      window.virtual_office.tweens.rotateCamera.to({ x:0, y: 0, z: 0 }, 1000).start()
      window.virtual_office.tweens.moveCamera.to(newPosition, 1000).onComplete(stretchSelectedScreen).start();
    }
  }
}

export function handleExitSign() {
  window.virtual_office.moving = true;
  var targetRotation = - (Math.PI / 30) * window.virtual_office.camera.aspect;

  let cameraDefaultPosition = { x: 0, y: 18, z: -20 + (window.virtual_office.room_depth / 2) },
    cameraDefaultRotation = { x: targetRotation, y: 0, z: 0 };

  // Animate the camera resetting from any other position.
  resetReusables();
  window.virtual_office.tweens.resetCameraRotation.start();
  window.virtual_office.tweens.resetCameraPosition.onStart(shrinkScreenBack).start();

  window.virtual_office.selected = false;
  
}

/**
 * Helpers
 */

// Function to update the CSS object's size to fit the visible space
function stretchSelectedScreen() {

  document.getElementById('pageOverlay').style.display = 'block';
  
  document.getElementById('exitSign').style.display = 'block';
}

// Restore the CSS object to its original size.
function shrinkScreenBack() {

  document.getElementById('pageOverlay').style.display = 'none';

  document.getElementById('exitSign').style.display = 'none';  

}