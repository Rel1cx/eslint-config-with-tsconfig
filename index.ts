import { consola } from "consola";
import { createConfig } from "eslint-config-relicx/lib/createConfig";
import { resolveProject } from "eslint-config-relicx/lib/helper";
import { createReactOverride } from "eslint-config-relicx/lib/overrides/react";
import { createTypeScriptOverride } from "eslint-config-relicx/lib/overrides/typescript";
import { getTsconfig } from "get-tsconfig";

const tsConfigPath = getTsconfig()?.path;
const defaultProject = resolveProject();

if (process.env.DEBUG?.includes("eslint")) {
    consola.debug("Resolved project:", defaultProject);
}

const tsOverrideConfig = createTypeScriptOverride({
    ...defaultProject,
    extends: [
        "plugin:import/recommended",
        "plugin:expect-type/recommended",
        "plugin:regexp/recommended",
        "plugin:rxjs/recommended",
        "plugin:case-police/recommended",
        "plugin:security/recommended",
    ],
    rules: {
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/no-useless-empty-export": "off",

        "import/no-unresolved": "error",

        "etc/throw-error": "warn",
        "etc/prefer-less-than": "off",

        "func-style": ["error", "declaration", { allowArrowFunctions: true }],

        "max-len": [
            "error",
            {
                code: 120,
            },
        ],
        "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
        "no-bitwise": "off",
        "unicorn/template-indent": "warn",
    },
});

const reactOverrideConfig = createReactOverride({
    ...defaultProject,
    rules: {
        "react/display-name": "off",
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: "function-declaration",
                unnamedComponents: "arrow-function",
            },
        ],
    },
});

export default createConfig({
    env: {
        browser: true,
        es2021: true,
    },
    incrementalAdoption: false,
    overrides: [tsOverrideConfig, reactOverrideConfig],
    plugins: ["expect-type", "regexp", "rxjs", "sort", "case-police", "security"],
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
