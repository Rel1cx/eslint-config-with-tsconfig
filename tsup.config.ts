import { defineConfig } from "tsup";

export default defineConfig(() => ({
  platform: "node",
  target: "node18",
  format: ["cjs", "esm"],
  entry: ["./index.ts"],
  outDir: "lib",
  skipNodeModulesBundle: false,
  treeshake: true,
  sourcemap: false,
  dts: true,
  minify: false,
  splitting: false,
  replaceNodeEnv: false,
  shims: false,
  clean: true,
}));
