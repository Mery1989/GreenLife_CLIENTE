module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdon",
  setupFilesAfterEnv:{ "<rootDir>/jest.setup.js"},
};
