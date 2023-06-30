import * as THREE from 'three';

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
  window.virtual_office.tweens.blurScreens.update(currentTime);
  window.virtual_office.tweens.sharpenScreens.update(currentTime);
}

export function setupTweens(controls, controls2) {

  /**
   * Open the door
   * Animation: Automatic, single use
   */
  let doorRotation = - Math.PI / 2;
  window.virtual_office.tweens.openDoor = openDoor( doorRotation );

  /**
   * Enter the office
   * Animation: Automatic, single use
   */
  let coords = { x: 15 + ( window.virtual_office.room_depth / 2 ) }; // Start at (0, 0)
  window.virtual_office.tweens.enterTheOffice = enterTheOffice( coords );

  /**
   * Camera dolly up.
   * Animation: Automatic, single use
   */  
  window.virtual_office.tweens.dollyUp = dollyUp();

  /**
   * Camera pan down.
   * Animation: Automatic, single use
   */
  let cameraRotationX = - (Math.PI / 30) * window.virtual_office.camera.aspect;
  window.virtual_office.tweens.panDown = panDown( cameraRotationX );

  /**
   * Move camera to "x"
   * Animation: Manual, reusable
   */
  window.virtual_office.tweens.moveCamera = moveCamera();

  /**
   * Rotate camera to "x"
   * Animation: Manual, reusable
   */
  window.virtual_office.tweens.rotateCamera = rotateCamera();

  /**
   * Blur Screens
   * Animation: Manual, reusable
   */
  window.virtual_office.tweens.blurScreens = blurScreens();

  window.virtual_office.tweens.sharpenScreens = sharpenScreens();

  /**
   * Reset the camera to original position and rotation.
   */
  let cameraDefaultPosition = { x: 0, y: 18, z: -20 + (window.virtual_office.room_depth / 2) },
      cameraDefaultRotation = { x: cameraRotationX, y: 0, z: 0 };
  window.virtual_office.tweens.resetCameraPosition = resetCameraPosition( cameraDefaultPosition );
  window.virtual_office.tweens.resetCameraRotation = resetCameraRotation( cameraDefaultRotation );

}

// Intro sequence.

function enterTheOffice ( coords ) {
  return new TWEEN.Tween(coords, false) // Create a new tween that modifies 'coords'.
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
}

function openDoor ( doorRotation ) {
  return new TWEEN.Tween(window.virtual_office.scene_objects.door.rotation)
  .to({ y: doorRotation }, 500) // Set the duration of the animation
  .onComplete(() => {
    window.virtual_office.tweens.enterTheOffice.start();

  })
  ;
}

function dollyUp ( ) {
  return new TWEEN.Tween(window.virtual_office.camera.position)
  .to({ y: 18 }, 500) // Set the duration of the animation
  .onUpdate(() => {
    window.virtual_office.camera.updateProjectionMatrix();
  });
}

function panDown ( cameraRotationX ) {
  return new TWEEN.Tween(window.virtual_office.camera.rotation)
  .to({ x: cameraRotationX }, 500) // Set the duration of the animation
  .onUpdate(() => {
    window.virtual_office.camera.updateProjectionMatrix();
  });

}


// Reusable

function moveCamera( ) {
  return new TWEEN.Tween(window.virtual_office.camera.position)
    .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
    .onUpdate(() => {
      window.virtual_office.camera.updateProjectionMatrix();
    })
    .onComplete(() => {
      window.virtual_office.moving = false;
    });
  ;
}

function rotateCamera( ) {
  return new TWEEN.Tween(window.virtual_office.camera.rotation)
  .easing(TWEEN.Easing.Quadratic.InOut) // Easing function
  .onUpdate(() => {
    window.virtual_office.camera.updateProjectionMatrix();
  })
  .onComplete(() => {
    window.virtual_office.moving = false;
  });
}

function blurScreens() {
  let target = { x: 0 };
  return new TWEEN.Tween( target )
  .to({ x: 8 }, 1000) // Set the duration of the animation
  .onUpdate(() => {
    window.virtual_office.scene_objects.screenCSSGroup.children.forEach(function (screen, i) {
      screen.element.style.filter = 'blur( ' + target.x + 'px )'
    });
  });
}

function sharpenScreens( ) {
  let target = { x: 8 };
  return new TWEEN.Tween( target )
    .to({ x: 0 }, 1000) // Set the duration of the animation
    .onUpdate(() => {
      window.virtual_office.scene_objects.screenCSSGroup.children.forEach((screen) => {
        screen.element.style.filter = 'blur( ' + target.x + 'px )'
      });
    });
}


// Resets 

function resetCameraPosition( cameraDefaultPosition ) {
  return new TWEEN.Tween(window.virtual_office.camera.position)
  .to(cameraDefaultPosition, 1000)
  .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
  .onUpdate(() => {
    window.virtual_office.camera.updateProjectionMatrix();
  })
  .onComplete(() => {
    window.virtual_office.moving = false;
  })
  ;
}


function resetCameraRotation( cameraDefaultRotation ) {
  return new TWEEN.Tween(window.virtual_office.camera.rotation)
  .to(cameraDefaultRotation, 1000)
  .easing(TWEEN.Easing.Quadratic.InOut) // Use desired easing function
  .onUpdate(() => {
    window.virtual_office.camera.updateProjectionMatrix();
  })
  ;
}
