//build.js
import esbuild from 'esbuild'

const context = await esbuild
    .context({
        entryPoints: ['./src/virtual_office/main.js'],
        bundle: true,
        minify: true,
        outdir: 'web'
    });
 
// Manually do an incremental build
const result = await context.rebuild()

// Enable watch mode
await context.watch()

// // Enable serve mode
// await context.serve()

// // Dispose of the context
// context.dispose()
