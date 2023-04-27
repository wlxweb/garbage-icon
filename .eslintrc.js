module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-filter': 'off',
    'vue/no-v-html': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
