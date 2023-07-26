import { consola } from "consola";
import { createConfig } from "eslint-config-relicx/lib/createConfig";
import { getDependencies } from "eslint-config-relicx/lib/getDependencies";
import { createReactOverride } from "eslint-config-relicx/lib/overrides/react";
import { createTypeScriptOverride } from "eslint-config-relicx/lib/overrides/typescript";
import { getTsconfig } from "get-tsconfig";

const tsConfigPath = getTsconfig()?.path;
const defaultProject = getDependencies({});

if (process.env.DEBUG?.includes("eslint")) {
    consola.debug("Resolved project:", defaultProject);
}

const tsOverrideConfig = createTypeScriptOverride({
    ...defaultProject,
    extends: ["plugin:import/recommended"],
    rules: {
        "import/no-unresolved": "error",
        "import/named": "off",
        "import/namespace": "off",
        "import/no-default-export": "off",

        "func-style": ["error", "declaration", { allowArrowFunctions: true }],

        "max-len": [
            "error",
            {
                code: 120,
            },
        ],

        "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],

        "import-access/jsdoc": ["error"],
    },
});

const reactOverrideConfig = createReactOverride({
    ...defaultProject,
    rules: {
        "react/display-name": "off",
    },
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
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                ...(tsConfigPath ? { project: tsConfigPath } : {}),
            },
        },
    },
});
