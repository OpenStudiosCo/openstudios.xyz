export function setupTweens() {
  const coords = {x: 15 + (window.virtual_office.room_depth / 2)} // Start at (0, 0)

  window.virtual_office.tweens.enterTheOffice = new TWEEN.Tween(coords, false) // Create a new tween that modifies 'coords'.
    .to({x: - 16 + (window.virtual_office.room_depth / 2)}, 1500) // Move to (300, 200) in 1 second.
    .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
    .onUpdate(() => {
      // Called after tween.js updates 'coords'.
      // Move 'box' to the position described by 'coords' with a CSS translation.
      window.virtual_office.camera.position.z = coords.x;
      window.virtual_office.camera.updateProjectionMatrix();
    });

  // Define the target rotation of the door when it's open
  var targetRotation = - Math.PI / 2;

  // Animate the door rotation
  window.virtual_office.tweens.openDoor = new TWEEN.Tween(window.virtual_office.scene_objects.door.rotation)
    .to({ y: targetRotation }, 500) // Set the duration of the animation
    ;
}

export function startTweening() {
  window.virtual_office.tweens.enterTheOffice.start();
  window.virtual_office.tweens.openDoor.start();
}

export function updateTweens( currentTime ) {
  window.virtual_office.tweens.enterTheOffice.update( currentTime );
  window.virtual_office.tweens.openDoor.update( currentTime );
}
