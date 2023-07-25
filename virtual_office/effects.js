import * as THREE from 'three';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { SSAARenderPass } from 'three/addons/postprocessing/SSAARenderPass.js';

import { startTweening } from './tweens.js';


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
  delayTimer += deltaTime;

   // Update previous frame time
  previousFrameTime = currentTime;
  // Check if fast mode is needed for this session.
  if (! window.virtual_office.fast ){

    // Check if the delay duration has passed
    if  ( delayTimer >= delayDuration ) {
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
    else {
      // Calculate the current frame rate
      const currentFrameRate = 1 / deltaTime;
      frameRates.push( currentFrameRate );
    }

  }

  if (
    ( delayTimer >= delayDuration ) &&
    window.virtual_office.started == false 
  ) {
    window.virtual_office.started = true;
    startTweening();
  }

}

// Sets up the effects composer object
export function setupEffects( renderer, scene ) {
  // Apply Unreal Bloom post-processing effect
  var renderScene = new RenderPass(scene, window.virtual_office.camera);

  composer = new EffectComposer(renderer);
  composer.setSize(window.innerWidth, window.innerHeight);
  composer.addPass(renderScene);

  if (! window.virtual_office.fast ) {

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

    const ssaoPass = new SSAOPass( scene, window.virtual_office.camera, window.innerWidth, window.innerHeight );
    ssaoPass.kernelRadius = 20;
    ssaoPass.output = SSAOPass.OUTPUT.Beauty;
    composer.addPass( ssaoPass );

    const ssaaPass = new SSAARenderPass ( scene, window.virtual_office.camera );
    ssaaPass.sampleLevel = 1;
    composer.addPass( ssaaPass );
      
    bloomLayer = new THREE.Layers();
    bloomLayer.set( 1 );

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.15;
    bloomPass.strength = .85;
    bloomPass.radius = 0.85;

    bloomComposer = new EffectComposer( renderer );
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
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
