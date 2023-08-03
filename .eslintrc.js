module.exports = {
  extends: ["react-app", "prettier"],
  plugins: ["grapes"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "grapes/no-internal-import": "error",
    "import/no-anonymous-default-export": "off", // Storybook uses these
  },
};
