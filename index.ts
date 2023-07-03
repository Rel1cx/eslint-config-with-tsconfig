import { consola } from "consola"
import { createConfig } from "eslint-config-relicx/dist/createConfig"
import { resolveProject } from "eslint-config-relicx/dist/helper"
import { createReactOverride } from "eslint-config-relicx/dist/overrides/react"
import { createTypeScriptOverride } from "eslint-config-relicx/dist/overrides/typescript"
import { getTsconfig } from "get-tsconfig"

const defaultProject = resolveProject()

if (process.env.DEBUG?.includes("eslint")) {
    consola.debug("Resolved project:", defaultProject)
}

const tsOverrideConfig = createTypeScriptOverride({
    ...defaultProject,
    extends: ["plugin:import/recommended", "plugin:regexp/recommended", "plugin:rxjs/recommended"],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/no-useless-empty-export": "off",

        "etc/throw-error": "warn",
        "etc/prefer-less-than": "off",

        "func-style": ["warn", "expression"],

        "max-len": [
            "error",
            {
                code: 120,
            },
        ],
        quotes: ["error", "double"],
        indent: "off",
        camelcase: "warn",
        "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
        "no-bitwise": "off",
        "unicorn/template-indent": "warn",
        "security/detect-object-injection": "off",
    },
})

const reactOverrideConfig = createReactOverride({
    ...defaultProject,
    rules: {
        "react/display-name": "off",
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
    },
})

export default createConfig({
    env: {
        browser: true,
        es2021: true,
    },
    incrementalAdoption: false,
    overrides: [tsOverrideConfig, reactOverrideConfig],
    plugins: ["regexp", "rxjs", "sort"],
    settings: {
        parserOptions: { ecmaVersion: "latest", sourceType: "module" },
        react: { version: "detect" },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: getTsconfig()?.path ?? "tsconfig.json",
            },
        },
    },
})
