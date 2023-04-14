import { defineConfig } from 'tsup'

export default defineConfig(_ => ({
    platform: 'node',
    entry: ['./index.ts'],
    outDir: 'lib',
    target: 'es2021',
    format: ['cjs'],
    treeshake: true,
    sourcemap: true,
    dts: true,
    minify: false,
    splitting: false,
    replaceNodeEnv: false,
    shims: false,
    ignoreWatch: ['lib'],
    clean: true
}))
