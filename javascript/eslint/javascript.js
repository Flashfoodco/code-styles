module.exports = {
  extends: './_common.js',
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      extends: ['eslint:recommended', 'prettier'],
      rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
  ],
};
