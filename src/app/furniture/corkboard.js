import * as THREE from 'three';

import { brightenMaterial, createNeonSign } from '../furniture.js';

/**
 * Create a bulletin board with polaroids.
 */
export async function setupCorkBoard() {

    let textureUrl = '/assets/textures/cork-1024x1024.jpg';

    var material = new THREE.MeshPhongMaterial();
    await window.virtual_office.loaders.texture.load( textureUrl, async ( texture ) => {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        texture.repeat.set( 4, 2.25 );

        material.needsUpdate = true;
        material.map = texture;
        material = brightenMaterial( material, 0.85 );
    } );

    var geometry = new THREE.PlaneGeometry( 16, 9 );
    var corkBoard = new THREE.Mesh( geometry, brightenMaterial( material, 1 ) );


    let woodUrl = '/assets/textures/wood.jpg';

    var borderMaterial = new THREE.MeshPhongMaterial();
    await window.virtual_office.loaders.texture.load( woodUrl, async ( texture ) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        texture.repeat.set( 4, 2.25 );
        borderMaterial.needsUpdate = true;
        borderMaterial.map = texture;
        borderMaterial = brightenMaterial( borderMaterial, 0.65 );
    } );

    // Thickness of the border
    var borderThickness = 0.2;

    // Border geometries (left, right, top, bottom)
    var leftBorderGeometry = new THREE.BoxGeometry( borderThickness, 9, borderThickness );
    var rightBorderGeometry = new THREE.BoxGeometry( borderThickness, 9, borderThickness );
    var topBorderGeometry = new THREE.BoxGeometry( 16 + 2 * borderThickness, borderThickness, borderThickness );
    var bottomBorderGeometry = new THREE.BoxGeometry( 16 + 2 * borderThickness, borderThickness, borderThickness );

    // Create border meshes
    var leftBorder = new THREE.Mesh( leftBorderGeometry, borderMaterial );
    var rightBorder = new THREE.Mesh( rightBorderGeometry, borderMaterial );
    var topBorder = new THREE.Mesh( topBorderGeometry, borderMaterial );
    var bottomBorder = new THREE.Mesh( bottomBorderGeometry, borderMaterial );

    // Position borders
    leftBorder.position.set( -8 - borderThickness / 2, 0, 0.01 );  // Left of the corkboard
    rightBorder.position.set( 8 + borderThickness / 2, 0, 0.01 );  // Right of the corkboard
    topBorder.position.set( 0, 4.5 + borderThickness / 2, 0.01 );  // Above the corkboard
    bottomBorder.position.set( 0, -4.5 - borderThickness / 2, 0.01 );  // Below the corkboard

    corkBoard.add( leftBorder );
    corkBoard.add( rightBorder );
    corkBoard.add( topBorder );
    corkBoard.add( bottomBorder );

    //mesh.scale.copy( domObject.scale );
    corkBoard.castShadow = false;
    corkBoard.receiveShadow = true;

    corkBoard.name = "corkBoard";
    // window.virtual_office.loaders.stats.screens.loaded++;

    // window.virtual_office.screens[ i ].mesh = corkBoard;
    // corkBoard.settings = window.virtual_office.screens[ i ];

    //corkBoard.rotateY( Math.PI * 90 );
    corkBoard.position.z = - 15 - ( ( window.virtual_office.room_depth / 8 ) * 1.5 );
    corkBoard.position.x = -39.5;
    corkBoard.position.y = 12;
    corkBoard.rotation.y = Math.PI / 2;

    // Blog Neon sign
    await createNeonSign( 'blog', async ( signMesh ) => {
        // Position and rotate the sign
        signMesh.position.set( -3, 6.5, 0.1 ); // Example position for the sign
        signMesh.name = "blog_sign";
        window.virtual_office.scene_objects.blog_sign = signMesh;
        //signMesh.layers.set(11);
        corkBoard.add( signMesh );
    } );

    corkBoard.getViewingCoords = function () {
        let tempMesh = new THREE.Object3D();
        tempMesh.scale.copy( this.scale );
        tempMesh.position.copy( this.position );

        var targetRotation = this.rotation.clone();

        const fovVertical = window.virtual_office.camera.fov * ( Math.PI / 180 );
        const fovHorizontal = 2 * Math.atan( Math.tan( fovVertical / 2 ) * window.virtual_office.camera.aspect );
        const distanceHorizontal = window.innerWidth / ( 2 * Math.tan( fovHorizontal / 2 ) );

        const distanceFactor = 0.015;

        const diffZ = distanceHorizontal * distanceFactor;


        const roomSide = tempMesh.position.x > 0 ? -1 : 1;
        tempMesh.translateX( roomSide * diffZ / 1.4 );

        //  tempMesh.translateZ( diffZ / 1.4 );

        return [ tempMesh.position, targetRotation ];
    };

    let polaroid_width = 88 * 0.02;
    let polaroid_gutter = polaroid_width * 0.5;

    console.log(polaroid_width, polaroid_gutter);

    window.virtual_office.scene_objects.polaroids = [];

    for ( let i = 0; i < 14; i++ ) {
        let polaroid = await setupPolaroid();

        polaroid.rotation.x = Math.random() * ( 0.075 + 0.025 ) - 0.025;
        polaroid.rotation.z = Math.random() * ( 0.15 + 0.075 ) - 0.075;

        // First row
        if ( i < 7 ) {
            polaroid.position.y = -1.5;
        }
        // Second row
        else {
            polaroid.position.y = 1.5;
        }

        if ( i == 0 || i == 7 ) {
            polaroid.position.x = -6;
        }
        if ( i == 1 || i == 8 ) {
            polaroid.position.x = -4;
        }
        if ( i == 2 || i == 9 ) {
            polaroid.position.x = -2;
        }
        if ( i == 4 || i == 11 ) {
            polaroid.position.x = 2;
        }
        if ( i == 5 || i == 12 ) {
            polaroid.position.x = 4;
        }
        if ( i == 6 || i == 13 ) {
            polaroid.position.x = 6;
        }

        window.virtual_office.scene_objects.polaroids.push( polaroid );

        corkBoard.add( polaroid );
    }

    return corkBoard;
}

/**
 * Create a polaroid to attach to the bulletin board
 */
export async function setupPolaroid() {

    let scaler = 0.02;
    let polaroid_outer = { x: 88, y: 107 };
    let polaroid_inner = { x: 88, y: 107 };

    let material = new THREE.MeshPhongMaterial( { color: 0xFFFFFF } );
    let geometry = new THREE.PlaneGeometry( polaroid_outer.x, polaroid_outer.y );

    let mesh = new THREE.Mesh( geometry, material );

    mesh.scale.set( scaler, scaler, scaler );

    mesh.position.z = 0.1;

    return mesh;
}
