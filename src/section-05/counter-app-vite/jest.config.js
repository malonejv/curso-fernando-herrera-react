module.exports = {
  roots: ['<rootDir>/src'],
  projects: [
    {
      displayName: 'unit',
      testMatch: ['**/unit-tests/**/*.test.{js,jsx}'],
      setupFiles: ['./jest.setup.js'],
      setupFilesAfterEnv: ['dotenv/config'],
      testEnvironment: 'jsdom',
      moduleNameMapper: {
        '^config/env$': '<rootDir>/src/config/env.testing.js',
        '^config/(.*)$': '<rootDir>/src/config/$1'
      },
    },
    {
      displayName: 'integration',
      testMatch: ['**/integration-tests/**/*.test.{js,jsx}'],
      setupFiles: ['./jest.setup.js'],
      setupFilesAfterEnv: ['dotenv/config'],
      testEnvironment: 'jsdom',
      moduleNameMapper: {
        '^config/env$': '<rootDir>/src/config/env.testing.js',
        '^config/(.*)$': '<rootDir>/src/config/$1'
      },
    },
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  extensionsToTreatAsEsm: ['.jsx'],
  moduleFileExtensions: ['js', 'jsx'],
  // transformIgnorePatterns: [
  //   'node_modules/(?!whatwg-fetch)',
  // ],
};