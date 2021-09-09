module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['vue'],

  extends: [
    '@programic/eslint-config-base',
    'plugin:vue/vue3-recommended',
  ],

  overrides: [{
    files: ['*.vue'],
    rules: { indent: 'off' },
  }],

  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1,
    }],
    'vue/no-v-html': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always',
      },
      svg: 'never',
      math: 'never',
    }],
  },
};
