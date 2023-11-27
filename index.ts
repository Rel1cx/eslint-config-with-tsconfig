import { consola } from "consola";
import { createConfig } from "eslint-config-rel1cx/lib/createConfig";
import { getDependencies } from "eslint-config-rel1cx/lib/getDependencies";
import { createReactOverride } from "eslint-config-rel1cx/lib/overrides/react";
import { createTypeScriptOverride } from "eslint-config-rel1cx/lib/overrides/typescript";

const defaultProject = getDependencies({});

if (process.env.DEBUG?.includes("eslint")) {
  consola.debug("Resolved project:", defaultProject);
}

const tsOverrideConfig = createTypeScriptOverride({
  ...defaultProject,
  rules: {
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
    "import-access/jsdoc": ["error"],
  },
});

const reactOverrideConfig = createReactOverride({
  ...defaultProject,
  rules: {},
});

export default createConfig({
  env: {
    es2024: true,
  },
  incrementalAdoption: false,
  extends: [
    "plugin:total-functions/recommended",
  ],
  plugins: ["import-access", "total-functions", "expect-type"],
  settings: {
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    react: { version: "detect" },
  },
  overrides: [tsOverrideConfig, reactOverrideConfig],
});
