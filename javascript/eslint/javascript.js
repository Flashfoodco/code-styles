module.exports = {
  extends: './_common.js',
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      extends: ['eslint:recommended', 'prettier'],
    },
  ],
};
