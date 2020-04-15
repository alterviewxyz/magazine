/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  typescript: {
    enableTypeChecking: false,
  },
  webpack: {
    alias: {
      "@lib": path.resolve(__dirname, "src/lib/"),
    },
  },
};
