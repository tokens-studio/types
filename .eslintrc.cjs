module.exports = {
  extends: ['@open-wc/eslint-config', 'eslint-config-prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['scripts/**/*'],
      },
    ],
  },
};
