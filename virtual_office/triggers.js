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

const tolerance = 0.001;

// Brights whatever sign is currently hovered over.
function updateSigns ( ) {
    return {
        update: () => {
            
            if ( window.virtual_office.scene_objects.neon_sign ) {
                // Run neon sign update if the TV or neon sign are being hovered.
                if ( window.virtual_office.hovered &&
                    ( window.virtual_office.hovered.name == 'neon_sign' || window.virtual_office.hovered.name == 'tv' )
                ) {
                    // Check it's not already white
                    if ( window.virtual_office.scene_objects.neon_sign.material.emissive.getHex() != 0xFFFFFF ) {
                        const currentRgb = hexToRgb(window.virtual_office.scene_objects.neon_sign.material.emissive.getHex());
                        const targetRgb = { r: 255, g: 255, b: 255 };
                        
                        const [ colorHex, colorRgb ] = interpolateRgb(currentRgb, targetRgb);

                        if (thresholdRgb(currentRgb, colorRgb)) {
                            console.log('forward', colorHex);
                            window.virtual_office.scene_objects.neon_sign.material.emissive.set(`${colorHex.toString(16).toUpperCase().padStart(6, '0')}`);
                        }
                        
                    }

                    if ( window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity != 0.5){
                        const newIntensity = interpolateFloat( window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity, 0.5 );
                        
                        if ( Math.abs(window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity - newIntensity) > tolerance ) {
                            window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity = newIntensity;
                        }                        
                    }

                }
                else {
                    // Check it's not already white
                    if ( window.virtual_office.scene_objects.neon_sign.material.emissive.getHex() != 0xDA68C5 ) {
                        const currentRgb = hexToRgb(window.virtual_office.scene_objects.neon_sign.material.emissive.getHex());
                        const targetRgb = { r: 218, g: 104, b: 197 };

                        const [ colorHex, colorRgb ] = interpolateRgb(currentRgb, targetRgb);
                        // console.log('back', colorHex);
                        // window.virtual_office.scene_objects.neon_sign.material.emissive.set(`${colorHex.toString(16).toUpperCase().padStart(6, '0')}`);
                        if (thresholdRgb(currentRgb, colorRgb)) {
                            window.virtual_office.scene_objects.neon_sign.material.emissive.set(`${colorHex.toString(16).toUpperCase().padStart(6, '0')}`);
                        }
                    }

                    if ( window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity != 1){
                        const newIntensity = interpolateFloat( window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity, 1 );
                        
                        if ( Math.abs(window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity - newIntensity) > tolerance ) {
                            window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity = newIntensity;
                        }
                    }

                }
            }
        }
    };
}

function thresholdRgb( currentRgb, targetRgb ) {
    const checkThreshold = (current, target) => {
        if ( Math.abs(target - current) >= 1 ) {
            return true;
        }
        else {
            return false;
        }
    };

    const isWithinTolerance = (
        checkThreshold(currentRgb.r, targetRgb.r) &&
        checkThreshold(currentRgb.g, targetRgb.g) &&
        checkThreshold(currentRgb.b, targetRgb.b)
    );
    return isWithinTolerance;
}

function interpolateFloat( current, target, seconds = 0.1 ) {
    const updateSpeed = seconds * window.virtual_office.fps;

    current = parseFloat( current );
    target = parseFloat( target );

    // Defensive check for overflow issues.
    if (current != target) {
        // Determine the direction of interpolation
        const direction = target >= current ? 1 : -1;
        const step = (target - current) / updateSpeed;

        current = direction === 1 ? Math.min(current + step, target) : Math.max(current + step, target);
    }
    return current;
    
}

function interpolateRgb( currentRgb, targetRgb, seconds = 0.1 ) {

    // Get new RGB based on the delta / fps
    const newRgb = {
        r: interpolateFloat(currentRgb.r, targetRgb.r, seconds),
        g: interpolateFloat(currentRgb.g, targetRgb.g, seconds),
        b: interpolateFloat(currentRgb.b, targetRgb.b, seconds),
    };

    return [rgbToHex(Math.ceil(newRgb.r), Math.ceil(newRgb.g), Math.ceil(newRgb.b)), newRgb];
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
  