const axeContext = null; // { exclude: [['select']] }; example of Context
const axeOptions: any = {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]
  },
  rules: {
    "color-contrast": { enabled: false },
    "valid-lang": { enabled: false }
  },
  resultTypes: ["violations", "incomplete", "inapplicable"],
  reporter: "v2"
};

export { axeContext, axeOptions };