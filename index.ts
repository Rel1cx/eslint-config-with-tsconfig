import { consola } from "consola";
import { createConfig } from "eslint-config-relicx/lib/createConfig";
import { getDependencies } from "eslint-config-relicx/lib/getDependencies";
import { createReactOverride } from "eslint-config-relicx/lib/overrides/react";
import { createTypeScriptOverride } from "eslint-config-relicx/lib/overrides/typescript";

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
        browser: true,
        es2021: true,
    },
    incrementalAdoption: false,
    overrides: [tsOverrideConfig, reactOverrideConfig],
    plugins: ["import-access", "expect-type"],
    settings: {
        parserOptions: { ecmaVersion: "latest", sourceType: "module" },
        react: { version: "detect" },
    },
});
