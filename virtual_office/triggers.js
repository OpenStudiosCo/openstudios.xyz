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
            
            if (    
                window.virtual_office.hovered &&
                window.virtual_office.scene_objects.neon_sign &&
                window.virtual_office.scene_objects.desk_labels && window.virtual_office.scene_objects.desk_labels.length == 4
            ) {
                // Run neon sign update if the TV or neon sign are being hovered.
                if (
                    ( window.virtual_office.hovered.name == 'neon_sign' || window.virtual_office.hovered.name == 'tv' )
                ) {

                    // Update emissive color to white.
                    interpolateRgbProperty( window.virtual_office.scene_objects.neon_sign.material.emissive, 0xFFFFFF, { r: 255, g: 255, b: 255 } );

                    // Drop emissive intensity to half for the super bright white.
                    window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity = interpolateFloatProperty( window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity, 0.5 );
                }
                else {
                    interpolateRgbProperty( window.virtual_office.scene_objects.neon_sign.material.emissive, 0xDA68C5, { r: 218, g: 104, b: 197 } );

                    // Restore emissive intensity to 1.
                    window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity = interpolateFloatProperty( window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity, 1 );

                }

                // Run neon sign update if the screen or neon sign are being hovered.
                if ( 
                    ( window.virtual_office.hovered.name == 'screen' || window.virtual_office.hovered.name == 'desk_part' || window.virtual_office.hovered.name == 'desk_label' )
                ) {
                    const material = window.virtual_office.hovered.parent.getObjectByName("desk_label").material;
                    //console.log( material.emissive);
                    // Update emissive color to white.
                    interpolateRgbProperty(window.virtual_office.hovered.parent.getObjectByName("desk_label").material.emissive, 0xFFFFFF, { r: 255, g: 255, b: 255 } );
                    //material.emissive.set(0xffffff);
                    //console.log( material.emissive);
                    // Drop emissive intensity to half for the super bright white.
                    //window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity = interpolateFloatProperty( window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity, 0.5 );
                }
                else {
                    // window.virtual_office.scene_objects.deskGroup.children.forEach((desk) => {
                    //     desk.children.forEach((desk_item) => {
                    //         if (desk_item.name == "desk_label" && (
                    //             window.virtual_office.hovered &&
                    //             ( window.virtual_office.hovered.name == 'screen' || window.virtual_office.hovered.name == 'desk_part' || window.virtual_office.hovered.name == 'desk_label' ) &&
                    //             window.virtual_office.hovered.parent.getObjectByName("desk_label").uuid != desk_item.uuid
                    //         )) {
                    //             console.log(desk_item.material.emissive);
                    //           interpolateRgbProperty( desk_item.material.emissive, 0x00EEff, { r: 0, g: 238, b: 255 } );
                    //           console.log(desk_item.material.emissive);
                    //         }
                    //     });
                    // });
                    //const material = window.virtual_office.hovered.parent.getObjectByName("desk_label").material;
                    //material.emissive.set(0x00EEff);
                    //interpolateRgbProperty( window.virtual_office.hovered.parent.getObjectByName("desk_label").material.emissive, 0x00EEff, { r: 0, g: 238, b: 255 } );

                    // Restore emissive intensity to 1.
                    //window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity = interpolateFloatProperty( window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity, 1 );

                }
            }
        }
    };
}

function interpolateRgbProperty( property, targetHex, targetRgb ) {

    // Check it's not already on target
    if ( property.getHex() != targetHex ) {

        // get current property rgb from material hex
        const currentRgb = hexToRgb( property.getHex() );
        
        // Grab interpolated values. 
        const [ colorHex, colorRgb ] = interpolateRgb(currentRgb, targetRgb);

        // Check if within threshold.
        if (thresholdRgb(currentRgb, colorRgb)) {

            // Update property color.
            property.set( `${colorHex.toString(16).toUpperCase().padStart(6, '0')}` );

        }

    }

}

function interpolateFloatProperty( property, target ) {

    // Check it's not already on target
    if ( property != target){

        const newValue = interpolateFloat( property, target );
        
        if ( Math.abs(property - newValue) > tolerance ) {
            property = newValue;
        }

    }

    return property;

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
        checkThreshold(currentRgb.r, targetRgb.r) ||
        checkThreshold(currentRgb.g, targetRgb.g) ||
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
  