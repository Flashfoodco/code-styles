# JavaScript

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
      "@flashfoodco/javascript-style"
    ]
  }
}
```

### Setup Husky Hooks

...
