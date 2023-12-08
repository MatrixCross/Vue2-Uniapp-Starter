module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 配置js全局变量，因为是uni-app，全局的uni是不需要引入的，还有5+的plus对象
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly',
    process: 'readonly',
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier', 'airbnb'],
  plugins: ['vue', 'prettier'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'prettier/prettier': [
      'off',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'vue/max-attributes-per-line': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/name-property-casing': [0, 'PascalCase'],
    'vue/no-v-html': 0,
    'vue/no-v-text-v-html-on-component': 0,
    'accessor-pairs': 2,
    semi: 0,
    'no-console': 0,
    'import/prefer-default-export': 1,
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
    'arrow-parens': 0,
    'import/extensions': 0,
    'object-curly-newline': 0,
  },
}
