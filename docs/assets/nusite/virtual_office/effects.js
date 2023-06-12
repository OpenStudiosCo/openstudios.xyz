import * as THREE from 'three';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js';

export function setupEffects( renderer, scene, camera ) {
  // Apply Unreal Bloom post-processing effect
  var renderScene = new RenderPass(scene, camera);

  var composer = new EffectComposer(renderer);
  composer.setSize(window.innerWidth, window.innerHeight);
  composer.addPass(renderScene);

  if (! window.virtual_office.fast ) {

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

    const outputPass = new OutputPass(THREE.ACESFilmicToneMapping);
    outputPass.toneMappingExposure = Math.pow(Math.PI / 3, 4.0);
    composer.addPass(outputPass);

    const ssaoPass = new SSAOPass( scene, camera, window.innerWidth, window.innerHeight );
    ssaoPass.kernelRadius = 8;
    ssaoPass.output = SSAOPass.OUTPUT.Beauty;
    composer.addPass( ssaoPass );

    var bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.15;
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.85;
    composer.addPass(bloomPass);

    const shaderPass = new ShaderPass( GammaCorrectionShader );
    composer.addPass( shaderPass );
  }

  return composer;
}
