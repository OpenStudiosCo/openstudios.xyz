/**
 * Accessibility
 *
 * Keyboard menu, zoom and pan for the virtual office.
 * OrbitControls stay in debug mode so they don't fight the scripted camera.
 */

const MIN_ZOOM = 1;
const MAX_ZOOM = 2.5;
const PAN_KEY_STEP = 0.18;

let officeAccessReady = false;
let announceTimer = 0;
let pinchDistance = 0;
let pinchCenter = null;
let menuToggleCloses = false;
let sceneZoom = 1;
let panX = 0;
let panY = 0;
let drag = null;
let dragToken = 0;
let touchPan = null;

export function setupOfficeAccess() {
  const nav = document.getElementById( 'office-nav' );
  const camera = window.virtual_office && window.virtual_office.camera;

  if ( officeAccessReady || !nav || !camera ) {
    return;
  }

  officeAccessReady = true;
  nav.hidden = false;

  const toggle = document.getElementById( 'office-menu-toggle' );
  if ( toggle ) {
    toggle.hidden = false;
    toggle.addEventListener( 'pointerdown', () => {
      menuToggleCloses = officeMenuIsOpen();
    } );
    toggle.addEventListener( 'click', ( event ) => {
      const closes = event.detail == 0 ? officeMenuIsOpen() : menuToggleCloses;
      if ( closes ) {
        closeOfficeMenu();
      }
      else {
        openOfficeMenu();
      }
    } );
  }

  nav.addEventListener( 'focusin', () => {
    setMenuExpanded( true );
  } );
  nav.addEventListener( 'focusout', onMenuFocusOut );

  labelSceneCanvas();
  nav.addEventListener( 'click', onOfficeClick );

  const zoomSlider = document.getElementById( 'office-zoom' );
  if ( zoomSlider ) {
    zoomSlider.addEventListener( 'input', () => {
      setSceneZoom( Number( zoomSlider.value ) / 100, { fromSlider: true } );
    } );
  }

  const canvas = document.querySelector( '#webgl canvas' );
  const viewport = canvas || document.getElementById( 'webgl' );
  if ( viewport ) {
    viewport.style.touchAction = 'none';
    viewport.addEventListener( 'wheel', onWheel, { passive: false } );
    viewport.addEventListener( 'pointerdown', onViewportPointerDown );
    viewport.addEventListener( 'pointermove', onViewportPointerMove );
    viewport.addEventListener( 'pointerup', onViewportPointerUp );
    viewport.addEventListener( 'pointercancel', onViewportPointerUp );
    viewport.addEventListener( 'touchstart', onTouchStart, { passive: false } );
    viewport.addEventListener( 'touchmove', onTouchMove, { passive: false } );
    viewport.addEventListener( 'touchend', onTouchEnd );
    viewport.addEventListener( 'touchcancel', onTouchEnd );
  }

  window.addEventListener( 'keydown', onKeyDown );
  window.addEventListener( 'resize', applySceneFrame );
  document.addEventListener( 'pointerdown', onPointerDownOutsideMenu );
  document.addEventListener( 'office-view-changed', onOfficeViewChanged );
  syncOfficeNav();
}

function labelSceneCanvas() {
  const canvas = document.querySelector( '#webgl canvas' );
  if ( !canvas ) {
    return;
  }

  canvas.setAttribute( 'role', 'img' );
  canvas.setAttribute( 'aria-label', 'Three-dimensional view of the Open Studios office. Open the Virtual office menu with the Menu button or the M key. Pinch to zoom. Once zoomed in, drag with one finger or use the arrow keys to pan.' );
  canvas.tabIndex = -1;
}

function onOfficeClick( event ) {
  const button = event.target.closest( 'button[data-office]' );
  if ( !button || button.disabled ) {
    return;
  }

  window.virtual_office.keyboardActivation = event.detail == 0;
  const action = button.dataset.office;
  let opened = false;

  if ( action == 'back' || action == 'post' ) {
    if ( action == 'back' ) {
      window.virtual_office.handleExitSign();
      syncOfficeNav();
    }
    return;
  }

  if ( action == 'blog' ) {
    opened = window.virtual_office.activateBlog();
  }
  else if ( action == 'portraits' ) {
    opened = window.virtual_office.activatePortraits();
  }
  else {
    opened = window.virtual_office.activateScreen( findScreenHost( action ) );
  }

  if ( opened ) {
    syncOfficeNav();
  }
}

function findScreenHost( slug ) {
  const objects = window.virtual_office.scene_objects || {};
  const hosts = [];

  if ( objects.wallGroup && objects.wallGroup.webGLScreen ) {
    hosts.push( objects.wallGroup );
  }

  if ( objects.deskGroup ) {
    objects.deskGroup.children.forEach( ( child ) => {
      if ( child.webGLScreen ) {
        hosts.push( child );
      }
    } );
  }

  return hosts.find( ( host ) => host.webGLScreen.settings && host.webGLScreen.settings.slug == slug ) || null;
}

function syncOfficeNav() {
  const nav = document.getElementById( 'office-nav' );
  if ( !nav || !window.virtual_office ) {
    return;
  }

  ensurePostButtons();

  const selected = window.virtual_office.selected;
  const moving = !!window.virtual_office.moving;
  const current = currentTarget( selected );
  const inBlog = current == 'blog';

  nav.querySelectorAll( 'button[data-office]' ).forEach( ( button ) => {
    const action = button.dataset.office;

    if ( action == 'back' ) {
      button.hidden = !selected;
      button.disabled = moving;
      if ( button.parentElement ) {
        button.parentElement.hidden = !selected;
      }
      return;
    }

    if ( action == 'post' ) {
      button.disabled = moving || !inBlog;
      return;
    }

    button.disabled = moving || !!selected;
    if ( action == current ) {
      button.setAttribute( 'aria-current', 'true' );
    }
    else {
      button.removeAttribute( 'aria-current' );
    }
  } );

  const posts = document.getElementById( 'office-posts-wrap' );
  if ( posts ) {
    posts.hidden = !inBlog;
  }
}

function currentTarget( selected ) {
  if ( !selected ) {
    return '';
  }

  if ( selected.webGLScreen && selected.webGLScreen.settings ) {
    return selected.webGLScreen.settings.slug;
  }

  if ( selected.name == 'corkBoard' || selected.name == 'polaroid' ) {
    return 'blog';
  }

  if ( selected.name == 'portraits' ) {
    return 'portraits';
  }

  return '';
}

function ensurePostButtons() {
  const list = document.getElementById( 'office-posts' );
  const polaroids = window.virtual_office.scene_objects && window.virtual_office.scene_objects.polaroids;

  if ( !list || list.childElementCount > 0 || !polaroids || !polaroids.length ) {
    return;
  }

  polaroids.forEach( ( polaroid ) => {
    const item = document.createElement( 'li' );
    const button = document.createElement( 'button' );
    button.type = 'button';
    button.dataset.office = 'post';
    button.textContent = String( polaroid.userData.title || 'Blog post' ).replace( /\s*\n\s*/g, ' ' );
    button.addEventListener( 'click', ( event ) => {
      window.virtual_office.keyboardActivation = event.detail == 0;
      if ( window.virtual_office.activatePolaroid( polaroid ) ) {
        syncOfficeNav();
      }
    } );
    item.append( button );
    list.append( item );
  } );
}

function onOfficeViewChanged() {
  if ( window.virtual_office.moving && ( panX != 0 || panY != 0 ) ) {
    panX = 0;
    panY = 0;
    applySceneFrame();
  }

  syncOfficeNav();
}

function onWheel( event ) {
  if ( event.ctrlKey || event.metaKey ) {
    return;
  }

  if ( controlsEnabled() ) {
    return;
  }

  event.preventDefault();
  const delta = Math.max( -2, Math.min( 2, -event.deltaY / 100 ) );
  setSceneZoom( sceneZoom * ( 1 + delta * 0.12 ) );
}

function onViewportPointerDown( event ) {
  if ( event.pointerType == 'touch' || sceneZoom <= 1 || controlsEnabled() || event.button != 0 ) {
    return;
  }

  dragToken += 1;
  drag = {
    id: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    pointerType: event.pointerType,
    token: dragToken,
    moved: false
  };

  window.setTimeout( () => {
    if ( !drag || drag.moved || drag.id != event.pointerId ) {
      return;
    }

    holdSceneClick( false );
  }, 0 );
}

function onViewportPointerMove( event ) {
  if ( !drag || event.pointerId != drag.id ) {
    return;
  }

  const dx = event.clientX - drag.x;
  const dy = event.clientY - drag.y;
  if ( !drag.moved ) {
    if ( Math.hypot( dx, dy ) < 8 ) {
      return;
    }

    drag.moved = true;
    holdSceneClick( false );
    setPanCursor( true );
  }

  panByPixels( dx, dy );
  drag.x = event.clientX;
  drag.y = event.clientY;
}

function onViewportPointerUp( event ) {
  if ( !drag || event.pointerId != drag.id ) {
    return;
  }

  const moved = drag.moved;
  const pointerType = drag.pointerType;
  const token = drag.token;
  drag = null;
  setPanCursor( false );
  if ( moved ) {
    announcePan();
    return;
  }

  // mouseup clears the press before the office reads it. Put it back for one frame.
  window.requestAnimationFrame( () => {
    if ( token != dragToken ) {
      return;
    }

    holdSceneClick( true, pointerType );
    window.requestAnimationFrame( () => {
      if ( token == dragToken ) {
        holdSceneClick( false );
      }
    } );
  } );
}

function holdSceneClick( active, pointerType ) {
  const state = window.virtual_office.state;
  if ( !state ) {
    return;
  }

  state.pointerDown = active;
  if ( !active ) {
    state.mouseDown = false;
    state.touching = false;
    return;
  }

  if ( pointerType == 'touch' ) {
    state.touching = true;
  }
  else {
    state.mouseDown = true;
  }
}

function onMenuFocusOut( event ) {
  const nav = document.getElementById( 'office-nav' );
  const toggle = document.getElementById( 'office-menu-toggle' );
  if ( !nav || nav.contains( event.relatedTarget ) ) {
    return;
  }

  if ( toggle && event.relatedTarget == toggle ) {
    return;
  }

  nav.classList.remove( 'is-open' );
  setMenuExpanded( false );
}

function onPointerDownOutsideMenu( event ) {
  const nav = document.getElementById( 'office-nav' );
  const toggle = document.getElementById( 'office-menu-toggle' );
  if ( !nav || !nav.classList.contains( 'is-open' ) ) {
    return;
  }

  if ( nav.contains( event.target ) || ( toggle && toggle.contains( event.target ) ) ) {
    return;
  }

  nav.classList.remove( 'is-open' );
  setMenuExpanded( false );
  if ( toggle && nav.contains( document.activeElement ) ) {
    toggle.focus();
  }
}

function officeMenuIsOpen() {
  const nav = document.getElementById( 'office-nav' );
  return !!nav && ( nav.classList.contains( 'is-open' ) || nav.matches( ':focus-within' ) );
}

function setMenuExpanded( expanded ) {
  const toggle = document.getElementById( 'office-menu-toggle' );
  if ( toggle ) {
    toggle.setAttribute( 'aria-expanded', expanded ? 'true' : 'false' );
  }
}

function openOfficeMenu() {
  const nav = document.getElementById( 'office-nav' );
  if ( !nav ) {
    return;
  }

  syncOfficeNav();
  nav.classList.add( 'is-open' );
  setMenuExpanded( true );

  const first = nav.querySelector( 'button:not([disabled]):not([hidden])' ) || document.getElementById( 'office-zoom' );
  if ( first ) {
    first.focus();
  }
}

function closeOfficeMenu() {
  const nav = document.getElementById( 'office-nav' );
  const toggle = document.getElementById( 'office-menu-toggle' );
  if ( nav ) {
    nav.classList.remove( 'is-open' );
  }

  setMenuExpanded( false );
  if ( toggle && !toggle.hidden ) {
    toggle.focus();
  }
}

function onKeyDown( event ) {
  if ( !officeAccessReady || event.ctrlKey || event.metaKey || event.altKey ) {
    return;
  }

  const target = event.target;
  const tag = target && target.tagName;
  const typing = tag == 'TEXTAREA' || ( target && target.isContentEditable ) || ( tag == 'INPUT' && target.type != 'range' );
  if ( typing ) {
    return;
  }

  if ( event.key == 'm' || event.key == 'M' ) {
    event.preventDefault();
    if ( officeMenuIsOpen() ) {
      closeOfficeMenu();
    }
    else {
      openOfficeMenu();
    }
    return;
  }

  if ( event.key == 'Escape' && officeMenuIsOpen() ) {
    event.preventDefault();
    closeOfficeMenu();
    return;
  }

  if ( tag == 'INPUT' ) {
    return;
  }

  if ( event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'ArrowUp' || event.key == 'ArrowDown' ) {
    if ( sceneZoom <= 1 || officeMenuIsOpen() ) {
      return;
    }

    event.preventDefault();
    if ( event.key == 'ArrowLeft' ) {
      panX -= PAN_KEY_STEP;
    }
    else if ( event.key == 'ArrowRight' ) {
      panX += PAN_KEY_STEP;
    }
    else if ( event.key == 'ArrowUp' ) {
      panY += PAN_KEY_STEP;
    }
    else {
      panY -= PAN_KEY_STEP;
    }

    applySceneFrame();
    announcePan();
    return;
  }

  if ( event.key == '+' || event.key == '=' ) {
    event.preventDefault();
    setSceneZoom( sceneZoom * 1.2 );
  }
  else if ( event.key == '-' || event.key == '_' ) {
    event.preventDefault();
    setSceneZoom( sceneZoom / 1.2 );
  }
}

function onTouchStart( event ) {
  if ( controlsEnabled() ) {
    return;
  }

  if ( event.touches.length >= 2 ) {
    drag = null;
    touchPan = null;
    holdSceneClick( false );
    pinchDistance = touchDistance( event.touches );
    pinchCenter = touchCenter( event.touches );
    event.preventDefault();
    return;
  }

  if ( event.touches.length != 1 || sceneZoom <= 1 ) {
    return;
  }

  dragToken += 1;
  touchPan = {
    x: event.touches[ 0 ].clientX,
    y: event.touches[ 0 ].clientY,
    token: dragToken,
    moved: false,
    dragged: false
  };

  window.setTimeout( () => {
    if ( !touchPan || touchPan.moved || touchPan.token != dragToken ) {
      return;
    }

    holdSceneClick( false );
  }, 0 );
}

function onTouchMove( event ) {
  if ( controlsEnabled() ) {
    return;
  }

  if ( event.touches.length >= 2 && pinchDistance && pinchCenter ) {
    event.preventDefault();
    const next = touchDistance( event.touches );
    const center = touchCenter( event.touches );
    const dx = center.x - pinchCenter.x;
    const dy = center.y - pinchCenter.y;
    pinchCenter = center;
    setSceneZoom( sceneZoom * ( next / pinchDistance ) );
    pinchDistance = next;
    panByPixels( dx, dy );
    return;
  }

  if ( event.touches.length != 1 || !touchPan || sceneZoom <= 1 ) {
    return;
  }

  const dx = event.touches[ 0 ].clientX - touchPan.x;
  const dy = event.touches[ 0 ].clientY - touchPan.y;
  if ( !touchPan.moved ) {
    if ( Math.hypot( dx, dy ) < 8 ) {
      return;
    }

    touchPan.moved = true;
    holdSceneClick( false );
  }

  event.preventDefault();
  touchPan.dragged = true;
  panByPixels( dx, dy );
  touchPan.x = event.touches[ 0 ].clientX;
  touchPan.y = event.touches[ 0 ].clientY;
}

function onTouchEnd( event ) {
  if ( event.touches.length >= 2 ) {
    pinchDistance = touchDistance( event.touches );
    pinchCenter = touchCenter( event.touches );
    return;
  }

  pinchDistance = 0;
  pinchCenter = null;

  if ( event.touches.length == 1 && sceneZoom > 1 ) {
    dragToken += 1;
    touchPan = {
      x: event.touches[ 0 ].clientX,
      y: event.touches[ 0 ].clientY,
      token: dragToken,
      moved: true,
      dragged: false
    };
    return;
  }

  if ( !touchPan ) {
    return;
  }

  const moved = touchPan.moved;
  const dragged = touchPan.dragged;
  const token = touchPan.token;
  touchPan = null;
  if ( moved ) {
    if ( dragged ) {
      announcePan();
    }
    return;
  }

  window.requestAnimationFrame( () => {
    if ( token != dragToken ) {
      return;
    }

    holdSceneClick( true, 'touch' );
    window.requestAnimationFrame( () => {
      if ( token == dragToken ) {
        holdSceneClick( false );
      }
    } );
  } );
}

function touchDistance( touches ) {
  const dx = touches[ 0 ].clientX - touches[ 1 ].clientX;
  const dy = touches[ 0 ].clientY - touches[ 1 ].clientY;
  return Math.hypot( dx, dy );
}

function touchCenter( touches ) {
  return {
    x: ( touches[ 0 ].clientX + touches[ 1 ].clientX ) / 2,
    y: ( touches[ 0 ].clientY + touches[ 1 ].clientY ) / 2
  };
}

function controlsEnabled() {
  return !!( window.virtual_office.controls && window.virtual_office.controls.enabled );
}

function panByPixels( dx, dy ) {
  if ( sceneZoom <= 1 ) {
    return;
  }

  const spanX = window.innerWidth * ( sceneZoom - 1 );
  const spanY = window.innerHeight * ( sceneZoom - 1 );
  if ( spanX <= 0 || spanY <= 0 ) {
    return;
  }

  panX += ( -2 * dx ) / spanX;
  panY += ( 2 * dy ) / spanY;
  applySceneFrame();
}

function applySceneFrame() {
  const camera = window.virtual_office.camera;
  if ( !camera ) {
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.zoom = 1;

  if ( sceneZoom <= 1 || width <= 0 || height <= 0 ) {
    sceneZoom = 1;
    panX = 0;
    panY = 0;
    camera.clearViewOffset();
    setPanCursor( false );
    return;
  }

  panX = Math.min( 1, Math.max( -1, panX ) );
  panY = Math.min( 1, Math.max( -1, panY ) );

  const fullWidth = width * sceneZoom;
  const fullHeight = height * sceneZoom;
  const offsetX = ( ( fullWidth - width ) / 2 ) * ( 1 + panX );
  const offsetY = ( ( fullHeight - height ) / 2 ) * ( 1 - panY );
  camera.setViewOffset( fullWidth, fullHeight, offsetX, offsetY, width, height );

  // Don't put the grab cursor back while a drag is in progress.
  if ( !( drag && drag.moved ) && !( touchPan && touchPan.moved ) ) {
    setPanCursor( false );
  }
}

function setPanCursor( grabbing ) {
  const canvas = document.querySelector( '#webgl canvas' );
  if ( !canvas ) {
    return;
  }

  if ( sceneZoom <= 1 ) {
    canvas.style.cursor = '';
    return;
  }

  canvas.style.cursor = grabbing ? 'grabbing' : 'grab';
}

function setSceneZoom( value, options ) {
  const camera = window.virtual_office.camera;
  if ( !camera ) {
    return;
  }

  sceneZoom = Math.min( MAX_ZOOM, Math.max( MIN_ZOOM, value ) );
  applySceneFrame();

  const percent = Math.round( sceneZoom * 100 );
  const slider = document.getElementById( 'office-zoom' );
  if ( slider ) {
    slider.value = String( percent );
    slider.setAttribute( 'aria-valuenow', String( percent ) );
    slider.setAttribute( 'aria-valuetext', percent + ' percent' );
  }

  if ( !options || !options.fromSlider ) {
    announceZoom( percent );
  }
}

function announceZoom( percent ) {
  announceScene( 'Scene zoom ' + percent + ' percent' );
}

function announcePan() {
  const parts = [];
  if ( panY > 0.05 ) {
    parts.push( 'up' );
  }
  else if ( panY < -0.05 ) {
    parts.push( 'down' );
  }

  if ( panX > 0.05 ) {
    parts.push( 'right' );
  }
  else if ( panX < -0.05 ) {
    parts.push( 'left' );
  }

  announceScene( parts.length ? 'Scene shifted ' + parts.join( ' and ' ) : 'Scene centered' );
}

function announceScene( text ) {
  const status = document.getElementById( 'office-status' );
  if ( !status ) {
    return;
  }

  window.clearTimeout( announceTimer );
  announceTimer = window.setTimeout( () => {
    status.textContent = text;
  }, 200 );
}
