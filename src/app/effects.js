import * as THREE from 'three';

import { EffectComposer, EffectPass, RenderPass, SelectiveBloomEffect } from "postprocessing";


// @todo: Replace with https://pmndrs.github.io/postprocessing/public/demo/#tone-mapping
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// @todo: Replace with https://pmndrs.github.io/postprocessing/public/demo/#ssao
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';

// @todo: Remove when unreal bloom is replaced, this just manages the swap
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// @todo: Replace Super Sample Anti Aliasing with https://pmndrs.github.io/postprocessing/public/demo/#antialiasing
import { SSAARenderPass } from 'three/addons/postprocessing/SSAARenderPass.js';

// Sets up the effects
export function setupEffects( ) {
  const composer = new EffectComposer(window.virtual_office.renderers.webgl);
  composer.addPass(new RenderPass(window.virtual_office.scene, window.virtual_office.camera));
  composer.addPass(new EffectPass(window.virtual_office.camera, new SelectiveBloomEffect(
    window.virtual_office.scene, window.virtual_office.camera,
    {
      intensity: 8.5,
      mipmapBlur: true,
      luminancePass: true,
      luminanceThreshold: 0.3,
      luminanceSmoothing: 0.2,
      radius : 0.75,
      resolutionScale: 1
  })));

  window.virtual_office.effects = composer;
}

export function setupEffectsOld( ) {
  // Apply Unreal Bloom post-processing effect
  var renderScene = new RenderPass(  window.virtual_office.scene, window.virtual_office.camera);

  window.virtual_office.effects.main = new EffectComposer(window.virtual_office.renderers.webgl);
  window.virtual_office.effects.main.setSize(window.innerWidth, window.innerHeight);
  window.virtual_office.effects.main.addPass(renderScene);

  window.virtual_office.renderers.webgl.shadowMap.enabled = true;
  window.virtual_office.renderers.webgl.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

  const ssaoPass = new SSAOPass( window.virtual_office.scene, window.virtual_office.camera, window.innerWidth, window.innerHeight );
  ssaoPass.kernelRadius = 20;
  ssaoPass.output = SSAOPass.OUTPUT.Beauty;
  window.virtual_office.effects.main.addPass( ssaoPass );

  const ssaaPass = new SSAARenderPass ( window.virtual_office.scene, window.virtual_office.camera );
  ssaaPass.sampleLevel = 1;
  window.virtual_office.effects.main.addPass( ssaaPass );
    
  window.virtual_office.effects.bloomLayer = new THREE.Layers();
  window.virtual_office.effects.bloomLayer.set( 1 );

  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = 0.15;
  bloomPass.strength = .85;
  bloomPass.radius = 0.85;

  window.virtual_office.effects.bloom = new EffectComposer( window.virtual_office.renderers.webgl );
  window.virtual_office.effects.bloom.setSize(window.innerWidth, window.innerHeight);
  window.virtual_office.effects.bloom.renderToScreen = false;
  window.virtual_office.effects.bloom.addPass( renderScene );
  window.virtual_office.effects.bloom.addPass( bloomPass );

  const mixPass = new ShaderPass(
    new THREE.ShaderMaterial( {
      uniforms: {
        baseTexture: { value: null },
        bloomTexture: { value: window.virtual_office.effects.bloom.renderTarget2.texture }
      },
      vertexShader: document.getElementById( 'vertexshader' ).textContent,
      fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
      defines: {}
    } ), 'baseTexture'
  );
  mixPass.needsSwap = true;

  window.virtual_office.effects.main.addPass( mixPass );

  const tonePass = new OutputPass(THREE.ACESFilmicToneMapping);
  tonePass.toneMappingExposure = Math.pow(Math.PI / 3, 4.0);
  window.virtual_office.effects.main.addPass( tonePass );

}
