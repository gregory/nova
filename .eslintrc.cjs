/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "hermes-eslint",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  globals: {
    process: true,
  },

  // Base config
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["**/*.{js,mjs}"],
      rules: {
        //'import/no-unresolved': 0,
        // DOC: https://eslint.org/docs/latest/rules/no-unused-vars
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "no-unused-vars": [
          "error",
          {
            varsIgnorePattern: "^_",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
      },
    },

    // Node
    {
      files: [".eslintrc.cjs"],
      env: {
        node: true,
      },
    },
  ],
};
