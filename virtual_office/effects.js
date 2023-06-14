import * as THREE from 'three';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js';

let composer, bloomComposer, bloomLayer;

// Define a threshold frame rate below which effects will be disabled
const frameRateThreshold = 30; // Adjust as needed

// Store the previous frame time
let previousFrameTime = 0;

// Define the delay duration (in seconds)
const delayDuration = 3; // Adjust as needed
let delayTimer = 0; // Timer to track the delay duration

let frameRates = [];

// Dynamically scale the effects to maintain minimum FPS
export function scaleEffects( currentTime, renderer ) {

  // Calculate the time elapsed since the previous frame
  const deltaTime = (currentTime - previousFrameTime) / 1000; // Convert to seconds

  // Update previous frame time
  previousFrameTime = currentTime;

  // Calculate the current frame rate
  const currentFrameRate = 1 / deltaTime;

  delayTimer += deltaTime;
  frameRates.push( currentFrameRate );

  // Check if the delay duration has passed
  if (! window.virtual_office.fast && ( delayTimer >= delayDuration ) ) {

    let avgFrameRate = 0;

    var sum = frameRates.reduce(function (total, num) {
      return total + num;
    }, 0);
  
    avgFrameRate = sum / frameRates.length;

    // Check if the frame rate is below the threshold
    const isBelowThreshold = avgFrameRate < frameRateThreshold;

    if (isBelowThreshold) {
      console.log(avgFrameRate + " FPS too low, switching effects off");
      // Disable effects
      composer.passes.splice(0, composer.passes.length); // Remove all passes from the composer
      window.virtual_office.fast = true;
      renderer.shadowMap.enabled = false;
    }

  }

}

// Sets up the effects composer object
export function setupEffects( renderer, scene, camera ) {
  // Apply Unreal Bloom post-processing effect
  var renderScene = new RenderPass(scene, camera);

  composer = new EffectComposer(renderer);
  composer.setSize(window.innerWidth, window.innerHeight);
  composer.addPass(renderScene);

  if (! window.virtual_office.fast ) {

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

    const ssaoPass = new SSAOPass( scene, camera, window.innerWidth, window.innerHeight );
    ssaoPass.kernelRadius = 16;
    ssaoPass.output = SSAOPass.OUTPUT.Beauty;
    composer.addPass( ssaoPass );
      
    bloomLayer = new THREE.Layers();
    bloomLayer.set( 1 );

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.15;
    bloomPass.strength = .85;
    bloomPass.radius = 0.85;

    bloomComposer = new EffectComposer( renderer );
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass( renderScene );
    bloomComposer.addPass( bloomPass );

    const mixPass = new ShaderPass(
      new THREE.ShaderMaterial( {
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: bloomComposer.renderTarget2.texture }
        },
        vertexShader: document.getElementById( 'vertexshader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
        defines: {}
      } ), 'baseTexture'
    );
    mixPass.needsSwap = true;

    composer.addPass( mixPass );

    const tonePass = new OutputPass(THREE.ACESFilmicToneMapping);
    tonePass.toneMappingExposure = Math.pow(Math.PI / 3, 4.0);
    composer.addPass( tonePass );

  }

  return [ composer, bloomComposer, bloomLayer ];
}
