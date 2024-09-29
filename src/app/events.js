/**
 * Events
 * 
 * Handles user interaction with the scene.
 */
import * as THREE from 'three';

import { calculateAdjustedGapSize, createOfficeRoom, setCameraFOV, doorWidth, doorDepth, doorHeight } from './main.js';

import { updateDeskZ } from './furniture.js';
import { resetReusables } from './tweens.js';

import { getMeshWidth } from './helpers.js';

import { setupBlogWallTitle, clearBlogWallTitle, updateBlogLayout } from './furniture/corkboard.js';

export async function handleViewportChange() {
  window.virtual_office.settings.adjusted_gap = calculateAdjustedGapSize();
  window.virtual_office.room_depth = 8 * window.virtual_office.settings.adjusted_gap;

  var width = window.innerWidth;
  var height = window.innerHeight;

  window.virtual_office.renderers.webgl.setSize( width, height );

  if ( window.virtual_office.effects && window.virtual_office.effects.passes.length > 0 )
    window.virtual_office.effects.setSize( width, height );

  window.virtual_office.camera.aspect = width / height;

  window.virtual_office.camera.fov = setCameraFOV( window.virtual_office.camera.aspect );
  if ( !window.virtual_office.selected && !window.virtual_office.moving ) {
    let posZ = -20;
    window.virtual_office.camera.position.z = posZ + ( window.virtual_office.room_depth / 2 );
    window.virtual_office.camera.rotation.x = - ( Math.PI / 30 ) * window.virtual_office.camera.aspect;
  }
  window.virtual_office.camera.updateProjectionMatrix();

  const newRoom = await createOfficeRoom();
  window.virtual_office.scene_objects.room.geometry = newRoom.geometry;

  if ( !window.virtual_office.started ) {
    if ( window.virtual_office.camera.aspect < 0.88 ) {
      window.virtual_office.settings.startPosZ = -5;
    }
    else {
      window.virtual_office.settings.startPosZ = -10;
    }
  }
  else {

    // Adjust desk positions based on the aspect ratio
    window.virtual_office.scene_objects.deskGroup.children.forEach( function ( mesh, i ) {
      if ( mesh.name == 'desk' ) {
        updateDeskZ( mesh, mesh.deskIndex );

        updateDeskZ( mesh.webGLScreen, mesh.deskIndex );

        mesh.webGLScreen.position.z += .175;

      }

      if ( mesh.name == 'chair' ) {
        updateDeskZ( mesh, mesh.deskIndex );
      }
    } );

    let backWallZ = - 15 - window.virtual_office.room_depth / 2;
    window.virtual_office.scene_objects.wallGroup.position.z = backWallZ;
    window.virtual_office.scene_objects.tvWebGL.position.z = backWallZ + 1;

    window.virtual_office.scene_objects.door.position.z = - 15 + ( window.virtual_office.room_depth / 2 );
    window.virtual_office.scene_objects.door_frame.position.z = - 15 + ( window.virtual_office.room_depth / 2 );

    updateBlogLayout( window.virtual_office.scene_objects.blogWall );

    window.virtual_office.scene_objects.blogWall.position.z = - 15 - ( ( window.virtual_office.room_depth / 8 ) * 1.5 );

    // Update camera position if viewing corkboard.
    if ( window.virtual_office.selected.name == 'corkBoard' ) {
      let [ targetPosition, targetRotation ] = window.virtual_office.scene_objects.blogWall.getViewingCoords();

      window.virtual_office.camera.position.copy( targetPosition );
      window.virtual_office.camera.rotation.copy( targetRotation );

    }
    if ( window.virtual_office.selected.name == 'portraits' ) {
      let [ targetPosition, targetRotation ] = window.virtual_office.scene_objects.portraits.getViewingCoords();

      window.virtual_office.camera.position.copy( targetPosition );
      window.virtual_office.camera.rotation.copy( targetRotation );

    }

    if ( window.virtual_office.scene_objects.blog_selected_title ) {
      let meshWidth = getMeshWidth( window.virtual_office.scene_objects.blog_selected_title ) * .1;
      window.virtual_office.scene_objects.blog_selected_title.position.set( - meshWidth / 2, window.virtual_office.camera.aspect >= 0.88 ? 0 : 6.5, .1 );
    }

    if ( window.virtual_office.scene_objects.blog_sign ) {
      window.virtual_office.scene_objects.blog_sign.position.set( -3, window.virtual_office.camera.aspect >= 0.88 ? 6.5 : 10, 0.1 );
    }

    if ( window.virtual_office.scene_objects.portraits ) {
      window.virtual_office.scene_objects.portraits.position.z = - 15 + ( ( window.virtual_office.room_depth / 8 ) * 2.5 );
    }   

  }
}

export function handleInteractions() {
  // update the picking ray with the camera and pointer position
  window.virtual_office.raycaster.setFromCamera( new THREE.Vector2( window.virtual_office.pointer.x, window.virtual_office.pointer.y ), window.virtual_office.camera );

  // calculate objects intersecting the picking ray
  const intersects = window.virtual_office.raycaster.intersectObjects( window.virtual_office.scene.children );

  if ( intersects.length > 0 ) {
    for ( let i = 0; i < intersects.length; i++ ) {

      // If nothing is selected, allow hover effects.
      if ( !window.virtual_office.selected ) {

        // Clear the hovered object.
        window.virtual_office.hovered = intersects[ i ].object;

        document.documentElement.style.cursor = "default";

        if ( intersects[ i ].object.name == "cat" ) {
          document.documentElement.style.cursor = "pointer";

          catHover( intersects[ i ].object.parent );

          break;
        }


        if ( intersects[ i ].object.name == "screen" || intersects[ i ].object.name == "desk_part" || intersects[ i ].object.name == "desk_label" ) {
          document.documentElement.style.cursor = "pointer";

          screenHover( intersects[ i ].object.parent );

          break;
        }

        if ( intersects[ i ].object.name == "blog_sign" || intersects[ i ].object.name == "corkBoard" || intersects[ i ].object.name == "corkboardMesh" ) {
          document.documentElement.style.cursor = "pointer";

          blogHover();

          break;
        }

        if ( intersects[ i ].object.name == "neon_sign" || intersects[ i ].object.name == "tv" ) {
          document.documentElement.style.cursor = "pointer";

          screenHover( intersects[ i ].object.parent );

          break;
        }

      }
      // Otherwise we're only tracking interaction with the exit sign.
      else {
        if ( window.virtual_office.selected.name == 'corkBoard' || window.virtual_office.selected.name == 'polaroid') {
          document.documentElement.style.cursor = "default";
         
          if ( intersects[ i ].object.name == "polaroid_image" ) {

            if ( window.virtual_office.hovered.uuid != intersects[ i ].object.parent.uuid ) {
              // Remove previous title.
              clearBlogWallTitle();
              // Setup current hovered polaroid title.
              setupBlogWallTitle( intersects[ i ].object.parent );
            }

            window.virtual_office.hovered = intersects[ i ].object.parent;

            document.documentElement.style.cursor = "pointer";

            polaroidHover( intersects[ i ].object.parent );

            break;
          }
          if ( intersects[ i ].object.name == "polaroid" ) {
            if ( window.virtual_office.hovered.uuid != intersects[ i ].object.uuid ) {
              // Remove previous title.
              clearBlogWallTitle();
              // Setup current hovered polaroid title.
              setupBlogWallTitle( intersects[ i ].object );
            }

            window.virtual_office.hovered = intersects[ i ].object;

            document.documentElement.style.cursor = "pointer";

            polaroidHover( intersects[ i ].object );

            break;
          }
          else {
            window.virtual_office.hovered = false;
          }
        }
        else {
          document.documentElement.style.cursor = "inherit";
          if ( !window.virtual_office.hovered ) {
            window.virtual_office.hovered = window.virtual_office.selected;
          }
        }
      }
    }
  }
  else {
    window.virtual_office.hovered = false;
  }
}

function catHover() {
  /**
   * Handle click.
   */
  if ( window.virtual_office.state.pointerDown && !window.virtual_office.moving ) {
    if ( !window.virtual_office.selected ) {
      window.virtual_office.moving = true;
      window.virtual_office.selected = window.virtual_office.scene_objects.portraits;

      let [ targetPosition, targetRotation ] = window.virtual_office.scene_objects.portraits.getViewingCoords();

      window.virtual_office.tweens.rotateCamera.to( { x: targetRotation.x, y: targetRotation.y, z: targetRotation.z }, 1000 ).start();
      window.virtual_office.tweens.moveCamera.to( targetPosition, 1000 ).onComplete( () => {
        // Show the exit sign.
        document.getElementById( 'exitSign' ).style.display = 'block';
        window.virtual_office.state.pointerDown = false;
      } ).start();

    }

  }
}

function polaroidHover( polaroid ) {
  
  /**
   * Handle click.
   */
  if ( window.virtual_office.state.mouseDown && !window.virtual_office.moving ) {
    if ( window.virtual_office.selected.name == 'corkBoard') {
      window.virtual_office.selected = polaroid;

      // Start loading the screen.
      document.getElementById( 'pageOverlay' ).src = polaroid.userData.url;
      document.title = polaroid.userData.title;

      history.pushState( {}, "", polaroid.userData.url.replace( 'iframes/', '' ) );
      stretchSelectedScreen();
    
      clearBlogWallTitle();
    }
  }

  /**
   * Handle touch.
   */
  if ( window.virtual_office.state.touching && !window.virtual_office.moving ) {
    window.virtual_office.state.touching = false;
    if ( window.virtual_office.selected.name == 'polaroid' &&  window.virtual_office.selected.uuid == polaroid.uuid ) {

      // Start loading the screen.
      document.getElementById( 'pageOverlay' ).src = polaroid.userData.url;
      document.title = polaroid.userData.title;

      history.pushState( {}, "", polaroid.userData.url.replace( 'iframes/', '' ) );
      stretchSelectedScreen();
    }

    if ( window.virtual_office.selected.name == 'corkBoard' || window.virtual_office.selected.uuid != polaroid.uuid ) {

      window.virtual_office.selected = polaroid;
    
      clearBlogWallTitle();
      // Setup current hovered polaroid title.
      setupBlogWallTitle( polaroid );
    }
  }
  
}

function blogHover() {
  /**
   * Handle click.
   */
  if ( window.virtual_office.state.pointerDown && !window.virtual_office.moving ) {
    if ( !window.virtual_office.selected ) {
      window.virtual_office.moving = true;
      window.virtual_office.selected = window.virtual_office.scene_objects.blogWall;

      let [ targetPosition, targetRotation ] = window.virtual_office.scene_objects.blogWall.getViewingCoords();

      window.virtual_office.tweens.rotateCamera.to( { x: targetRotation.x, y: targetRotation.y, z: targetRotation.z }, 1000 ).start();
      window.virtual_office.tweens.moveCamera.to( targetPosition, 1000 ).onComplete( () => {
        // Show the exit sign.
        document.getElementById( 'exitSign' ).style.display = 'block';
        window.virtual_office.state.pointerDown = false;
        document.title = 'Blog | Open Studios | Perth, Western Australia';
        history.pushState( {}, "", '/blog.html' );
      } ).start();

    }

  }
}

function screenHover( screen ) {
  /**
   * Handle click.
   */
  if ( window.virtual_office.state.pointerDown && !window.virtual_office.moving ) {
    if ( !window.virtual_office.selected ) {
      window.virtual_office.moving = true;
      window.virtual_office.selected = screen;

      let [ targetPosition, targetRotation ] = screen.webGLScreen.getViewingCoords();

      // Start loading the screen.
      document.getElementById( 'pageOverlay' ).src = window.virtual_office.selected.webGLScreen.pageUrl;
      document.title = window.virtual_office.selected.webGLScreen.pageTitle + ' | Open Studios | Perth, Western Australia';

      history.pushState( {}, "", window.virtual_office.selected.webGLScreen.pageRealUrl );

      window.virtual_office.tweens.rotateCamera.to( { x: targetRotation.x, y: targetRotation.y, z: targetRotation.z }, 1000 ).start();
      window.virtual_office.tweens.moveCamera.to( targetPosition, 1000 ).onComplete( stretchSelectedScreen ).start();

    }

  }
}

export function handleExitSign() {

  if ( ! window.virtual_office.started && window.virtual_office.selected.name == 'polaroid' ) {
    window.virtual_office.started = true;
    document.title = 'Blog | Open Studios | Perth, Western Australia';
    history.pushState( {}, "", '/blog.html' );
  
    shrinkScreenBack();
    window.virtual_office.hovered = window.virtual_office.selected;
    window.virtual_office.selected = window.virtual_office.scene_objects.blogWall;
    clearBlogWallTitle();
  }
  else {
    clearBlogWallTitle();
    window.virtual_office.started = true;
    document.title = 'Open Studios | Perth, Western Australia';
    history.pushState( {}, "", '/' );
  
    window.virtual_office.moving = true;
    var targetRotation = - ( Math.PI / 30 ) * window.virtual_office.camera.aspect;
  
    // Animate the camera resetting from any other position.
    resetReusables();
    window.virtual_office.tweens.resetCameraRotation.start();
    window.virtual_office.tweens.resetCameraPosition.onStart( shrinkScreenBack ).start();
    document.getElementById( 'exitSign' ).style.display = 'none';
    window.virtual_office.selected = false;
  }

}

/**
 * Helpers
 */

// Function to update the CSS object's size to fit the visible space
function stretchSelectedScreen() {

  document.getElementById( 'pageOverlay' ).style.display = 'block';

  document.getElementById( 'exitSign' ).style.display = 'block';

  window.virtual_office.started = false;
  window.virtual_office.state.mouseDown = false;
  window.virtual_office.state.pointerDown = false;
}

// Restore the CSS object to its original size.
function shrinkScreenBack() {

  // Reset scroll position of the iFrame
  document.getElementById( 'pageOverlay' ).contentWindow.scrollTo( 0, 0 );

  document.getElementById( 'pageOverlay' ).style.display = 'none';

  // Run this in case viewport was changed while we were in full screen mode.
  handleViewportChange();

}