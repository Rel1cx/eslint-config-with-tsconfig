const { isPackageExists } = require('local-pkg')
const { createConfig } = require('eslint-config-galex/dist/createConfig')
const {
    createReactOverride,
} = require('eslint-config-galex/dist/overrides/react')
const {
    createTypeScriptOverride,
} = require('eslint-config-galex/dist/overrides/typescript')
const { getTsconfig } = require('get-tsconfig')
const confusingBrowserGlobals = require('confusing-browser-globals')

const hasReact = isPackageExists('react')

const tsOverrideConfig = {
    react: {
        hasReact,
    },
    typescript: {
        hasTypeScript: true,
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/dot-notation': 'warn',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-invalid-void-type': 'warn',
        '@typescript-eslint/no-misused-promises': [
            'error',
            { checksVoidReturn: false },
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        'sort-destructure-keys/sort-destructure-keys': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                // Allow to name unused vars with _
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'off',
        '@typescript-eslint/prefer-literal-enum-member': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/unbound-method': 'error',

        'dot-notation': 'off',
        'functional/immutable-data': 'off',
        'functional/prefer-tacit': 'warn',

        'import/default': 'off',
        'import/dynamic-import-chunkname': 'off',
        'import/export': 'off',
        'import/extensions': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-cycle': 'error',
        'import/no-default-export': 'off',
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'import/no-namespace': 'off',
        'import/no-self-import': 'error',
        'import/no-unused-modules': 'off',
        'import/order': 'off',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',

        'etc/no-const-enum': 'error',
        'etc/no-enum': 'error',
        'etc/no-assign-mutated-array': 'error',
        'etc/prefer-less-than': 'warn',
        'etc/throw-error': 'warn',

        indent: 'warn',
        'max-len': [
            'error',
            {
                code: 120,
            },
        ],
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'no-bitwise': 'off',
        'no-param-reassign': 'off',
        'no-redeclare': 'warn',
        'no-unsafe-optional-chaining': 'error',
        'no-unused-vars': 'warn',
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-use-before-define': 'error',
        'promise/prefer-await-to-then': 'warn',
        'require-unicode-regexp': 'warn',
        'func-style': ['error', 'expression'],

        'sonarjs/cognitive-complexity': ['warn', 32],
        'sonarjs/no-all-duplicated-branches': 'error',
        'sonarjs/no-collection-size-mischeck': 'error',
        'sonarjs/no-duplicate-string': 'warn',
        'sonarjs/no-duplicated-branches': 'error',
        'sonarjs/no-element-overwrite': 'error',
        'sonarjs/no-gratuitous-expressions': 'error',
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-identical-expressions': ['warn'],
        'sonarjs/no-identical-functions': 'warn',
        'sonarjs/no-ignored-return': 'error',
        'sonarjs/no-use-of-empty-return-value': 'error',

        'spaced-comment': 'off',

        'unicorn/catch-error-name': 'off',
        'unicorn/consistent-function-scoping': 'warn',
        'unicorn/no-abusive-eslint-disable': 'warn',
        'unicorn/no-keyword-prefix': 'off',
        'unicorn/no-useless-undefined': 'warn',
        'unicorn/numeric-separators-style': 'off',
        'unicorn/prefer-dom-node-dataset': 'off',
        'unicorn/prefer-math-trunc': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/template-indent': 'warn',
        camelcase: 'warn',

        'no-restricted-globals': ['error', ...confusingBrowserGlobals],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'MemberExpression[optional=true]',
                message: 'Optional Chaining not allowed',
            },
            {
                selector: 'ClassDeclaration',
                message: 'Class not allowed',
            },
            {
                selector: 'TSEnumDeclaration',
                message: 'Enum not allowed',
            },
        ],
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
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'warn',
        'react/display-name': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-handler-names': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-indent': 'warn',
        'react/jsx-key': 'error',
        'react/jsx-sort-props': 'warn',
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/no-array-index-key': 'warn',
        'react/no-invalid-html-attribute': 'off',
        'react/no-namespace': 'off',
        'react/no-unused-prop-types': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'jsx-a11y/interactive-supports-focus': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
    },
}

const tsOverride = createTypeScriptOverride(tsOverrideConfig)

const reactOverride = createReactOverride(reactOverrideConfig)

const finalConfig = createConfig({
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:import/recommended',
        'plugin:sonarjs/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:functional/strict',
        'plugin:functional/stylistic',
        'plugin:functional/external-recommended',
        'plugin:functional/external-typescript-recommended',
        'plugin:typescript-sort-keys/recommended',
    ].filter(Boolean),
    plugins: [
        'simple-import-sort',
        'sort-destructure-keys',
        'typescript-sort-keys',
        'functional',
    ].filter(Boolean),
    incrementalAdoption: false,
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: getTsconfig()?.path ?? 'tsconfig.json',
            },
        },
    },
    overrides: [tsOverride, hasReact && reactOverride].filter(Boolean),
})

module.exports = finalConfig
