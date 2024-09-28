import * as THREE from 'three';

import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import { getMeshWidth } from '../helpers.js';
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
    var corkBoardMesh = new THREE.Mesh( geometry, brightenMaterial( material, 1 ) );
    corkBoardMesh.name = "corkboardMesh";
    var corkBoard = new THREE.Object3D();
    corkBoard.add( corkBoardMesh );

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

    corkBoardMesh.add( leftBorder );
    corkBoardMesh.add( rightBorder );
    corkBoardMesh.add( topBorder );
    corkBoardMesh.add( bottomBorder );

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
        signMesh.position.set( -3, window.virtual_office.camera.aspect >= 0.88 ? 6.5 : 10, 0.1 ); // Example position for the sign
        signMesh.name = "blog_sign";
        window.virtual_office.scene_objects.blog_sign = signMesh;
        //signMesh.layers.set(11);
        corkBoard.add( signMesh );
    } );

    corkBoard.getViewingCoords = function () {
        let tempMesh = new THREE.Object3D();
        tempMesh.scale.copy(this.scale);
        tempMesh.position.copy(this.position);
    
        var targetRotation = this.rotation.clone();
    
        // Field of view calculation (vertical and horizontal)
        const fovVertical = window.virtual_office.camera.fov * (Math.PI / 180);
        const fovHorizontal = 2 * Math.atan(Math.tan(fovVertical / 2) * window.virtual_office.camera.aspect);
    
        // Distance calculations based on aspect ratio and screen size
        const aspectRatio = window.virtual_office.camera.aspect;
        const distanceHorizontal = window.innerWidth / (2 * Math.tan(fovHorizontal / 2));
        
        // Adjust distance factor based on aspect ratio
        let distanceFactor = aspectRatio > 1 ? 0.015 : 0.045;  // Increase factor slightly for very wide screens
        distanceFactor = aspectRatio > 2 ? 0.025 : distanceFactor;
        distanceFactor = aspectRatio < 0.5 ? 0.045 : distanceFactor;
    
        const diffZ = distanceHorizontal * distanceFactor;
    
        // Determine direction (room side) and adjust x-axis translation
        const roomSide = tempMesh.position.x > 0 ? -1 : 1;
        const distanceX = roomSide * diffZ / 1.4;
    
        // Apply translation
        tempMesh.translateX(distanceX);

        tempMesh.position.x = Math.min(tempMesh.position.x, -20);
    
        return [tempMesh.position, targetRotation];
    };
    

    let polaroid_width = 88 * 0.02;

    window.virtual_office.scene_objects.polaroids = [];

    for ( let i = 0; i < 14; i++ ) {
        let singleData = getBlogData( i );
        let polaroid = await setupPolaroid( singleData );

        polaroid.rotation.x = Math.random() * ( 0.075 + 0.025 ) - 0.025;
        polaroid.rotation.z = Math.random() * ( 0.15 + 0.075 ) - 0.075;

        polaroid.userData.original_rotation = {
            x: polaroid.rotation.x,
            z: polaroid.rotation.z
        }

        window.virtual_office.scene_objects.polaroids.push( polaroid );

        corkBoard.add( polaroid );
    }

    updateBlogLayout( corkBoard );

    return corkBoard;
}

export async function updateBlogLayout( corkBoard ) {
    window.virtual_office.scene_objects.polaroids.forEach( (polaroid, i) => {

        // Use horizontal layout 
        if ( window.virtual_office.camera.aspect >= 0.88 ) {
            corkBoard.getObjectByName('corkboardMesh').rotation.z = 0;
            // First row
            if ( i < 7 ) {
                polaroid.position.y = 2.25;
            }
            // Second row
            else {
                polaroid.position.y = -2.25;
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
            if ( i == 3 || i == 10 ) {
                polaroid.position.x = 0;
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
            if ( i >= 12 && i <= 14 ) {
                polaroid.visible = true;
            }
        }
        else {
            corkBoard.getObjectByName('corkboardMesh').rotation.z = Math.PI / 2;

            // First column
            if ( i == 0 || i == 3 || i == 6 || i == 9 || i == 12 ) {
                polaroid.position.x = -2.25;
            }
            // Second column
            if ( i == 1 || i == 4 || i == 7 || i == 10 || i == 13 ) {
                polaroid.position.x = 0;
            }
            // Third column
            if ( i == 2 || i == 5 || i == 8 || i == 11 ) {
                polaroid.position.x = 2.25;
            }

            if ( i >= 0 && i <= 2 ) {
                polaroid.position.y = 4;
            }
            if ( i >= 3 && i <= 5 ) {
                polaroid.position.y = 1;
            }
            if ( i >= 6 && i <= 8 ) {
                polaroid.position.y = -2;
            }
            if ( i >= 9 && i <= 11 ) {
                polaroid.position.y = -5;
            }
            if ( i >= 12 && i <= 14 ) {
                polaroid.visible = false;
            }

        }
    });
}

/**
 * Create a polaroid to attach to the bulletin board
 */
export async function setupPolaroid( singleData ) {
    let scaler = 0.02;
    let polaroid_outer = { x: 88, y: 107 };
    let polaroid_inner = { x: 79, y: 79 };

    // White background (outer) area
    let material = new THREE.MeshPhongMaterial( {
        color: 0xFFFFFF,
        emissive: 0xFFFFFF,
        emissiveIntensity: 0.1,
    } );
    let geometry = new THREE.PlaneGeometry( polaroid_outer.x, polaroid_outer.y );

    let polaroidMesh = new THREE.Mesh( geometry, material );
    polaroidMesh.scale.set( scaler, scaler, scaler );
    polaroidMesh.position.z = 0.1;
    polaroidMesh.name = 'polaroid';
    polaroidMesh.userData.title = singleData.title;
    polaroidMesh.userData.url = singleData.url;

    // Photo (inner) area
    //let photoMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
    let photoGeometry = new THREE.PlaneGeometry( polaroid_inner.x, polaroid_inner.y );
    let photoMesh = new THREE.Mesh( photoGeometry );
    //let photoMesh = new THREE.Mesh( photoGeometry, photoMaterial );
    photoMesh.position.y = 9;
    photoMesh.position.z = 1;

    // Load the image texture
    const textureLoader = new THREE.TextureLoader();
    const texture = await textureLoader.loadAsync( singleData.image );

    // Calculate aspect ratio and adjust UVs for cropping
    const aspect = texture.image.width / texture.image.height;
    let scaleX = 1, scaleY = 1;
    if ( aspect > 1 ) {
        // Image is wider than it is tall, crop horizontally
        scaleX = 1 / aspect;
    } else {
        // Image is taller than it is wide, crop vertically
        scaleY = aspect;
    }

    texture.center.set( 0.5, 0.5 );
    texture.repeat.set( scaleX, scaleY );

    // Apply the texture to a material
    photoMesh.userData.materialActive = brightenMaterial(new THREE.MeshPhongMaterial( { map: texture } ), 3);
    photoMesh.userData.materialIdle = brightenMaterial(new THREE.MeshPhongMaterial( { map: texture } ), 1);

    photoMesh.material = photoMesh.userData.materialIdle;

    photoMesh.name = 'polaroid_image';

    polaroidMesh.add( photoMesh );

    // Photo Label
    const loader = new FontLoader();
    await loader.load( '/assets/fonts/VeraMono.json', async ( font ) => {
        const textGeometry = new TextGeometry( singleData.title, {
            font: font,
            size: 2.5,
            depth: 0.2,
        } );

        photoMesh.position.z = 1;

        // Create the emissive material for the text
        var textMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );

        // Create the label mesh
        var signMesh = new THREE.Mesh( textGeometry, textMaterial );
        signMesh.layers.set( 11 );

        signMesh.name = "polaroid_label";
        signMesh.visible = false;

        let width = getMeshWidth( signMesh );
        signMesh.position.x = -width / 2;

        polaroidMesh.add( signMesh );
    } );

    return polaroidMesh;
}

export function clearBlogWallTitle() {
    // Remove previous title.
    if ( window.virtual_office.scene_objects.blog_selected_title ) {
        window.virtual_office.scene_objects.blogWall.remove( window.virtual_office.scene_objects.blog_selected_title );
        window.virtual_office.scene_objects.blog_selected_title = false;
    }
}

// @todo: Figure out a better way to do this.
function getBlogData( i ) {
    let data = [
        // Row 1.
        {
            'title': "How to implement Blender Principled\nBSDF Materials in Three.js (WebGL)",
            'url': '/iframes/blog/2024/09/how-to-implement-blender-principled-bsdf-materials-in-three-js-webgl.html',
            'image': '/assets/blog/2024/09/Screenshot-2024-06-28-162051-Medium.png'
        },
        {
            'title': 'Studio Roundup for May 2024',
            'url': '/iframes/blog/2024/05/studio-roundup-may-2024.html',
            'image': '/assets/blog/2024/05/opal-banner.webp'
        },
        {
            'title': 'Studio Roundup for April 2024',
            'url': '/iframes/blog/2024/04/studio-roundup-april-2024.html',
            'image': '/assets/blog/2024/04/emerald-pendant.jpg'
        },
        {
            'title': 'Studio Roundup for March 2024',
            'url': '/iframes/blog/2024/03/studio-roundup-march-2024.html',
            'image': '/assets/blog/2024/03/1__M7aKKPzaeL1ubZgMFUeOg.webp'
        },
        {
            'title': 'Studio Roundup for February 2024',
            'url': '/iframes/blog/2024/02/studio-roundup-february-2024.html',
            'image': '/assets/blog/2024/02/1_dyIbSVF7tlb9HYpBb4AkMQ.webp'
        },
        {
            'title': 'Studio Roundup for January 2024',
            'url': '/iframes/blog/2024/01/studio-roundup-january-2024.html',
            'image': '/assets/blog/2024/01/1_jvdn9ENFN3e46Mf5GFmpcA.webp'
        },
        {
            'title': 'Studio Roundup for December 2023',
            'url': '/iframes/blog/2023/12/studio-roundup-december-2023.html',
            'image': '/assets/blog/2023/12/1_aN2AdpmiU7S0dGFpWUoixA.webp'
        },
        // Row 2.
        {
            'title': 'Studio Roundup for November 2023',
            'url': '/iframes/blog/2023/11/studio-roundup-november-2023.html',
            'image': '/assets/blog/2023/11/1_CgaG1-mK8Ys4idpaYmNavA.webp'
        },
        {
            'title': 'Studio Roundup for October 2023',
            'url': '/iframes/blog/2023/10/studio-roundup-october-2023.html',
            'image': '/assets/blog/2023/10/1_SLu3jtltivXMa4iTfvox4Q.webp'
        },
        {
            'title': "Building A Cool 3D website: Tips,\nTricks and Lessons Learned",
            'url': '/iframes/blog/2023/10/building-a-cool-3d-website-tips-tricks-and-lessons-learned.html',
            'image': '/assets/blog/2023/10/1*o6xfwPdjAcGUyBE5s69iOQ.png'
        },
        {
            'title': 'Studio Roundup for September 2023',
            'url': '/iframes/blog/2023/09/studio-roundup-september-2023.html',
            'image': '/assets/blog/2023/09/1_CSEjUsaGdPWgjjutW2rc8w.webp'
        },
        {
            'title': 'Studio Roundup for August 2023',
            'url': '/iframes/blog/2023/08/studio-roundup-august-2023.html',
            'image': '/assets/blog/2023/08/1_KiFpOsEZO4yE7mzAeucs0w.webp'
        },
        {
            'title': 'Studio Roundup for July 2023',
            'url': '/iframes/blog/2023/07/studio-roundup-july-2023.html',
            'image': '/assets/blog/2023/07/1_vnEMqG7iAtvJXFlS-pMkIg.webp'
        },
        {
            'title': 'Studio Roundup for June 2023',
            'url': '/iframes/blog/2023/06/studio-roundup-june-2023.html',
            'image': '/assets/blog/2023/06/1_DJCaxmHRqHXM4tGMBJiPXA.webp'
        },
    ];

    return data[ i ];
}
