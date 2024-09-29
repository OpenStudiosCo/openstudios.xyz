import * as THREE from 'three';

import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import { getMeshWidth } from '../helpers.js';
import { brightenMaterial, createNeonSign } from '../furniture.js';

export async function setupCat() {
    var group = new THREE.Group();
    group.name = "catContainer";
  
    await window.virtual_office.loaders.gtlf.load( '/assets/models/Cat Figurine.glb', async function ( glb ) {
      let object = glb.scene.children[ 0 ];
  
      let amount = window.virtual_office.fast ? 3 : 1.5;
  
      object.traverse( function ( child ) {
  
        if ( child.isMesh ) {
  
          child.castShadow = true;
  
          child.original_material = child.material.clone();
  
          brightenMaterial( child.material, amount );
  
        }
  
      } );

      object.name = "cat";

      object.material.color.r = object.material.color.g = object.material.color.b = 50;
      object.material.emissive = new THREE.Color( 0xFFFFFF );
      object.material.emissiveIntensity = 0;
      object.material.metalness = 1;
      object.material.roughness = 0;
      group.add( object );
      window.virtual_office.loaders.stats.gtlf.loaded++;
    } );

    group.scale.setScalar( 13 );

    group.position.y = -5;
    group.position.z = -10;

    return group;
}
