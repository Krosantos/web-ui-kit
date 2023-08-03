module.exports = {
  extends: ["react-app", "prettier", "plugin:storybook/recommended"],
  plugins: ["grapes"],
  settings: {
    react: {
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "grapes/no-internal-import": "error",
    "import/no-anonymous-default-export": "off" // Storybook uses these
  }
};