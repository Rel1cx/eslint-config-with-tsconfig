import { defineConfig } from 'tsup'

export default defineConfig((_) => ({
    platform: 'node',
    target: 'node18',
    entry: ['./index.ts'],
    outDir: 'lib',
    format: ['cjs'],
    treeshake: true,
    sourcemap: true,
    dts: true,
    minify: false,
    splitting: false,
    replaceNodeEnv: false,
    shims: false,
    ignoreWatch: ['lib'],
    clean: true,
}))
