module.exports = {
  roots: ['<rootDir>/src'],
  projects: [
    {
      displayName: 'unit',
      testMatch: ['**/unit-tests/**/*.test.{js,jsx}'],
      setupFiles: ['./jest.setup.js', './jest.setup.unit-test.js'],
      setupFilesAfterEnv: ['dotenv/config'],
      testEnvironment: 'jsdom',
      moduleNameMapper: {
        '^config/env$': '<rootDir>/src/common/config/env.testing.js',
        '^config/(.*)$': '<rootDir>/src/common/config/$1',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      },
    },
    {
      displayName: 'integration',
      testMatch: ['**/integration-tests/**/*.test.{js,jsx}'],
      setupFiles: ['./jest.setup.js'],
      setupFilesAfterEnv: ['dotenv/config'],
      testEnvironment: 'jsdom',
      moduleNameMapper: {
        '^config/env$': '<rootDir>/src/common/config/env.testing.js',
        '^config/(.*)$': '<rootDir>/src/common/config/$1',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      },
    },
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  extensionsToTreatAsEsm: ['.jsx'],
  moduleFileExtensions: ['js', 'jsx'],
};