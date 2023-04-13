'use strict';

var confusingBrowserGlobals = require('confusing-browser-globals');
var createConfig = require('eslint-config-galex/dist/createConfig');
var react = require('eslint-config-galex/dist/overrides/react');
var typescript = require('eslint-config-galex/dist/overrides/typescript');
var getTsconfig = require('get-tsconfig');
var localPkg = require('local-pkg');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var confusingBrowserGlobals__default = /*#__PURE__*/_interopDefault(confusingBrowserGlobals);

// index.ts
var reactPkgInfo = localPkg.getPackageInfoSync("react");
var tsPkgInfo = localPkg.getPackageInfoSync("typescript");
var defaultProject = {
  hasJest: localPkg.isPackageExists("jest"),
  hasJestDom: localPkg.isPackageExists("@testing-library/jest-dom"),
  hasNest: localPkg.isPackageExists("@nestjs/common"),
  hasNodeTypes: localPkg.isPackageExists("@types/node"),
  hasTestingLibrary: localPkg.isPackageExists("@testing-library/react"),
  hasTailwind: localPkg.isPackageExists("tailwindcss"),
  react: {
    hasReact: localPkg.isPackageExists("react"),
    isCreateReactApp: false,
    isNext: localPkg.isPackageExists("next"),
    isPreact: localPkg.isPackageExists("preact"),
    isRemix: localPkg.isPackageExists("remix"),
    // eslint-disable-next-line no-restricted-syntax
    version: reactPkgInfo?.version ?? null
  },
  storybook: {
    hasStorybook: false,
    hasStorybookTestingLibrary: false
  },
  typescript: {
    config: null,
    hasTypeScript: true,
    // eslint-disable-next-line no-restricted-syntax
    version: tsPkgInfo?.version ?? null
  }
};
var tsOverrideConfig = typescript.createTypeScriptOverride({
  ...defaultProject,
  extends: [
    "plugin:import/recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:functional/recommended",
    "plugin:functional/stylistic",
    "plugin:functional/external-typescript-recommended",
    "plugin:typescript-sort-keys/recommended"
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": "warn",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-invalid-void-type": "warn",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false }
    ],
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        // Allow to name unused vars with _
        argsIgnorePattern: "^_"
      }
    ],
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/prefer-enum-initializers": "off",
    "@typescript-eslint/prefer-literal-enum-member": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/unbound-method": "error",
    "dot-notation": "off",
    "functional/prefer-tacit": "warn",
    "functional/functional-parameters": "off",
    "functional/immutable-data": "off",
    "functional/no-conditional-statements": "off",
    "functional/no-expression-statements": "off",
    "functional/no-return-void": "off",
    "functional/prefer-immutable-types": "off",
    "functional/type-declaration-immutability": "off",
    "import/default": "off",
    "import/dynamic-import-chunkname": "off",
    "import/export": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/no-cycle": "error",
    "import/no-default-export": "off",
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "off",
    "import/no-namespace": "off",
    "import/no-self-import": "error",
    "import/no-unused-modules": "off",
    "import/order": "off",
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    "etc/no-const-enum": "error",
    "etc/no-enum": "error",
    "etc/no-assign-mutated-array": "error",
    "etc/prefer-less-than": "warn",
    "etc/throw-error": "warn",
    indent: "warn",
    "max-len": [
      "error",
      {
        code: 120
      }
    ],
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "single", { allowTemplateLiterals: true }],
    "no-bitwise": "off",
    "no-param-reassign": "off",
    "no-redeclare": "warn",
    "no-unsafe-optional-chaining": "error",
    "no-unused-vars": "warn",
    "no-else-return": "error",
    "no-lonely-if": "error",
    "no-use-before-define": "error",
    "promise/prefer-await-to-then": "warn",
    "require-unicode-regexp": "warn",
    "func-style": ["error", "expression"],
    "sonarjs/cognitive-complexity": ["warn", 32],
    "sonarjs/no-all-duplicated-branches": "error",
    "sonarjs/no-collection-size-mischeck": "error",
    "sonarjs/no-duplicate-string": "warn",
    "sonarjs/no-duplicated-branches": "error",
    "sonarjs/no-element-overwrite": "error",
    "sonarjs/no-gratuitous-expressions": "error",
    "sonarjs/no-identical-conditions": "error",
    "sonarjs/no-identical-expressions": ["warn"],
    "sonarjs/no-identical-functions": "warn",
    "sonarjs/no-ignored-return": "error",
    "sonarjs/no-use-of-empty-return-value": "error",
    "spaced-comment": "off",
    "unicorn/catch-error-name": "off",
    "unicorn/consistent-function-scoping": "warn",
    "unicorn/no-abusive-eslint-disable": "warn",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-useless-undefined": "warn",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-dom-node-dataset": "off",
    "unicorn/prefer-math-trunc": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/template-indent": "warn",
    camelcase: "warn",
    "no-restricted-globals": ["error", ...confusingBrowserGlobals__default.default],
    "no-restricted-syntax": [
      "error",
      {
        selector: "MemberExpression[optional=true]",
        message: "Optional Chaining not allowed"
      },
      {
        selector: "ClassDeclaration",
        message: "Class not allowed"
      },
      {
        selector: "TSEnumDeclaration",
        message: "Enum not allowed"
      }
    ]
  }
});
var reactOverrideConfig = react.createReactOverride({
  ...defaultProject,
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react/display-name": "off",
    "react/function-component-definition": "off",
    "react/jsx-handler-names": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-indent": "warn",
    "react/jsx-key": "error",
    "react/jsx-sort-props": "warn",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-pascal-case": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-array-index-key": "warn",
    "react/no-invalid-html-attribute": "off",
    "react/no-namespace": "off",
    "react/no-unused-prop-types": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off"
  }
});
var eslint_config_with_tsconfig_default = createConfig.createConfig({
  env: {
    browser: true,
    es2021: true
  },
  plugins: [
    "simple-import-sort",
    "sort-destructure-keys",
    "typescript-sort-keys",
    "functional"
  ].filter(Boolean),
  incrementalAdoption: false,
  overrides: [
    tsOverrideConfig,
    reactOverrideConfig
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        // eslint-disable-next-line no-restricted-syntax
        project: getTsconfig.getTsconfig()?.path ?? "tsconfig.json"
      }
    }
  }
});

module.exports = eslint_config_with_tsconfig_default;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map