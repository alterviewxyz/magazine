module.exports = {
  globals: {
    skipBabel: true,
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/output/", ".cache"],
};
