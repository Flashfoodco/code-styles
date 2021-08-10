# JavaScript

> Code style for JavaScript and TypeScript

## Installation

```
npm install --save-dev prettier-eslint-cli @flashfoodco/javascript-style
```

### Configure Style

```jsonc
// package.json
{
  "scripts": {
    "lint": "npx prettier-eslint-cli <files>"
  },
  "prettier": "@flashfoodco/javascript-style/prettier",
  "eslint": {
    "extends": [
      "@flashfoodco/javascript-style",            // JavaScript
      "@flashfoodco/javascript-style/typescript"  // TypeScript
    ]
  }
}
```

### Setup Husky Hooks

...
