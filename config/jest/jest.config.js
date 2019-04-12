module.exports = {
  rootDir: '../../',
  moduleFileExtensions: ['js','jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/config/jest/__mocks__/styleMock.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/config/jest/setupTests.js'
  ],
  testEnvironment: "jest-environment-jsdom-global",
  collectCoverage: true,
  coverageReporters: ["text", "text-summary"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }

}

