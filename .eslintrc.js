module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    test: "readonly",
    React: "readonly",
    expect: "readonly",
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "react-app"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/require-default-props": [
      "error",
      { ignoreFunctionalComponents: true },
    ],
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never" },
    ],
  },
  plugins: ["prettier"],
};
