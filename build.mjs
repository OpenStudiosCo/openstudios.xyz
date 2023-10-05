//build.js
import esbuild from 'esbuild'

esbuild
    .build({
        entryPoints: ['./src/app/main.js'],
        bundle: true,
        minify: true,
        outdir: 'docs',
    })
    .catch(() => process.exit(1))
