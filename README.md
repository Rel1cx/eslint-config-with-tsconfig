# Basic front-end configuration

This is a basic front-end configuration for a new project. It includes:

- eslintrc, supporting modern typescript and react
- tsconfig, enhanced with some strict rules

## Install

Create a git submodule in your project:

```bash
git submodule add https://github.com/Mikufied/config config
```

Install it as a dev dependency:

```bash
pnpm add file:config -D
```

## Usage

After submodule cloned, import the configuration files in your project:

At `project/.eslintrc.js`

```ts
const config = require('@mikufied/config/eslintrc.cjs')

module.exports = config
```

At `project/tsconfig.json`

```json
{
  "extends": "@mikufied/config/tsconfig.base.json",
  "//": "Put your own configuration here..."
}
```

## Note

You can always synchronize or modify the configuration in the config directory on demand for maximum customizability.
