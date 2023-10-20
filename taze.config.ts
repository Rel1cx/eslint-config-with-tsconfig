import { defineConfig } from "taze";

export default defineConfig({
  force: true,
  write: true,
  install: false,
  packageMode: {
    "eslint-plugin-perfectionist": "1.5.1",
  },
});
