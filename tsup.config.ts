import { defineConfig } from 'tsup'

export default defineConfig(_ => ({
    name: 'core',
    platform: 'node',
    target: 'es2021',
    format: ['cjs'],
    entry: ['./index.ts'],
    outDir: 'dist',
    dts: true,
    shims: false,
    minify: false,
    splitting: false,
    sourcemap: true,
    clean: true,
    ignoreWatch: ['dist'],
    replaceNodeEnv: false,
    treeshake: true
}))
