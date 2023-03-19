const { createConfig } = require('eslint-config-galex/dist/createConfig')
const {
    createReactOverride,
} = require('eslint-config-galex/dist/overrides/react')
const {
    createTypeScriptOverride,
} = require('eslint-config-galex/dist/overrides/typescript')

const { existsSync } = require('fs')
const packageJson = require('./package.json')

const hasReact = packageJson.dependencies?.react !== undefined

const hasSvelte = packageJson.dependencies?.svelte !== undefined

const hasTsconfigDotNode = existsSync('./tsconfig.node.json')

const tsOverrideConfig = {
    react: {
        hasReact,
    },
    typescript: {
        hasTypeScript: true,
    },
    rules: {
        'no-cap': 'off',
        camelcase: 'error',
        'import/order': 'off',
        'import/no-cycle': 'error',
        'import/namespace': 'off',
        'import/no-namespace': 'off',
        'import/no-deprecated': 'off',
        'import/named': 'off',
        'import/default': 'off',
        'import/export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-self-import': 'error',
        'import/no-unused-modules': 'off',
        'import/dynamic-import-chunkname': 'off',
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-bitwise': 'off',
        'no-param-reassign': 'off',
        'no-unused-vars': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'error',
        'dot-notation': 'off',
        'promise/prefer-await-to-then': 'off',
        'require-unicode-regexp': 'off',
        'functional/prefer-tacit': 'warn',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-math-trunc': 'off',
        'unicorn/catch-error-name': 'off',
        'unicorn/prefer-dom-node-dataset': 'off',
        'unicorn/consistent-function-scoping': 'warn',
        'unicorn/no-abusive-eslint-disable': 'warn',
        'unicorn/template-indent': 'off',
        'unicorn/no-keyword-prefix': 'off',
        'unicorn/numeric-separators-style': 'off',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/restrict-template-expre': 'off',
        '@typescript-eslint/prefer-enum-initializers': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-literal-enum-member': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'unicorn/prefer-top-level-await': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/no-identical-expressions': ['error'],
        'sonarjs/cognitive-complexity': ['warn', 32],
        'sonarjs/no-all-duplicated-branches': 'error',
        'sonarjs/no-element-overwrite': 'error',
        'sonarjs/no-collection-size-mischeck': 'error',
        'sonarjs/no-duplicated-branches': 'error',
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-use-of-empty-return-value': 'off',
        'sonarjs/no-gratuitous-expressions': 'error',
        'sonarjs/no-ignored-return': 'error',
    },
}

const reactOverrideConfig = {
    react: {
        hasReact: true,
    },
    typescript: {
        hasTypeScript: true,
    },
    rules: {
        'no-cap': 'off',
        'react/jsx-pascal-case': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-namespace': 'off',
        'react/no-unused-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-key': 'error',
        'react/jsx-wrap-multilines': 'off',
        'react/no-array-index-key': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-handler-names': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': 'off',
        'react/no-invalid-html-attribute': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/interactive-supports-focus': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
}

const xDotConfigOverride = {
    files: ['*.config.ts'],
    parserOptions: {
        project: 'tsconfig.node.json',
    },
}

const tsOverride = createTypeScriptOverride(tsOverrideConfig)

const reactOverride = createReactOverride(reactOverrideConfig)

const svelteOverride = {
    files: ['*.svelte'],
    processor: 'svelte3/svelte3',
}

const finalConfig = createConfig({
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'prettier',
        'plugin:import/recommended',
        'plugin:sonarjs/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:functional/strict',
        'plugin:functional/stylistic',
        'plugin:functional/external-recommended',
        'plugin:functional/external-typescript-recommended',
        hasSvelte && 'plugin:svelte/recommended',
    ].filter(Boolean),
    plugins: [
        'simple-import-sort',
        'functional',
        hasSvelte && 'svelte3',
    ].filter(Boolean),
    // parserOptions: {
    //     babelOptions: {
    //         presets: [require.resolve('next/babel')],
    //     },
    // },
    incrementalAdoption: false,
    overrides: [
        tsOverride,
        hasReact && reactOverride,
        hasSvelte && svelteOverride,
        hasTsconfigDotNode && xDotConfigOverride,
    ].filter(Boolean),
    settings: {
        'svelte3/typescript': true,
    },
})

module.exports = finalConfig
