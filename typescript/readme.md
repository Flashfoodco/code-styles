# TypeScript

## Installation

```
npm install --save-dev prettier-eslint-cli @flashfoodco/typescript-style
```

### Configure Style

```jsonc
// package.json
{
  "scripts": {
    "lint": "npx prettier-eslint-cli <files>"
  },
  "prettier": "@flashfoodco/typescript-style/prettier",
  "eslint": {
    "extends": [
      "@flashfoodco/typescript-style"
    ]
  }
}
```

### Setup Husky Hooks

...
