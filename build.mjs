//build.js
import esbuild from 'esbuild'

esbuild
    .build({
        entryPoints: ['./src/virtual_office/main.js'],
        bundle: true,
        minify: true,
        outdir: 'docs',
    })
    .catch(() => process.exit(1))
