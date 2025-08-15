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

export async function setupPortraits() {
  var group = new THREE.Group();
  group.name = "portraits";

  let portraits = [
    '/assets/textures/Jake Portrait.jpg',
    '/assets/textures/Pete Portrait.jpg',
    '/assets/textures/Sam Portrait.jpg',
  ];

  let names = [
    'Jake the Dog',
    'Peter Frampton',
    'Samantha Carter',
  ]

  await portraits.forEach( async (portraitUrl, i ) => {

    var material = new THREE.MeshPhongMaterial();
    await window.virtual_office.loaders.texture.load( portraitUrl, async ( texture ) => {
      material.needsUpdate = true;
      material.map = texture;
    } );
    var geometry = new THREE.PlaneGeometry( 6, 6 );
    var portraitMesh = new THREE.Mesh( geometry, brightenMaterial( material, ( window.virtual_office.fast ? 12 : 3  ) ) );
    portraitMesh.name = 'portrait';

    let woodUrl = '/assets/textures/wood.jpg';

    var borderMaterial = new THREE.MeshPhongMaterial();
    await window.virtual_office.loaders.texture.load( woodUrl, async ( texture ) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

      texture.repeat.set( 4, 2.25 );
      borderMaterial.needsUpdate = true;
      borderMaterial.map = texture;
      borderMaterial = brightenMaterial( borderMaterial, window.virtual_office.fast ? 2.5 : 0.65 );
    } );

    // Thickness of the border
    var borderThickness = 0.4;

    // Border geometries (left, right, top, bottom)
    var leftBorderGeometry = new THREE.BoxGeometry( borderThickness, 6, borderThickness );
    var rightBorderGeometry = new THREE.BoxGeometry( borderThickness, 6, borderThickness );
    var topBorderGeometry = new THREE.BoxGeometry( 6 + 2 * borderThickness, borderThickness, borderThickness );
    var bottomBorderGeometry = new THREE.BoxGeometry( 6 + 2 * borderThickness, borderThickness, borderThickness );

    // Create border meshes
    var leftBorder = new THREE.Mesh( leftBorderGeometry, borderMaterial );
    var rightBorder = new THREE.Mesh( rightBorderGeometry, borderMaterial );
    var topBorder = new THREE.Mesh( topBorderGeometry, borderMaterial );
    var bottomBorder = new THREE.Mesh( bottomBorderGeometry, borderMaterial );

    // Position borders
    leftBorder.position.set( -3 - borderThickness / 2, 0, 0.01 );  // Left of the corkboard
    rightBorder.position.set( 3 + borderThickness / 2, 0, 0.01 );  // Right of the corkboard
    topBorder.position.set( 0, 3 + borderThickness / 2, 0.01 );  // Above the corkboard
    bottomBorder.position.set( 0, -3 - borderThickness / 2, 0.01 );  // Below the corkboard

    portraitMesh.add( leftBorder );
    portraitMesh.add( rightBorder );
    portraitMesh.add( topBorder );
    portraitMesh.add( bottomBorder );

    updatePortraitLayout( portraitMesh, i );

    // Photo Label
    const loader = new FontLoader();
    await loader.load( '/assets/fonts/VeraMono.json', async ( font ) => {
        const textGeometry = new TextGeometry( names[i], {
            font: font,
            size: 2.5,
            depth: 0.2,
        } );

        portraitMesh.position.z = 1;

        // Create the emissive material for the text
        var textMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x00EEff, emissiveIntensity: 0.5 } );

        // Create the label mesh
        var signMesh = new THREE.Mesh( textGeometry, textMaterial );
        signMesh.layers.set( 11 );

        signMesh.name = "portrait_label";
        signMesh.scale.setScalar(0.2);

        let width = getMeshWidth( signMesh );
        signMesh.position.x = -width * 0.1;
        signMesh.position.y = -4.5;

        portraitMesh.add( signMesh );
        window.test= signMesh;
        window.test2= portraitMesh;
        window.test3=width;
    } );

    group.add( portraitMesh );
  }); 

  group.rotation.y = Math.PI / 2;
  group.position.x = -39.9;
  group.position.y = 12;
  group.position.z = - 15 + ( ( window.virtual_office.room_depth / 8 ) * 2.5 );

  group.getViewingCoords = function () {
    let tempMesh = new THREE.Object3D();
    tempMesh.scale.copy( this.scale );
    tempMesh.position.copy( this.position );

    var targetRotation = this.rotation.clone();

    // Field of view calculation (vertical and horizontal)
    const fovVertical = window.virtual_office.camera.fov * ( Math.PI / 180 );
    const fovHorizontal = 2 * Math.atan( Math.tan( fovVertical / 2 ) * window.virtual_office.camera.aspect );

    // Distance calculations based on aspect ratio and screen size
    const aspectRatio = window.virtual_office.camera.aspect;
    const distanceHorizontal = window.innerWidth / ( 2 * Math.tan( fovHorizontal / 2 ) );

    // Adjust distance factor based on aspect ratio
    let distanceFactor = 0.055;  // Increase factor slightly for very wide screens
    distanceFactor = aspectRatio > 1.8 ? 0.05 : distanceFactor;
    distanceFactor = aspectRatio > 2.5 ? 0.055 : distanceFactor;
    distanceFactor = aspectRatio <= 0.88 ? 0.065 : distanceFactor;
    distanceFactor = aspectRatio < 0.6 ? 0.08 : distanceFactor;
    distanceFactor = aspectRatio < 0.5 ? 0.065 : distanceFactor;

    const diffZ = distanceHorizontal * distanceFactor;

    // Determine direction (room side) and adjust x-axis translation
    const roomSide = tempMesh.position.x > 0 ? -1 : 1;
    const distanceX = roomSide * diffZ / 1.4;

    // Apply translation
    tempMesh.translateX( distanceX );

    tempMesh.position.x = Math.min( tempMesh.position.x, 15 );

    tempMesh.position.y = window.virtual_office.camera.aspect >= 0.88 ? 12 : 14.5;

    return [ tempMesh.position, targetRotation ];
  };

  // Blog Neon sign
  await createNeonSign( 'the pets', async ( signMesh ) => {
    // Position and rotate the sign
    signMesh.position.set( -6, window.virtual_office.camera.aspect >= 0.88 ? 3 : 15, 0.1 ); // Example position for the sign
    signMesh.name = "pet_sign";
    window.virtual_office.scene_objects.pet_sign = signMesh;
    //signMesh.layers.set(11);
    group.add( signMesh );
  } );

  return group;
}

export async function updatePortraitLayout( portrait, i ) {
  // Use horizontal layout 
  if ( window.virtual_office.camera.aspect >= 0.88 ) {
    portrait.position.y = -2.5;
    portrait.position.x = -9 + i * 9;
  }
  else {
    portrait.position.y = -9 + i * 9;
    portrait.position.x = 0;
  }
}
