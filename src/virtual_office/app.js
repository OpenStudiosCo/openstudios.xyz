import { init, animate } from 'virtual-office'

function domReady(callback) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // DOM is already ready or in the process of loading
    callback();
  } else {
    // DOMContentLoaded event listener
    document.addEventListener('DOMContentLoaded', callback);
  }
}

domReady(
  function () {
    let pane;

    // Create an object to talk to the application.
    window.virtual_office = {

      /**
       * Primary scene camera
       * 
       * @memberof THREE.Camera
       */
      camera: false,

      /**
       * Orbit Controls
       * 
       * @memberof THREE.OrbitControls
       */
      controls: false,
      /**
       * Debug mode.
       * 
       * @memberof Boolean
       */
      debug: false,

      /**
       * Effects composers and their layers.
       * 
       * @memberof Object { THREE.EffectsComposer , THREE.Layer }
       */
      effects: {
        main: false,
        bloom: false,
        bloomLayer: false,
        scaleDone: false
      },

      /**
       * Exit sign.
       * 
       * @todo: Consolidate scene rigs.
       * 
       * @memberOf function
       */
      exitSignClick: false,

      /**
       * Fast mode (bloom off, no shadows)
       * 
       * @memberof Boolean
       */
      fast: false,

      /**
       * Frames Per Second (FPS)
       * 
       * @memberof Integer
       */
      fps: 0,

      /**
       * Reusable loaders for assets.
       */
      loaders: {
        gltf: false,
        texture: false,
        stats: {
          fonts: {
            target: 5, // @todo: Check if this affects double loads, shouldn't with caching.
            loaded: 0
          },
          gtlf: {
            target: 10, // @todo: Check if this affects double loads, shouldn't with caching.
            loaded: 0
          },
          screens: {
            target: 5,
            loaded: 0
          },
          svg: {
            target: 1,
            loaded: 0
          },
          textures: {
            target: 9,
            loaded: 0
          }
        }
      },

      /**
       * Camera is being moved by tweening.
       * 
       * @memberof Boolean
       */
      moving: false,

      /**
       * Current position of the users pointer.
       * 
       * @memberof THREE.Vector2
       */
      pointer: false,

      /**
       * Raycaster that projects into the scene from the users pointer and picks up collisions for interaction.
       * 
       * @memberof THREE.Raycaster
       */
      raycaster: false,

      /**
       * Renderers that create the scene.
       * 
       * @memberof Object { THREE.Renderer , ... }
       */
      renderers: {
        webgl: false
      },

      /**
       * Settings that controls the scene.
       * 
       * @memberof Object
       */
      scene_dimensions: {
        adjusted_gap: false, // calculated value
        gap: 1.3, // depth(z axis) gap between desks
        room_depth: false, // calculated value
        scale: 11, // do not change, braeks css screen sizes
        startPosZ: - 10 // updated responsive eugene levy
      },

      /**
       * Tracked meshes and mesh groups that compose the scene.
       * 
       * @memberof Object
       */
      scene_objects: { },
      
      /**
       * Currently selected object.
       * 
       * @memberof THREE.Object3d
       */
      selected: false,

      /**
       * If the main sequence has begun.
       * 
       * @memberof Boolean
       */
      started: false,

      /**
       * All scene triggers.
       * 
       * @memberof Object
       */
      triggers: {},
      
      /**
       * All scene tweens.
       * 
       * @memberof Object
       */
      tweens: {}
    };

    
    let url = new URL(window.location.href);

    // Check if we're in debug mode.
    if (url.searchParams.has('debug')) {
      window.virtual_office.debug = true;

      // Start the UI.
      pane = debug_ui();
    }

    // Check if we're in fast mode.
    if (url.searchParams.has('fast')) {
      window.virtual_office.fast = true;
    }

    init( pane );
    requestAnimationFrame( animate );
  }
);

function debug_ui() {
  const PARAMS = {
    factor: 123,
    title: 'hello',
    color: '#ff0055',
  };
  
  const pane = new Tweakpane.Pane();
  
  pane.addInput(PARAMS, 'factor');
  pane.addInput(PARAMS, 'title');
  pane.addInput(PARAMS, 'color');

  return pane;
}


// // Expose the virtual office module to the window scope
// window.virtualOffice = { greet };
