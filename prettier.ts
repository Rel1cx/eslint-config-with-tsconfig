import type { Options } from "prettier";

const config: Options = {
  printWidth: 120,
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 4,
  trailingComma: "all",
  arrowParens: "always",
  plugins: ["prettier-plugin-curly", "prettier-plugin-packagejson"],
};

export = config;
