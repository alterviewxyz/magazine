/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    tailwindcss(`${__dirname}/tailwind.config.js`),
    require("postcss-nested"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
