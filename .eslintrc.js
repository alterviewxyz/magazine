"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": 1,
    "sort-keys": 1,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-ordering": [
      2,
      {
        default: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
        ],
      },
    ],
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": ["error"],
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
