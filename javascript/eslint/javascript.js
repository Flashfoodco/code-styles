module.exports = {
  extends: './_common.js',
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
      }
    }
  ]
};
