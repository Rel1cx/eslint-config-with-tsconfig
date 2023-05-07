import { defineConfig } from 'tsup';

export default defineConfig(() => ({
    platform: 'node',
    target: 'node18',
    format: ['cjs'],
    entry: ['./index.ts'],
    outDir: 'lib',
    ignoreWatch: ['lib'],
    treeshake: true,
    sourcemap: true,
    dts: true,
    minify: false,
    splitting: false,
    replaceNodeEnv: false,
    shims: false,
    clean: true,
}));
