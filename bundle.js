(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // src/virtual_office/app.js
  var import_virtual_office = __require("./src/virtual_office/main.js");
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
     * Initialise.
     */
    init: import_virtual_office.init,
    /**
     * Reusable loaders for assets.
     */
    loaders: {
      gltf: false,
      texture: false,
      stats: {
        fonts: {
          target: 5,
          // @todo: Check if this affects double loads, shouldn't with caching.
          loaded: 0
        },
        gtlf: {
          target: 10,
          // @todo: Check if this affects double loads, shouldn't with caching.
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
    settings: {
      adjusted_gap: false,
      // calculated value
      gap: 1.3,
      // depth(z axis) gap between desks
      light_intensity: {
        fast: {
          desk: {
            normal: 0.015,
            active: 0.05
          }
        },
        highP: {
          desk: {
            normal: 0.015,
            active: 0.035
          }
        }
      },
      room_depth: false,
      // calculated value
      scale: 11,
      // do not change, braeks css screen sizes
      startPosZ: -10
      // updated responsive eugene levy
    },
    /**
     * Tracked meshes and mesh groups that compose the scene.
     * 
     * @memberof Object
     */
    scene_objects: {},
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
})();
