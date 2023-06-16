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
}

export function startTweening() {
  window.virtual_office.tweens.enterTheOffice.start();
}

export function updateTweens( currentTime ) {
  window.virtual_office.tweens.enterTheOffice.update( currentTime );
}
