module.exports = {
  coverageDirectory: "coverage",
  coverageReporters: ["json-summary", "text"],
  globals: {
    skipBabel: true,
  },
  preset: "ts-jest",
  roots: ["<rootDir>packages"],
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/*.+(ts|tsx|js)", "**/*.test.+(ts|tsx|js)"],
  testPathIgnorePatterns: ["/node_modules/", "/output/", ".cache"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
