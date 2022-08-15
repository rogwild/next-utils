module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [`plugin:react/recommended`],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: `module`,
  },
  plugins: [`react`],
  rules: {
    "comma-dangle": [`off`],
    quotes: [`off`, `backtick`],
    semi: [`off`],
    "react/react-in-jsx-scope": [`off`],
    "no-empty-pattern": [`off`],
    "react/display-name": [`off`],
    "react/prop-types": [`off`],
    "no-unused-vars": [`warn`],
    "react/no-unescaped-entities": [`off`],
    "array-callback-return": [`off`],
    indent: [`off`],
    "multiline-ternary": [`off`],
    "no-loss-of-precision": [`off`],
    "no-unused-vars": [`off`],
  },
};
