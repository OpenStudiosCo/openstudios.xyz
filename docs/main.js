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

                $('video').each(function () {
                    this.loop = true;
                    this.play();
                });

                // Background effect
                var camera = new THREE.Camera();
                camera.position.z = 1;

                var scene = new THREE.Scene();

                var geometry = new THREE.PlaneBufferGeometry(2, 2);

                var uniforms = {
                    time: { type: "f", value: 2.0 },
                    resolution: { type: "v2", value: new THREE.Vector2() },
                    mouse: { type: "v2", value: new THREE.Vector2() },
                };

                var material = new THREE.ShaderMaterial({
                    uniforms: uniforms,
                    vertexShader: $('#vs').text(),
                    fragmentShader: $('#fs').text(),
                });

                var mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);

                var renderer = new THREE.WebGLRenderer();
                document.body.appendChild(renderer.domElement);
                renderer.domElement.addEventListener('mousemove', recordMousePosition);

                render(0);

                function recordMousePosition(e) {
                    // normalize the mouse position across the canvas
                    // so in the shader the values go from -1 to +1
                    var canvas = renderer.domElement;
                    var rect = canvas.getBoundingClientRect();

                    uniforms.mouse.value.x = (e.clientX - rect.left) / canvas.clientWidth * 2 - 1;
                    uniforms.mouse.value.y = (e.clientY - rect.top) / canvas.clientHeight * -2 + 1;
                }

                function resize() {
                    var canvas = renderer.domElement;
                    var dpr = window.devicePixelRatio;  // make 1 or less if too slow
                    var width = canvas.clientWidth * dpr;
                    var height = canvas.clientHeight * dpr;
                    if (width != canvas.width || height != canvas.height) {
                        renderer.setSize(width, height, false);
                        uniforms.resolution.value.x = renderer.domElement.width;
                        uniforms.resolution.value.y = renderer.domElement.height;
                    }

                    $('.ui.container').css('marginTop', (window.innerHeight / 2) - ($('.ui.container').height() / 2));
                }

                function render(time) {
                    resize();
                    uniforms.time.value = time * 0.001;
                    renderer.render(scene, camera);
                    requestAnimationFrame(render);
                }

            })
            ;

    }

    // Start the app.
    init(begin);

})();
//# sourceMappingURL=main.js.map
