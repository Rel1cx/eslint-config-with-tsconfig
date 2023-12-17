import { createConfig } from "eslint-config-rel1cx/lib/createConfig";
import { getDependencies } from "eslint-config-rel1cx/lib/getDependencies";
import { createReactOverride } from "eslint-config-rel1cx/lib/overrides/react";
import { createTypeScriptOverride } from "eslint-config-rel1cx/lib/overrides/typescript";

const defaultProject = getDependencies({});

const tsOverrideConfig = createTypeScriptOverride({
  ...defaultProject,
  files: ["*.ts", "*.tsx"],
  rules: {
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
    "import-access/jsdoc": ["error"],
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
  },
});

const reactOverrideConfig = createReactOverride({
  ...defaultProject,
  files: ["*.ts", "*.tsx"],
});

export default createConfig({
  env: {
    es2021: true,
  },
  incrementalAdoption: false,
  plugins: ["import-access", "expect-type"],
  settings: {
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    react: { version: "detect" },
  },
  overrides: [tsOverrideConfig, reactOverrideConfig],
});
