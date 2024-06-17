import type { Config } from 'jest'

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: {
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
  },
  verbose: true,
  testEnvironment: 'jsdom',
  bail: 1,
}

export default config
