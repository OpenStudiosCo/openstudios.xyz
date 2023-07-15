import * as THREE from 'three';

export function startTweening() {
  window.virtual_office.tweens.openDoor.start();
}

export function updateTweens(currentTime) {
  for (var tween in window.virtual_office.tweens) {
    window.virtual_office.tweens[tween].update(currentTime);
  }
}

export function setupTweens( ) {

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
  window.virtual_office.tweens.blurScreen = blurScreen();

  //window.virtual_office.tweens.sharpenScreen = sharpenScreen;

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
  let targetZ = - 20 + (window.virtual_office.room_depth / 2);
  return new TWEEN.Tween(coords, false) // Create a new tween that modifies 'coords'.
  .to({ x: targetZ }, 1000) // Move to (300, 200) in 1 second.
  .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
  .onUpdate(() => {
    // Called after tween.js updates 'coords'.
    // Move 'box' to the position described by 'coords' with a CSS translation.
    window.virtual_office.camera.position.z = coords.x;
    window.virtual_office.camera.updateProjectionMatrix();
  })
  .onComplete(() => {
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
    window.virtual_office.tweens.panDown.delay(500).start();
    window.virtual_office.tweens.dollyUp.delay(500).start();
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

function blurScreen( ) {
  let target = { x: 0 };
  return new TWEEN.Tween( target )
  .to({ x: 8 }, 1000) // Set the duration of the animation
  .onUpdate(() => {
    window.virtual_office.selected.webGLScreen.cssScreen.element.style.filter = 'blur( ' + target.x + 'px )';
  })
  .onComplete(() => {
    window.virtual_office.selected = false;
  });
}

export function sharpenScreen( ) {
  let target = { x: window.virtual_office.selected.name == 'backWall' ?  2 : 8 };
  return new TWEEN.Tween( target )
    .to({ x: 0 }, 1000) // Set the duration of the animation
    .onUpdate(() => {
      window.virtual_office.selected.webGLScreen.cssScreen.element.style.filter = 'blur( ' + target.x + 'px )';
    })
    .onComplete(() => {
      TWEEN.remove(window.virtual_office.tweens.sharpenScreen)
      delete window.virtual_office.tweens.sharpenScreen;
    });;
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
