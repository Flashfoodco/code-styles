# JavaScript

> Code style for JavaScript and TypeScript

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
