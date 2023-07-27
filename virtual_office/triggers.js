/**
 * Triggers
 * 
 * Fires custom logic when certain conditions are true in the loop.
 * 
 * Each trigger has a constructing function that returns an object containing a way to update itself.
 */

export function setupTriggers ( ) {
    window.virtual_office.triggers.updateSigns = updateSigns();
}

export function updateTriggers ( currentTime ) {
    for (var trigger in window.virtual_office.triggers) {
        window.virtual_office.triggers[trigger].update(currentTime);
    }
}

// Brights whatever sign is currently hovered over.
function updateSigns ( ) {
    return {
        update: () => {
            const seconds = 0.1;
            const updateSpeed = seconds * window.virtual_office.fps;
            // Run neon sign update if the TV or neon sign are being hovered.
            if ( window.virtual_office.hovered &&
                ( window.virtual_office.hovered.name == 'neon_sign' || window.virtual_office.hovered.name == 'tv' )
            ) {
                // Check it's not already white
                if ( window.virtual_office.scene_objects.neon_sign.emissive != 0xFFFFFF ) {
                    const currentRgb = hexToRgb(window.virtual_office.scene_objects.neon_sign.material.emissive.getHex());
                    const targetRgb = { r: 255, g: 255, b: 255 };
                    
                    // Get new RGB based on the delta / fps
                    const newRgb = {
                        r: currentRgb.r + ((targetRgb.r - currentRgb.r)/updateSpeed),
                        g: currentRgb.g + ((targetRgb.g - currentRgb.g)/updateSpeed),
                        b: currentRgb.b + ((targetRgb.b - currentRgb.b)/updateSpeed)
                    };
                    const colorHex = rgbToHex(Math.ceil(newRgb.r), Math.ceil(newRgb.g), Math.ceil(newRgb.b));
                    window.virtual_office.scene_objects.neon_sign.material.emissive.set(`${colorHex.toString(16).toUpperCase().padStart(6, '0')}`);

                }
            }
            else {
                // Check it's not already white
                if ( window.virtual_office.scene_objects.neon_sign.emissive != 0xDA68C5 ) {
                    const currentRgb = hexToRgb(window.virtual_office.scene_objects.neon_sign.material.emissive.getHex());
                    const targetRgb = { r: 218, g: 104, b: 197 };
                    
                    // Get new RGB based on the delta / fps
                    const newRgb = {
                        r: currentRgb.r + ((targetRgb.r - currentRgb.r)/updateSpeed),
                        g: currentRgb.g + ((targetRgb.g - currentRgb.g)/updateSpeed),
                        b: currentRgb.b + ((targetRgb.b - currentRgb.b)/updateSpeed)
                    };
                    const colorHex = rgbToHex(Math.ceil(newRgb.r), Math.ceil(newRgb.g), Math.ceil(newRgb.b));
                    window.virtual_office.scene_objects.neon_sign.material.emissive.set(`${colorHex.toString(16).toUpperCase().padStart(6, '0')}`);
                }
            }
        }
    };
}

// Function to convert hex to RGB
function hexToRgb(hex) {
    const r = (hex >> 16) & 255;
    const g = (hex >> 8) & 255;
    const b = hex & 255;
    return { r, g, b };
  }
  
  // Function to convert RGB to hex
  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('');
  