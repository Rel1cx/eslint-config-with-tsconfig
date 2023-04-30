import confusingBrowserGlobals from 'confusing-browser-globals'
import { createConfig } from 'eslint-config-galex/dist/createConfig'
import { createReactOverride } from 'eslint-config-galex/dist/overrides/react'
import { createTypeScriptOverride } from 'eslint-config-galex/dist/overrides/typescript'
import { type OverrideCreator } from 'eslint-config-galex/dist/types'
import { getTsconfig } from 'get-tsconfig'
import { getPackageInfoSync, isPackageExists } from 'local-pkg'

const reactPkgInfo = getPackageInfoSync('react')
const tsPkgInfo = getPackageInfoSync('typescript')

const defaultProject: Parameters<OverrideCreator>[0] = {
    hasJest: false,
    hasJestDom: false,
    hasNest: isPackageExists('@nestjs/common'),
    hasNodeTypes: isPackageExists('@types/node'),
    hasTailwind: isPackageExists('tailwindcss'),
    hasTestingLibrary: isPackageExists('@testing-library/react'),
    react: {
        hasReact: isPackageExists('react'),
        isCreateReactApp: false,
        isNext: isPackageExists('next'),
        isPreact: isPackageExists('preact'),
        isRemix: false,
        // eslint-disable-next-line no-restricted-syntax
        version: reactPkgInfo?.version ?? null,
    },
    storybook: {
        hasStorybook: false,
        hasStorybookTestingLibrary: false,
    },
    typescript: {
        config: null,
        hasTypeScript: true,
        // eslint-disable-next-line no-restricted-syntax
        version: tsPkgInfo?.version ?? null,
    },
}

const tsOverrideConfig = createTypeScriptOverride({
    ...defaultProject,
    extends: [
        'plugin:import/recommended',
        'plugin:sonarjs/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:functional/recommended',
        'plugin:functional/stylistic',
        'plugin:functional/external-typescript-recommended',
        'plugin:security/recommended',
    ],
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
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            { checksVoidReturn: false },
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                // Allow to name unused vars with _
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/prefer-enum-initializers': 'off',
        '@typescript-eslint/prefer-literal-enum-member': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/unbound-method': 'error',

        camelcase: 'warn',
        'dot-notation': 'off',
        'etc/no-assign-mutated-array': 'error',
        'etc/no-const-enum': 'error',
        'etc/no-enum': 'error',
        'etc/prefer-less-than': 'warn',
        'etc/throw-error': 'warn',
        'func-style': ['error', 'expression'],
        'functional/functional-parameters': 'off',
        'functional/immutable-data': 'off',
        'functional/no-conditional-statements': 'off',
        'functional/no-expression-statements': 'off',
        'functional/no-return-void': 'off',
        'functional/prefer-immutable-types': 'off',
        'functional/prefer-tacit': 'warn',
        'functional/type-declaration-immutability': 'off',
        'import/default': 'off',
        'import/dynamic-import-chunkname': 'off',
        'import/export': 'off',
        'import/extensions': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-cycle': 'error',
        'import/no-default-export': 'off',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-namespace': 'off',
        'import/no-self-import': 'error',
        'import/no-unused-modules': 'off',
        'import/order': 'off',
        indent: 'warn',
        'max-len': [
            'error',
            {
                code: 120,
            },
        ],
        'no-bitwise': 'off',

        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
        'no-param-reassign': 'off',
        'no-redeclare': 'warn',
        'no-restricted-globals': ['error', ...confusingBrowserGlobals],
        'no-restricted-syntax': [
            'error',
            {
                message: 'Optional Chaining not allowed',
                selector: 'MemberExpression[optional=true]',
            },
            {
                message: 'Enum not allowed',
                selector: 'TSEnumDeclaration',
            },
        ],
        'no-unsafe-optional-chaining': 'error',
        'no-unused-vars': 'warn',
        'no-use-before-define': 'error',
        'promise/prefer-await-to-then': 'warn',
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'require-unicode-regexp': 'warn',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',

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

        'sort/destructuring-properties': 'warn',

        'spaced-comment': 'off',
        strict: 'error',
        'array-callback-return': 'off',
        'unicorn/no-array-method-this-argument': 'off',
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

        'security/detect-object-injection': 'off',
    },
})

const reactOverrideConfig = createReactOverride({
    ...defaultProject,
    rules: {
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'jsx-a11y/interactive-supports-focus': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/display-name': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': 'warn',
        'react/jsx-indent-props': 'off',
        'react/jsx-key': 'error',
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-props': 'warn',
        'react/jsx-wrap-multilines': 'off',
        'react/no-array-index-key': 'warn',
        'react/no-invalid-html-attribute': 'off',
        'react/no-namespace': 'off',
        'react/no-unused-prop-types': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'warn',
    },
})

export default createConfig({
    env: {
        browser: true,
        es2021: true,
    },
    incrementalAdoption: false,
    overrides: [tsOverrideConfig, reactOverrideConfig],
    plugins: ['simple-import-sort', 'functional', 'sort'],
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                // eslint-disable-next-line no-restricted-syntax
                project: getTsconfig()?.path ?? 'tsconfig.json',
            },
        },
    },
})
