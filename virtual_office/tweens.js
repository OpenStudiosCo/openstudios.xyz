import * as THREE from 'three';

export function setupTweens(controls, controls2) {
  const coords = { x: 15 + (window.virtual_office.room_depth / 2) } // Start at (0, 0)

  window.virtual_office.tweens.enterTheOffice = new TWEEN.Tween(coords, false) // Create a new tween that modifies 'coords'.
    .to({ x: - 20 + (window.virtual_office.room_depth / 2) }, 1000) // Move to (300, 200) in 1 second.
    .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
    .onUpdate(() => {
      // Called after tween.js updates 'coords'.
      // Move 'box' to the position described by 'coords' with a CSS translation.
      window.virtual_office.camera.position.z = coords.x;
      window.virtual_office.camera.updateProjectionMatrix();
    })
    .onComplete(() => {
      window.virtual_office.tweens.panDown.start();
      window.virtual_office.tweens.dollyUp.start();
      const roomMaterial = new THREE.MeshLambertMaterial({
        color: 0xa0adaf,
        opacity: 1,
        side: THREE.BackSide,
        transparent: true
      });
      window.virtual_office.scene_objects.room.material.forEach((material, i) => {
        if (material.opacity > 0) {
          window.virtual_office.scene_objects.room.material[i] = roomMaterial;
        }
      });
    });

  // Define the target rotation of the door when it's open
  var targetRotation = - Math.PI / 2;

  // Animate the door rotation
  window.virtual_office.tweens.openDoor = new TWEEN.Tween(window.virtual_office.scene_objects.door.rotation)
    .to({ y: targetRotation }, 500) // Set the duration of the animation
    .onComplete(() => {
      window.virtual_office.tweens.enterTheOffice.start();

    })
    ;

  // Define the target rotation of the door when it's open
  var targetRotation = - (Math.PI / 30) * window.virtual_office.camera.aspect;

  // Animate the camera looking down around the room
  window.virtual_office.tweens.panDown = new TWEEN.Tween(window.virtual_office.camera.rotation)
    .to({ x: targetRotation }, 500) // Set the duration of the animation
    .onUpdate(() => {
      window.virtual_office.camera.updateProjectionMatrix();
    })

  let targetPos = { y: 10 };

  // Animate the camera looking down around the room
  window.virtual_office.tweens.dollyUp = new TWEEN.Tween(targetPos)
    .to({ y: 18 }, 500) // Set the duration of the animation
    .onUpdate(() => {
      // Called after tween.js updates 'coords'.
      // Move 'box' to the position described by 'coords' with a CSS translation.
      window.virtual_office.camera.position.y = targetPos.y;
      window.virtual_office.camera.updateProjectionMatrix();
    });

  // Animate the camera moving to selected.
  window.virtual_office.tweens.moveCamera = new TWEEN.Tween(window.virtual_office.camera.position)
    .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
    .onStart(() => {
      // Rotate to face the screen if this is a desk.
      if (virtual_office.selected.name == "desk") {
        virtual_office.selected.children.forEach( ( item ) => {
          if ( item.name == 'screen' ) {
            var targetRotation = item.rotation.clone(); // Target quaternion
            window.virtual_office.tweens.rotateCamera.to({ x: targetRotation.x, y: - targetRotation.y, z: targetRotation.z }, 1000) // Tween duration in milliseconds
            window.virtual_office.tweens.rotateCamera.start()
          }
        });
      
      }
    })
    .onUpdate(() => {
      window.virtual_office.camera.updateProjectionMatrix();
    })
    .onComplete(() => {
      window.virtual_office.moving = false;
    });
  ;


  // Set up the tween for camera rotation 
  window.virtual_office.tweens.rotateCamera = new TWEEN.Tween(window.virtual_office.camera.rotation)
    .easing(TWEEN.Easing.Quadratic.InOut) // Easing function
    .onUpdate(() => {
      window.virtual_office.camera.updateProjectionMatrix();
    })
    .onComplete(() => {
      window.virtual_office.moving = false;
    });
  ;

  let cameraDefaultPosition = { x: 0, y: 18, z: -20 + (window.virtual_office.room_depth / 2) },
    cameraDefaultRotation = { x: targetRotation, y: 0, z: 0 };

  // Animate the camera resetting from any other position.
  window.virtual_office.tweens.resetCameraPosition = new TWEEN.Tween(window.virtual_office.camera.position)
    .to(cameraDefaultPosition, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
    .onUpdate(() => {
      window.virtual_office.camera.updateProjectionMatrix();
    })
    .onComplete(() => {
      window.virtual_office.moving = false;
    })
    ;
  window.virtual_office.tweens.resetCameraRotation = new TWEEN.Tween(window.virtual_office.camera.rotation)
    .to(cameraDefaultRotation, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
    .onUpdate(() => {
      window.virtual_office.camera.updateProjectionMatrix();
    })
    ;

}

export function startTweening() {
  window.virtual_office.tweens.openDoor.start();
}

export function updateTweens(currentTime) {
  window.virtual_office.tweens.enterTheOffice.update(currentTime);
  window.virtual_office.tweens.openDoor.update(currentTime);
  window.virtual_office.tweens.dollyUp.update(currentTime);
  window.virtual_office.tweens.panDown.update(currentTime);
  window.virtual_office.tweens.moveCamera.update(currentTime);
  window.virtual_office.tweens.resetCameraPosition.update(currentTime);
  window.virtual_office.tweens.resetCameraRotation.update(currentTime);
  window.virtual_office.tweens.rotateCamera.update(currentTime);
}
