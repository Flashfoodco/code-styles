module.exports = {
  env: {
    es2022: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:markdown/recommended',
    'prettier'
  ],
  plugins: ['html', 'jsdoc', 'markdown'],
  root: true,
  rules: {
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    complexity: ['error', 15],
    curly: ['error', 'all'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    indent: 'off',
    'guard-for-in': 'error',
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false
      }
    ],
    'keyword-spacing': 'error',
    'max-len': [
      'error',
      120,
      {
        ignoreComments: true
      }
    ],
    'no-bitwise': 'off',
    'new-cap': 'off',
    'no-caller': 'error',
    'no-confusing-arrow': ['error', { allowParens: true, onlyOneSimpleParam: false }],
    'no-empty': 'error',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'error',
    'no-new': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'one-var': ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': [
      'error',
      {
        nonwords: false
      }
    ],
    strict: ['error', 'safe'],
    'valid-jsdoc': 'error',
    'wrap-iife': ['error', 'any']
  }
};
