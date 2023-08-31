import { defineConfig } from "tsup";

export default defineConfig(() => ({
    platform: "node",
    target: "node18",
    format: ["cjs"],
    entry: ["./index.ts", "./prettier.ts"],
    outDir: "lib",
    skipNodeModulesBundle: true,
    treeshake: true,
    sourcemap: true,
    dts: true,
    minify: false,
    splitting: false,
    replaceNodeEnv: false,
    shims: false,
    clean: true,
}));
