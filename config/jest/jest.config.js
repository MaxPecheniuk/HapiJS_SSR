module.exports = {
  testEnvironment: "node",
  rootDir: '../../',
  moduleFileExtensions: ['js','jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/config/jest/__mocks__/styleMock.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/config/jest/setupTests.js'
  ],

  collectCoverage: true,
  coverageReporters: ["text", "text-summary"],
  coveragePathIgnorePatterns: ['<rootDir>/src/server/config/'],
  coverageThreshold: {
    global: {
      branches: 62,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }

}

