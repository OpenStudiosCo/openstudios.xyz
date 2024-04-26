import * as THREE from 'three';

import { HalfFloatType } from "three";


import {
  // Core stuff
  BlendFunction,
  EffectComposer,
  EffectPass,
  RenderPass,

  // Bloom effect
  SelectiveBloomEffect,

  // Anti aliasing
  SMAAEffect,
	SMAAPreset,
	EdgeDetectionMode,
  
  // SSAO
  SSAOEffect,
  DepthDownsamplingPass,
  NormalPass,
  TextureEffect,

  // Tone Mapping
  ToneMappingEffect,
	ToneMappingMode
} from "postprocessing";


// @todo: Replace with https://pmndrs.github.io/postprocessing/public/demo/#tone-mapping
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Sets up the effects
export function setupEffects( ) {
  const composer = new EffectComposer(window.virtual_office.renderers.webgl, {
    frameBufferType: HalfFloatType
  });
  composer.addPass(new RenderPass(window.virtual_office.scene, window.virtual_office.camera));

  // ssao
  const normalPass = new NormalPass(window.virtual_office.scene, window.virtual_office.camera);
  const depthDownsamplingPass = new DepthDownsamplingPass({
    normalBuffer: normalPass.texture,
    resolutionScale: 0.5
  });

  const capabilities = composer.getRenderer().capabilities;

  const normalDepthBuffer = capabilities.isWebGL2 ?
    depthDownsamplingPass.texture : null;

  const ssao = new SSAOEffect(window.virtual_office.camera, normalPass.texture, {
    blendFunction: BlendFunction.MULTIPLY,
			distanceScaling: true,
			depthAwareUpsampling: true,
			normalDepthBuffer,
			samples: 9,
			rings: 7,
			distanceThreshold: 0.2,	// Render up to a distance of ~20 world units
			distanceFalloff: 0.0025,	// with an additional ~2.5 units of falloff.
			rangeThreshold: 0.0003,		// Occlusion proximity of ~0.3 world units
			rangeFalloff: 0.0001,			// with ~0.1 units of falloff.
			luminanceInfluence: 0.7,
			minRadiusScale: 0.33,
			radius: 0.1,
			intensity: 1.33,
			bias: 0.025,
			fade: 0.01,
			color: null,
			resolutionScale: 0.5
  });

  // smaa
  const smaa = new SMAAEffect({
    blendFunction: EdgeDetectionMode.DEPTH,
    preset: SMAAPreset.HIGH
  } );

  // bloom
  const bloom = new SelectiveBloomEffect(
    window.virtual_office.scene, window.virtual_office.camera,
    {
      blendFunction: BlendFunction.ADD,
      intensity: 8.5,
      mipmapBlur: true,
      luminanceThreshold: 0.15,
      luminanceSmoothing: 0.2,
      radius : 0.85,
      resolutionScale: 1
  });

  bloom.inverted = true;

  const textureEffect = new TextureEffect({
    blendFunction: BlendFunction.SKIP,
    texture: depthDownsamplingPass.texture
  });

  const toneMappingEffect = new ToneMappingEffect({
    mode: ToneMappingMode.ACES_FILMIC,
    resolution: 256,
    whitePoint: 16.0,
    middleGrey: 0.6,
    minLuminance: 0.01,
    averageLuminance: 0.01,
    adaptationRate: 1.0
  });

  composer.addPass(normalPass);

  if(capabilities.isWebGL2) {

    composer.addPass(depthDownsamplingPass);

  } else {

    console.log("WebGL 2 not supported, falling back to naive depth downsampling");

  }
  composer.addPass(new EffectPass(window.virtual_office.camera, smaa, ssao, textureEffect, bloom, toneMappingEffect));
  
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
