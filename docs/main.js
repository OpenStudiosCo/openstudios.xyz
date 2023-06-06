(function () {
    'use strict';

    (function() {
        const env = {"NODE_ENV":"production"};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

    // Initialiser.
    function init(fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive") {
            // call on next available tick
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    // Callback to run once initialised.
    function begin() {
        $(document)
            .ready(function () {

                var scene = new THREE.Scene();
                var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

                var renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                document.body.appendChild( renderer.domElement );

                var geometry = new THREE.BoxGeometry( 1, 1, 1 );
                var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
                var cube = new THREE.Mesh( geometry, material );
                scene.add( cube );

                camera.position.z = 5;

                function animate() {
                    requestAnimationFrame( animate );

                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.01;

                    renderer.render( scene, camera );
                }

                animate();

                window.addEventListener( 'resize', resize, false);

                function resize() {
                    
                    var dpr = window.devicePixelRatio;  // make 1 or less if too slow
                    var width = window.innerWidth * dpr;
                    var height = window.innerHeight * dpr;

                    camera.aspect = width / height;
                    camera.lookAt( 0, 0, 0);
                    camera.updateProjectionMatrix();
                    renderer.setSize( width, height );
                }

                

            })
            ;

    }

    // Start the app.
    init(begin);

})();
//# sourceMappingURL=main.js.map
