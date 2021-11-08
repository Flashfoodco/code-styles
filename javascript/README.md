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

## Configure Style

```jsonc
// package.json
{
  "scripts": {
    "style:eslint": "eslint '<files>'",
    "style:prettier": "prettier '<files>'"
  },
  "prettier": "@flashfoodco/javascript-style/prettier",
  "eslintConfig": {
    "extends": [
      "./node_modules/@flashfoodco/javascript-style/eslint/javascript.js", // JavaScript
      "./node_modules/@flashfoodco/javascript-style/eslint/typescript.js" // TypeScript
    ]
  },
}
```

## Command Line

```sh
npx eslint '<files>' --fix
npx prettier '<files>' --write
```

See [ESLint CLI](https://eslint.org/docs/user-guide/command-line-interface) and [Prettier CLI](https://prettier.io/docs/en/cli.html).

## Setup Husky Hooks

It is recommended to use `lint-staged` with `husky` hooks to lint staged changes before commits automatically.

See: https://typicode.github.io/husky/#/?id=usage

```jsonc
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.(js|ts)": [
      "npx prettier --write",
      "npx eslint --fix"
    ]
  },
}

```

## Contributing

ESLint configurations are split up into JavaScript and TypeScript specific files. Both extend from the `_common.js` file, so any shared configs could go there.

## Publishing

Increment the version inside `package.json` and merge a PR into the trunk branch. Github actions will automatically publish to the GPR.
