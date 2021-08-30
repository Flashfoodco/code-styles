# JavaScript

> Code style for JavaScript and TypeScript

## Prerequisites

This package is deployed to GitHub packages. In order to use it you must take some steps.

Authenticate with GitHub Packages:

```
npm login --scope=@flashfoodco --registry=https://npm.pkg.github.com

> Username: YOUR GITHUB USERNAME
> Password: YOUR GITHUB TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

Create a `.npmrc` file in the repo you want to use this package and add this line:

```
@flashfoodco:registry=https://npm.pkg.github.com
```

## Installation

```
npm install --save-dev eslint prettier @flashfoodco/javascript-style
```

### Configure Style

```jsonc
// package.json
{
  "scripts": {
    "lint": "npx @flashfoodco/javascript-style <files>"
  },
  "prettier": "@flashfoodco/javascript-style/prettier",
  "eslintConfig": {
    "extends": [
      "@flashfoodco/javascript-style", // JavaScript
      "@flashfoodco/javascript-style/typescript" // TypeScript
    ]
  }
}
```

### Setup Husky Hooks

It is recommended to use `lint-staged` with `husky` hooks to lint staged changes before commits automatically.
