// https://eslint.org/docs/user-guide/configuring
const ERROR = 2
const WARN = 1
const OFF = 0

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': OFF,
    'comma-dangle': OFF,
    'space-before-function-paren': OFF,
    // allow async-await
    'generator-star-spacing': OFF,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? ERROR : OFF
  }
}
