# ESLint configuration optimized for TypeScript projects

This is a general purpose ESLint configuration for TypeScript projects.

## Configuration included

```json
  "plugins": [
    "@susisu/safe-typescript",
    "@typescript-eslint"
    "expect-type",
    "import-access",
    "perfectionist",
    "promise",
    "react-hooks",
    "react-refresh",
    "redos-detector",
    "regexp",
    "security",
    "simple-import-sort",
    "sonarjs",
    "tailwindcss",
    "unicorn",
  ],
  "rules": {
    "@susisu/safe-typescript/no-object-assign": [
      "error"
    ],
    "@susisu/safe-typescript/no-type-assertion": [
      "error"
    ],
    "@susisu/safe-typescript/no-unsafe-object-enum-method": [
      "error"
    ],
    "@susisu/safe-typescript/no-unsafe-object-property-check": [
      "error"
    ],
    "@susisu/safe-typescript/no-unsafe-object-property-overwrite": [
      "off"
    ],
    "@typescript-elint/object-curly-spacing": [
      "off"
    ],
    "@typescript-eslint/adjacent-overload-signatures": [
      "error"
    ],
    "@typescript-eslint/array-type": [
      "warn",
      {
        "default": "array"
      }
    ],
    "@typescript-eslint/await-thenable": [
      "error"
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "minimumDescriptionLength": 3,
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true
      }
    ],
    "@typescript-eslint/ban-tslint-comment": [
      "error"
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "FC": {
            "fixWith": "ComponentType",
            "message": "To declare a component, you don't have to use FC to annotate it. To type something that accepts/is a React Component, use ComponentType<T>."
          },
          "React.FC": {
            "fixWith": "React.ComponentType",
            "message": "To declare a component, you don't have to use React.FC to annotate it. To type something that accepts/is a React Component, use React.ComponentType<T>."
          },
          "React.ReactElement": {
            "fixWith": "React.ReactNode",
            "message": "In most cases, you want React.ReactNode. Only ignore this rule when you want to use cloneElement."
          },
          "ReactElement": {
            "fixWith": "ReactNode",
            "message": "In most cases, you want ReactNode. Only ignore this rule when you want to use cloneElement."
          },
          "{}": false
        }
      }
    ],
    "@typescript-eslint/brace-style": [
      "off"
    ],
    "@typescript-eslint/camelcase": [
      "off"
    ],
    "@typescript-eslint/class-literal-property-style": [
      "off"
    ],
    "@typescript-eslint/comma-dangle": [
      "off"
    ],
    "@typescript-eslint/comma-spacing": [
      "off"
    ],
    "@typescript-eslint/consistent-generic-constructors": [
      "warn"
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      "warn"
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "warn"
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "interface"
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        "disallowTypeAnnotations": true,
        "prefer": "type-imports"
      }
    ],
    "@typescript-eslint/default-param-last": [
      "error"
    ],
    "@typescript-eslint/dot-notation": [
      "error"
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "off"
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "off"
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "off"
    ],
    "@typescript-eslint/func-call-spacing": [
      "off"
    ],
    "@typescript-eslint/indent": [
      "off"
    ],
    "@typescript-eslint/init-declarations": [
      "off"
    ],
    "@typescript-eslint/keyword-spacing": [
      "off"
    ],
    "@typescript-eslint/lines-around-comment": [
      "off"
    ],
    "@typescript-eslint/lines-between-class-members": [
      "warn"
    ],
    "@typescript-eslint/member-delimiter-style": [
      "off"
    ],
    "@typescript-eslint/member-ordering": [
      "warn"
    ],
    "@typescript-eslint/method-signature-style": [
      "off"
    ],
    "@typescript-eslint/naming-convention": [
      "off"
    ],
    "@typescript-eslint/no-array-constructor": [
      "error"
    ],
    "@typescript-eslint/no-base-to-string": [
      "error"
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": [
      "error"
    ],
    "@typescript-eslint/no-confusing-void-expression": [
      "off"
    ],
    "@typescript-eslint/no-dupe-class-members": [
      "error"
    ],
    "@typescript-eslint/no-duplicate-enum-values": [
      "error"
    ],
    "@typescript-eslint/no-duplicate-type-constituents": [
      "error"
    ],
    "@typescript-eslint/no-dynamic-delete": [
      "warn"
    ],
    "@typescript-eslint/no-empty-function": [
      "error"
    ],
    "@typescript-eslint/no-empty-interface": [
      "off"
    ],
    "@typescript-eslint/no-explicit-any": [
      "error"
    ],
    "@typescript-eslint/no-extra-non-null-assertion": [
      "error"
    ],
    "@typescript-eslint/no-extra-parens": [
      "warn",
      "all",
      {
        "ignoreJSX": "all"
      }
    ],
    "@typescript-eslint/no-extra-semi": [
      "warn"
    ],
    "@typescript-eslint/no-extraneous-class": [
      "error"
    ],
    "@typescript-eslint/no-floating-promises": [
      "warn"
    ],
    "@typescript-eslint/no-for-in-array": [
      "warn"
    ],
    "@typescript-eslint/no-implicit-any-catch": [
      "off"
    ],
    "@typescript-eslint/no-implied-eval": [
      "error"
    ],
    "@typescript-eslint/no-inferrable-types": [
      "warn"
    ],
    "@typescript-eslint/no-invalid-this": [
      "error"
    ],
    "@typescript-eslint/no-invalid-void-type": [
      "error"
    ],
    "@typescript-eslint/no-loop-func": [
      "error"
    ],
    "@typescript-eslint/no-loss-of-precision": [
      "error"
    ],
    "@typescript-eslint/no-magic-numbers": [
      "off"
    ],
    "@typescript-eslint/no-meaningless-void-operator": [
      "error"
    ],
    "@typescript-eslint/no-misused-new": [
      "off"
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "@typescript-eslint/no-mixed-enums": [
      "error"
    ],
    "@typescript-eslint/no-namespace": [
      "off"
    ],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": [
      "error"
    ],
    "@typescript-eslint/no-non-null-asserted-optional-chain": [
      "error"
    ],
    "@typescript-eslint/no-non-null-assertion": [
      "error"
    ],
    "@typescript-eslint/no-parameter-properties": [
      "off"
    ],
    "@typescript-eslint/no-redeclare": [
      "off"
    ],
    "@typescript-eslint/no-redundant-type-constituents": [
      "warn"
    ],
    "@typescript-eslint/no-require-imports": [
      "error"
    ],
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowDestructuring": true
      }
    ],
    "@typescript-eslint/no-throw-literal": [
      "error"
    ],
    "@typescript-eslint/no-type-alias": [
      "off"
    ],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      "warn",
      {
        "allowComparingNullableBooleansToFalse": false,
        "allowComparingNullableBooleansToTrue": false
      }
    ],
    "@typescript-eslint/no-unnecessary-condition": [
      "warn"
    ],
    "@typescript-eslint/no-unnecessary-qualifier": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": [
      "warn"
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": [
      "warn"
    ],
    "@typescript-eslint/no-unsafe-argument": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-assignment": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-call": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-declaration-merging": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-enum-comparison": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-member-access": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-return": [
      "error"
    ],
    "@typescript-eslint/no-unused-expressions": [
      "off"
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-use-before-define": [
      "off"
    ],
    "@typescript-eslint/no-useless-constructor": [
      "error"
    ],
    "@typescript-eslint/no-useless-empty-export": [
      "error"
    ],
    "@typescript-eslint/no-useless-template-literals": [
      "error"
    ],
    "@typescript-eslint/no-var-requires": [
      "off"
    ],
    "@typescript-eslint/non-nullable-type-assertion-style": [
      "error"
    ],
    "@typescript-eslint/parameter-properties": [
      "warn",
      {
        "prefer": "parameter-property"
      }
    ],
    "@typescript-eslint/prefer-as-const": [
      "error"
    ],
    "@typescript-eslint/prefer-enum-initializers": [
      "off"
    ],
    "@typescript-eslint/prefer-for-of": [
      "warn"
    ],
    "@typescript-eslint/prefer-function-type": [
      "warn"
    ],
    "@typescript-eslint/prefer-includes": [
      "error"
    ],
    "@typescript-eslint/prefer-literal-enum-member": [
      "off"
    ],
    "@typescript-eslint/prefer-namespace-keyword": [
      "error"
    ],
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error"
    ],
    "@typescript-eslint/prefer-optional-chain": [
      "error"
    ],
    "@typescript-eslint/prefer-readonly": [
      "warn"
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": [
      "off"
    ],
    "@typescript-eslint/prefer-reduce-type-parameter": [
      "error"
    ],
    "@typescript-eslint/prefer-regexp-exec": [
      "warn"
    ],
    "@typescript-eslint/prefer-return-this-type": [
      "warn"
    ],
    "@typescript-eslint/prefer-string-starts-ends-with": [
      "error"
    ],
    "@typescript-eslint/prefer-ts-expect-error": [
      "error"
    ],
    "@typescript-eslint/promise-function-async": [
      "off"
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/require-array-sort-compare": [
      "warn"
    ],
    "@typescript-eslint/require-await": [
      "error"
    ],
    "@typescript-eslint/restrict-plus-operands": [
      "warn"
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "warn",
      {
        "allowBoolean": true,
        "allowNumber": true
      }
    ],
    "@typescript-eslint/return-await": [
      "error"
    ],
    "@typescript-eslint/semi": [
      "off"
    ],
    "@typescript-eslint/sort-type-union-intersection-members": [
      "off"
    ],
    "@typescript-eslint/space-before-blocks": [
      "off"
    ],
    "@typescript-eslint/space-before-function-paren": [
      "off"
    ],
    "@typescript-eslint/space-infix-ops": [
      "off"
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        "allowNullableBoolean": true,
        "allowNullableObject": true,
        "allowNullableString": true
      }
    ],
    "@typescript-eslint/switch-exhaustiveness-check": [
      "warn"
    ],
    "@typescript-eslint/triple-slash-reference": [
      "warn"
    ],
    "@typescript-eslint/type-annotation-spacing": [
      "off"
    ],
    "@typescript-eslint/typedef": [
      "off"
    ],
    "@typescript-eslint/unbound-method": [
      "error"
    ],
    "@typescript-eslint/unified-signatures": [
      "warn"
    ],
    "accessor-pairs": [
      "off"
    ],
    "array-bracket-newline": [
      "off"
    ],
    "array-bracket-spacing": [
      "off"
    ],
    "array-callback-return": [
      "warn",
      {
        "allowImplicit": false,
        "allowVoid": false,
        "checkForEach": true
      }
    ],
    "array-element-newline": [
      "off"
    ],
    "arrow-body-style": [
      "off"
    ],
    "arrow-parens": [
      "off"
    ],
    "arrow-spacing": [
      "off"
    ],
    "block-scoped-var": [
      "off"
    ],
    "block-spacing": [
      "off"
    ],
    "brace-style": [
      "off"
    ],
    "camelcase": [
      "off"
    ],
    "capitalized-comments": [
      "off"
    ],
    "class-methods-use-this": [
      "warn"
    ],
    "comma-dangle": [
      "off"
    ],
    "comma-spacing": [
      "off"
    ],
    "comma-style": [
      "off"
    ],
    "complexity": [
      "off"
    ],
    "computed-property-spacing": [
      "off"
    ],
    "consistent-return": [
      "off"
    ],
    "consistent-this": [
      "off"
    ],
    "constructor-super": [
      "off"
    ],
    "curly": [
      "off"
    ],
    "default-case": [
      "error"
    ],
    "default-case-last": [
      "error"
    ],
    "default-param-last": [
      "off"
    ],
    "dot-notation": [
      "off"
    ],
    "eol-last": [
      "off"
    ],
    "eqeqeq": [
      "error"
    ],
    "for-direction": [
      "error"
    ],
    "func-call-spacing": [
      "off"
    ],
    "func-name-matching": [
      "off"
    ],
    "func-names": [
      "warn",
      "as-needed"
    ],
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "function-call-argument-newline": [
      "off"
    ],
    "function-paren-newline": [
      "off"
    ],
    "generator-star-spacing": [
      "off"
    ],
    "getter-return": [
      "off"
    ],
    "grouped-accessor-pairs": [
      "off"
    ],
    "guard-for-in": [
      "error"
    ],
    "id-denylist": [
      "off"
    ],
    "id-length": [
      "off"
    ],
    "id-match": [
      "off"
    ],
    "implicit-arrow-linebreak": [
      "off"
    ],
    "import-access/jsdoc": [
      "error"
    ],
    "indent": [
      "off"
    ],
    "init-declarations": [
      "off"
    ],
    "jsx-quotes": [
      "off"
    ],
    "key-spacing": [
      "off"
    ],
    "keyword-spacing": [
      "off"
    ],
    "line-comment-position": [
      "off"
    ],
    "linebreak-style": [
      "off"
    ],
    "lines-around-comment": [
      "off"
    ],
    "lines-between-class-members": [
      "off"
    ],
    "logical-assignment-operators": [
      "off"
    ],
    "max-classes-per-file": [
      "off"
    ],
    "max-depth": [
      "warn",
      3
    ],
    "max-len": [
      "off"
    ],
    "max-lines": [
      "off"
    ],
    "max-lines-per-function": [
      "off"
    ],
    "max-nested-callbacks": [
      "off"
    ],
    "max-params": [
      "off"
    ],
    "max-statements": [
      "off"
    ],
    "max-statements-per-line": [
      "off"
    ],
    "multiline-comment-style": [
      "off"
    ],
    "multiline-ternary": [
      "off"
    ],
    "new-cap": [
      "off"
    ],
    "new-parens": [
      "off"
    ],
    "newline-per-chained-call": [
      "off"
    ],
    "no-alert": [
      "error"
    ],
    "no-array-constructor": [
      "off"
    ],
    "no-async-promise-executor": [
      "error"
    ],
    "no-await-in-loop": [
      "warn"
    ],
    "no-bitwise": [
      "off"
    ],
    "no-caller": [
      "error"
    ],
    "no-case-declarations": [
      "warn"
    ],
    "no-class-assign": [
      "error"
    ],
    "no-compare-neg-zero": [
      "error"
    ],
    "no-cond-assign": [
      "warn",
      "except-parens"
    ],
    "no-confusing-arrow": [
      "off"
    ],
    "no-console": [
      "warn"
    ],
    "no-const-assign": [
      "off"
    ],
    "no-constant-binary-expression": [
      "warn"
    ],
    "no-constant-condition": [
      "error"
    ],
    "no-constructor-return": [
      "error"
    ],
    "no-continue": [
      "off"
    ],
    "no-control-regex": [
      "error"
    ],
    "no-debugger": [
      "warn"
    ],
    "no-delete-var": [
      "off"
    ],
    "no-div-regex": [
      "warn"
    ],
    "no-dupe-args": [
      "off"
    ],
    "no-dupe-class-members": [
      "off"
    ],
    "no-dupe-else-if": [
      "warn"
    ],
    "no-dupe-keys": [
      "off"
    ],
    "no-duplicate-case": [
      "warn"
    ],
    "no-duplicate-imports": [
      "off"
    ],
    "no-else-return": [
      "error"
    ],
    "no-empty": [
      "warn"
    ],
    "no-empty-character-class": [
      "error"
    ],
    "no-empty-function": [
      "off"
    ],
    "no-empty-pattern": [
      "warn"
    ],
    "no-empty-static-block": [
      "warn"
    ],
    "no-eq-null": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "no-ex-assign": [
      "warn"
    ],
    "no-extend-native": [
      "error"
    ],
    "no-extra-bind": [
      "warn"
    ],
    "no-extra-boolean-cast": [
      "warn"
    ],
    "no-extra-label": [
      "off"
    ],
    "no-extra-parens": [
      "off"
    ],
    "no-extra-semi": [
      "off"
    ],
    "no-fallthrough": [
      "warn"
    ],
    "no-floating-decimal": [
      "warn"
    ],
    "no-func-assign": [
      "off"
    ],
    "no-global-assign": [
      "warn"
    ],
    "no-implicit-coercion": [
      "warn",
      {
        "boolean": false,
        "disallowTemplateShorthand": false,
        "number": true,
        "string": true
      }
    ],
    "no-implicit-globals": [
      "error"
    ],
    "no-implied-eval": [
      "off"
    ],
    "no-import-assign": [
      "off"
    ],
    "no-inline-comments": [
      "off"
    ],
    "no-inner-declarations": [
      "warn"
    ],
    "no-invalid-regexp": [
      "off"
    ],
    "no-invalid-this": [
      "error"
    ],
    "no-irregular-whitespace": [
      "warn"
    ],
    "no-iterator": [
      "off"
    ],
    "no-label-var": [
      "off"
    ],
    "no-labels": [
      "error"
    ],
    "no-lone-blocks": [
      "off"
    ],
    "no-lonely-if": [
      "off"
    ],
    "no-loop-func": [
      "off"
    ],
    "no-loss-of-precision": [
      "off"
    ],
    "no-magic-numbers": [
      "off"
    ],
    "no-misleading-character-class": [
      "error"
    ],
    "no-mixed-operators": [
      "warn",
      {
        "allowSamePrecedence": false,
        "groups": [
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&",
            "||"
          ],
          [
            "in",
            "instanceof"
          ]
        ]
      }
    ],
    "no-mixed-spaces-and-tabs": [
      "off"
    ],
    "no-multi-assign": [
      "error"
    ],
    "no-multi-spaces": [
      "warn"
    ],
    "no-multi-str": [
      "off"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxBOF": 1
      }
    ],
    "no-negated-condition": [
      "off"
    ],
    "no-nested-ternary": [
      "off"
    ],
    "no-new": [
      "error"
    ],
    "no-new-func": [
      "error"
    ],
    "no-new-native-nonconstructor": [
      "off"
    ],
    "no-new-object": [
      "error"
    ],
    "no-new-symbol": [
      "off"
    ],
    "no-new-wrappers": [
      "error"
    ],
    "no-nonoctal-decimal-escape": [
      "error"
    ],
    "no-obj-calls": [
      "off"
    ],
    "no-octal": [
      "warn"
    ],
    "no-octal-escape": [
      "error"
    ],
    "no-param-reassign": [
      "error"
    ],
    "no-plusplus": [
      "off"
    ],
    "no-promise-executor-return": [
      "error"
    ],
    "no-proto": [
      "error"
    ],
    "no-prototype-builtins": [
      "error"
    ],
    "no-redeclare": [
      "off"
    ],
    "no-regex-spaces": [
      "error"
    ],
    "no-restricted-exports": [
      "off"
    ],
    "no-restricted-globals": [
      "error",
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      "defaultstatus",
      "event",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top"
    ],
    "no-restricted-imports": [
      "off"
    ],
    "no-restricted-properties": [
      "off"
    ],
    "no-restricted-syntax": [
      "off"
    ],
    "no-return-assign": [
      "error"
    ],
    "no-return-await": [
      "off"
    ],
    "no-script-url": [
      "error"
    ],
    "no-self-assign": [
      "error"
    ],
    "no-self-compare": [
      "error"
    ],
    "no-sequences": [
      "error"
    ],
    "no-setter-return": [
      "off"
    ],
    "no-shadow": [
      "off"
    ],
    "no-shadow-restricted-names": [
      "error"
    ],
    "no-sparse-arrays": [
      "warn"
    ],
    "no-tabs": [
      "off"
    ],
    "no-template-curly-in-string": [
      "warn"
    ],
    "no-ternary": [
      "off"
    ],
    "no-this-before-super": [
      "off"
    ],
    "no-throw-literal": [
      "off"
    ],
    "no-trailing-spaces": [
      "off"
    ],
    "no-undef": [
      "off"
    ],
    "no-undef-init": [
      "warn"
    ],
    "no-undefined": [
      "off"
    ],
    "no-underscore-dangle": [
      "off"
    ],
    "no-unexpected-multiline": [
      "warn"
    ],
    "no-unmodified-loop-condition": [
      "error"
    ],
    "no-unneeded-ternary": [
      "warn"
    ],
    "no-unreachable": [
      "off"
    ],
    "no-unreachable-loop": [
      "off"
    ],
    "no-unsafe-finally": [
      "error"
    ],
    "no-unsafe-negation": [
      "off"
    ],
    "no-unsafe-optional-chaining": [
      "error"
    ],
    "no-unused-expressions": [
      "off"
    ],
    "no-unused-labels": [
      "off"
    ],
    "no-unused-private-class-members": [
      "warn"
    ],
    "no-unused-vars": [
      "off",
      {
        "args": "none",
        "ignoreRestSiblings": true
      }
    ],
    "no-use-before-define": [
      "off",
      {
        "classes": false,
        "functions": false,
        "variables": false
      }
    ],
    "no-useless-backreference": [
      "off"
    ],
    "no-useless-call": [
      "error"
    ],
    "no-useless-catch": [
      "off"
    ],
    "no-useless-computed-key": [
      "warn"
    ],
    "no-useless-concat": [
      "error"
    ],
    "no-useless-constructor": [
      "off"
    ],
    "no-useless-escape": [
      "warn"
    ],
    "no-useless-rename": [
      "warn"
    ],
    "no-useless-return": [
      "warn"
    ],
    "no-var": [
      "error"
    ],
    "no-void": [
      "off"
    ],
    "no-warning-comments": [
      "off"
    ],
    "no-whitespace-before-property": [
      "off"
    ],
    "no-with": [
      "error"
    ],
    "nonblock-statement-body-position": [
      "off"
    ],
    "object-curly-newline": [
      "off"
    ],
    "object-curly-spacing": [
      "off"
    ],
    "object-property-newline": [
      "off"
    ],
    "object-shorthand": [
      "warn"
    ],
    "one-var": [
      "warn",
      "never"
    ],
    "one-var-declaration-per-line": [
      "off"
    ],
    "operator-assignment": [
      "warn",
      "always"
    ],
    "operator-linebreak": [
      "off"
    ],
    "padded-blocks": [
      "off"
    ],
    "padding-line-between-statements": [
      "warn"
    ],
    "prefer-const": [
      "error"
    ],
    "prefer-destructuring": [
      "warn",
      {
        "array": false,
        "object": true
      }
    ],
    "prefer-exponentiation-operator": [
      "warn"
    ],
    "prefer-named-capture-group": [
      "off"
    ],
    "prefer-numeric-literals": [
      "warn"
    ],
    "prefer-object-has-own": [
      "warn"
    ],
    "prefer-object-spread": [
      "warn"
    ],
    "prefer-promise-reject-errors": [
      "error"
    ],
    "prefer-regex-literals": [
      "error"
    ],
    "prefer-rest-params": [
      "error"
    ],
    "prefer-spread": [
      "error"
    ],
    "prefer-template": [
      "warn"
    ],
    "promise/always-return": [
      "off"
    ],
    "promise/avoid-new": [
      "off"
    ],
    "promise/catch-or-return": [
      "off"
    ],
    "promise/no-callback-in-promise": [
      "off"
    ],
    "promise/no-multiple-resolved": [
      "warn"
    ],
    "promise/no-native": [
      "off"
    ],
    "promise/no-nesting": [
      "warn"
    ],
    "promise/no-new-statics": [
      "error"
    ],
    "promise/no-promise-in-callback": [
      "warn"
    ],
    "promise/no-return-in-finally": [
      "warn"
    ],
    "promise/no-return-wrap": [
      "error"
    ],
    "promise/param-names": [
      "warn"
    ],
    "promise/prefer-await-to-callbacks": [
      "warn"
    ],
    "promise/prefer-await-to-then": [
      "warn"
    ],
    "promise/valid-params": [
      "off"
    ],
    "quote-props": [
      "off"
    ],
    "quotes": [
      "off"
    ],
    "radix": [
      "off"
    ],
    "react-hooks/exhaustive-deps": [
      "error"
    ],
    "react-hooks/rules-of-hooks": [
      "error"
    ],
    "redos-detector/no-unsafe-regex": [
      "error"
    ],
    "regexp/confusing-quantifier": [
      "warn"
    ],
    "regexp/control-character-escape": [
      "error"
    ],
    "regexp/match-any": [
      "error"
    ],
    "regexp/negation": [
      "error"
    ],
    "regexp/no-dupe-characters-character-class": [
      "error"
    ],
    "regexp/no-dupe-disjunctions": [
      "error"
    ],
    "regexp/no-empty-alternative": [
      "warn"
    ],
    "regexp/no-empty-capturing-group": [
      "error"
    ],
    "regexp/no-empty-group": [
      "error"
    ],
    "regexp/no-empty-lookarounds-assertion": [
      "error"
    ],
    "regexp/no-escape-backspace": [
      "error"
    ],
    "regexp/no-invalid-regexp": [
      "error"
    ],
    "regexp/no-invisible-character": [
      "error"
    ],
    "regexp/no-lazy-ends": [
      "warn"
    ],
    "regexp/no-legacy-features": [
      "error"
    ],
    "regexp/no-non-standard-flag": [
      "error"
    ],
    "regexp/no-obscure-range": [
      "error"
    ],
    "regexp/no-optional-assertion": [
      "error"
    ],
    "regexp/no-potentially-useless-backreference": [
      "warn"
    ],
    "regexp/no-super-linear-backtracking": [
      "error"
    ],
    "regexp/no-trivially-nested-assertion": [
      "error"
    ],
    "regexp/no-trivially-nested-quantifier": [
      "error"
    ],
    "regexp/no-unused-capturing-group": [
      "error"
    ],
    "regexp/no-useless-assertions": [
      "error"
    ],
    "regexp/no-useless-backreference": [
      "error"
    ],
    "regexp/no-useless-character-class": [
      "error"
    ],
    "regexp/no-useless-dollar-replacements": [
      "error"
    ],
    "regexp/no-useless-escape": [
      "error"
    ],
    "regexp/no-useless-flag": [
      "warn"
    ],
    "regexp/no-useless-lazy": [
      "error"
    ],
    "regexp/no-useless-non-capturing-group": [
      "error"
    ],
    "regexp/no-useless-quantifier": [
      "error"
    ],
    "regexp/no-useless-range": [
      "error"
    ],
    "regexp/no-useless-two-nums-quantifier": [
      "error"
    ],
    "regexp/no-zero-quantifier": [
      "error"
    ],
    "regexp/optimal-lookaround-quantifier": [
      "warn"
    ],
    "regexp/optimal-quantifier-concatenation": [
      "error"
    ],
    "regexp/prefer-character-class": [
      "error"
    ],
    "regexp/prefer-d": [
      "error"
    ],
    "regexp/prefer-plus-quantifier": [
      "error"
    ],
    "regexp/prefer-predefined-assertion": [
      "error"
    ],
    "regexp/prefer-question-quantifier": [
      "error"
    ],
    "regexp/prefer-range": [
      "error"
    ],
    "regexp/prefer-star-quantifier": [
      "error"
    ],
    "regexp/prefer-unicode-codepoint-escapes": [
      "error"
    ],
    "regexp/prefer-w": [
      "error"
    ],
    "regexp/sort-flags": [
      "error"
    ],
    "regexp/strict": [
      "error"
    ],
    "require-atomic-updates": [
      "warn"
    ],
    "require-await": [
      "off"
    ],
    "require-unicode-regexp": [
      "error"
    ],
    "require-yield": [
      "error"
    ],
    "rest-spread-spacing": [
      "off"
    ],
    "security/detect-bidi-characters": [
      "warn"
    ],
    "security/detect-buffer-noassert": [
      "warn"
    ],
    "security/detect-child-process": [
      "warn"
    ],
    "security/detect-disable-mustache-escape": [
      "warn"
    ],
    "security/detect-eval-with-expression": [
      "warn"
    ],
    "security/detect-new-buffer": [
      "warn"
    ],
    "security/detect-no-csrf-before-method-override": [
      "warn"
    ],
    "security/detect-non-literal-fs-filename": [
      "warn"
    ],
    "security/detect-non-literal-regexp": [
      "warn"
    ],
    "security/detect-non-literal-require": [
      "warn"
    ],
    "security/detect-object-injection": [
      "warn"
    ],
    "security/detect-possible-timing-attacks": [
      "warn"
    ],
    "security/detect-pseudoRandomBytes": [
      "warn"
    ],
    "security/detect-unsafe-regex": [
      "warn"
    ],
    "semi": [
      "off"
    ],
    "semi-spacing": [
      "off"
    ],
    "semi-style": [
      "off"
    ],
    "simple-import-sort/exports": [
      "warn"
    ],
    "simple-import-sort/imports": [
      "warn"
    ],
    "sonarjs/cognitive-complexity": [
      "error",
      32
    ],
    "sonarjs/elseif-without-else": [
      "off"
    ],
    "sonarjs/max-switch-cases": [
      "error",
      15
    ],
    "sonarjs/no-all-duplicated-branches": [
      "error"
    ],
    "sonarjs/no-collapsible-if": [
      "error"
    ],
    "sonarjs/no-collection-size-mischeck": [
      "error"
    ],
    "sonarjs/no-duplicate-string": [
      "error"
    ],
    "sonarjs/no-duplicated-branches": [
      "error"
    ],
    "sonarjs/no-element-overwrite": [
      "error"
    ],
    "sonarjs/no-empty-collection": [
      "error"
    ],
    "sonarjs/no-extra-arguments": [
      "error"
    ],
    "sonarjs/no-gratuitous-expressions": [
      "error"
    ],
    "sonarjs/no-identical-conditions": [
      "error"
    ],
    "sonarjs/no-identical-expressions": [
      "error"
    ],
    "sonarjs/no-identical-functions": [
      "error"
    ],
    "sonarjs/no-ignored-return": [
      "error"
    ],
    "sonarjs/no-inverted-boolean-check": [
      "off"
    ],
    "sonarjs/no-nested-switch": [
      "error"
    ],
    "sonarjs/no-nested-template-literals": [
      "error"
    ],
    "sonarjs/no-one-iteration-loop": [
      "error"
    ],
    "sonarjs/no-redundant-boolean": [
      "error"
    ],
    "sonarjs/no-redundant-jump": [
      "error"
    ],
    "sonarjs/no-same-line-conditional": [
      "error"
    ],
    "sonarjs/no-small-switch": [
      "error"
    ],
    "sonarjs/no-unused-collection": [
      "error"
    ],
    "sonarjs/no-use-of-empty-return-value": [
      "error"
    ],
    "sonarjs/no-useless-catch": [
      "error"
    ],
    "sonarjs/non-existent-operator": [
      "error"
    ],
    "sonarjs/prefer-immediate-return": [
      "error"
    ],
    "sonarjs/prefer-object-literal": [
      "error"
    ],
    "sonarjs/prefer-single-boolean-return": [
      "error"
    ],
    "sonarjs/prefer-while": [
      "error"
    ],
    "sort-imports": [
      "off"
    ],
    "sort-keys": [
      "off"
    ],
    "sort-vars": [
      "off"
    ],
    "space-before-blocks": [
      "off"
    ],
    "space-before-function-paren": [
      "off"
    ],
    "space-in-parens": [
      "off"
    ],
    "space-infix-ops": [
      "off"
    ],
    "space-unary-ops": [
      "off"
    ],
    "spaced-comment": [
      "warn",
      "always"
    ],
    "strict": [
      "off"
    ],
    "switch-colon-spacing": [
      "off"
    ],
    "symbol-description": [
      "error"
    ],
    "tailwindcss/classnames-order": [
      "warn"
    ],
    "tailwindcss/enforces-negative-arbitrary-values": [
      "warn"
    ],
    "tailwindcss/enforces-shorthand": [
      "warn"
    ],
    "tailwindcss/migration-from-tailwind-2": [
      "warn"
    ],
    "tailwindcss/no-arbitrary-value": [
      "off"
    ],
    "tailwindcss/no-contradicting-classname": [
      "error"
    ],
    "tailwindcss/no-custom-classname": [
      "warn"
    ],
    "template-curly-spacing": [
      "off"
    ],
    "template-tag-spacing": [
      "off"
    ],
    "unicode-bom": [
      "off"
    ],
    "unicorn/better-regex": [
      "error"
    ],
    "unicorn/catch-error-name": [
      "warn"
    ],
    "unicorn/consistent-destructuring": [
      "error"
    ],
    "unicorn/consistent-function-scoping": [
      "warn"
    ],
    "unicorn/custom-error-definition": [
      "warn"
    ],
    "unicorn/empty-brace-spaces": [
      "off"
    ],
    "unicorn/error-message": [
      "error"
    ],
    "unicorn/escape-case": [
      "error"
    ],
    "unicorn/expiring-todo-comments": [
      "off"
    ],
    "unicorn/explicit-length-check": [
      "error"
    ],
    "unicorn/filename-case": [
      "off"
    ],
    "unicorn/import-style": [
      "off"
    ],
    "unicorn/new-for-builtins": [
      "off"
    ],
    "unicorn/no-abusive-eslint-disable": [
      "error"
    ],
    "unicorn/no-array-callback-reference": [
      "off"
    ],
    "unicorn/no-array-for-each": [
      "off"
    ],
    "unicorn/no-array-method-this-argument": [
      "off"
    ],
    "unicorn/no-array-push-push": [
      "warn"
    ],
    "unicorn/no-array-reduce": [
      "off"
    ],
    "unicorn/no-await-expression-member": [
      "error"
    ],
    "unicorn/no-console-spaces": [
      "error"
    ],
    "unicorn/no-document-cookie": [
      "warn"
    ],
    "unicorn/no-empty-file": [
      "off"
    ],
    "unicorn/no-for-loop": [
      "off"
    ],
    "unicorn/no-hex-escape": [
      "error"
    ],
    "unicorn/no-instanceof-array": [
      "error"
    ],
    "unicorn/no-invalid-remove-event-listener": [
      "error"
    ],
    "unicorn/no-keyword-prefix": [
      "off"
    ],
    "unicorn/no-lonely-if": [
      "warn"
    ],
    "unicorn/no-negated-condition": [
      "warn"
    ],
    "unicorn/no-nested-ternary": [
      "off"
    ],
    "unicorn/no-new-array": [
      "error"
    ],
    "unicorn/no-new-buffer": [
      "error"
    ],
    "unicorn/no-null": [
      "off"
    ],
    "unicorn/no-object-as-default-parameter": [
      "warn"
    ],
    "unicorn/no-process-exit": [
      "error"
    ],
    "unicorn/no-static-only-class": [
      "error"
    ],
    "unicorn/no-thenable": [
      "warn"
    ],
    "unicorn/no-this-assignment": [
      "warn"
    ],
    "unicorn/no-typeof-undefined": [
      "warn"
    ],
    "unicorn/no-unnecessary-await": [
      "off"
    ],
    "unicorn/no-unreadable-array-destructuring": [
      "warn"
    ],
    "unicorn/no-unreadable-iife": [
      "warn"
    ],
    "unicorn/no-unsafe-regex": [
      "error"
    ],
    "unicorn/no-unused-properties": [
      "warn"
    ],
    "unicorn/no-useless-fallback-in-spread": [
      "warn"
    ],
    "unicorn/no-useless-length-check": [
      "error"
    ],
    "unicorn/no-useless-promise-resolve-reject": [
      "warn"
    ],
    "unicorn/no-useless-spread": [
      "error"
    ],
    "unicorn/no-useless-switch-case": [
      "warn"
    ],
    "unicorn/no-useless-undefined": [
      "error"
    ],
    "unicorn/no-zero-fractions": [
      "error"
    ],
    "unicorn/number-literal-case": [
      "off"
    ],
    "unicorn/numeric-separators-style": [
      "off"
    ],
    "unicorn/prefer-add-event-listener": [
      "error"
    ],
    "unicorn/prefer-array-find": [
      "error"
    ],
    "unicorn/prefer-array-flat": [
      "warn"
    ],
    "unicorn/prefer-array-flat-map": [
      "error"
    ],
    "unicorn/prefer-array-index-of": [
      "warn"
    ],
    "unicorn/prefer-array-some": [
      "warn"
    ],
    "unicorn/prefer-at": [
      "off"
    ],
    "unicorn/prefer-code-point": [
      "warn"
    ],
    "unicorn/prefer-date-now": [
      "warn"
    ],
    "unicorn/prefer-default-parameters": [
      "warn"
    ],
    "unicorn/prefer-dom-node-append": [
      "error"
    ],
    "unicorn/prefer-dom-node-dataset": [
      "off"
    ],
    "unicorn/prefer-dom-node-remove": [
      "error"
    ],
    "unicorn/prefer-dom-node-text-content": [
      "error"
    ],
    "unicorn/prefer-event-target": [
      "warn"
    ],
    "unicorn/prefer-export-from": [
      "warn"
    ],
    "unicorn/prefer-includes": [
      "off"
    ],
    "unicorn/prefer-json-parse-buffer": [
      "warn"
    ],
    "unicorn/prefer-keyboard-event-key": [
      "error"
    ],
    "unicorn/prefer-logical-operator-over-ternary": [
      "warn"
    ],
    "unicorn/prefer-math-trunc": [
      "off"
    ],
    "unicorn/prefer-modern-dom-apis": [
      "error"
    ],
    "unicorn/prefer-modern-math-apis": [
      "warn"
    ],
    "unicorn/prefer-module": [
      "off"
    ],
    "unicorn/prefer-native-coercion-functions": [
      "error"
    ],
    "unicorn/prefer-negative-index": [
      "error"
    ],
    "unicorn/prefer-node-protocol": [
      "off"
    ],
    "unicorn/prefer-number-properties": [
      "warn",
      {
        "checkInfinity": false
      }
    ],
    "unicorn/prefer-object-from-entries": [
      "error"
    ],
    "unicorn/prefer-optional-catch-binding": [
      "error"
    ],
    "unicorn/prefer-prototype-methods": [
      "warn"
    ],
    "unicorn/prefer-query-selector": [
      "error"
    ],
    "unicorn/prefer-reflect-apply": [
      "error"
    ],
    "unicorn/prefer-regexp-test": [
      "error"
    ],
    "unicorn/prefer-set-has": [
      "error"
    ],
    "unicorn/prefer-set-size": [
      "warn"
    ],
    "unicorn/prefer-spread": [
      "off"
    ],
    "unicorn/prefer-string-replace-all": [
      "warn"
    ],
    "unicorn/prefer-string-slice": [
      "error"
    ],
    "unicorn/prefer-string-starts-ends-with": [
      "off"
    ],
    "unicorn/prefer-string-trim-start-end": [
      "error"
    ],
    "unicorn/prefer-switch": [
      "error",
      {
        "emptyDefaultCase": "no-default-comment",
        "minimumCases": 3
      }
    ],
    "unicorn/prefer-ternary": [
      "off"
    ],
    "unicorn/prefer-top-level-await": [
      "off"
    ],
    "unicorn/prefer-type-error": [
      "error"
    ],
    "unicorn/prevent-abbreviations": [
      "off"
    ],
    "unicorn/relative-url-style": [
      "warn"
    ],
    "unicorn/require-array-join-separator": [
      "warn"
    ],
    "unicorn/require-number-to-fixed-digits-argument": [
      "warn"
    ],
    "unicorn/require-post-message-target-origin": [
      "error"
    ],
    "unicorn/string-content": [
      "off"
    ],
    "unicorn/switch-case-braces": [
      "warn"
    ],
    "unicorn/template-indent": [
      "warn"
    ],
    "unicorn/text-encoding-identifier-case": [
      "off"
    ],
    "unicorn/throw-new-error": [
      "error"
    ],
    "use-isnan": [
      "off"
    ],
    "valid-typeof": [
      "off"
    ],
    "vars-on-top": [
      "off"
    ],
    "wrap-iife": [
      "warn"
    ],
    "wrap-regex": [
      "off"
    ],
    "yield-star-spacing": [
      "off"
    ],
    "yoda": [
      "warn"
    ]
}
```
