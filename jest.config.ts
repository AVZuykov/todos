import type { Config } from 'jest'

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  verbose: true,
  testEnvironment: 'jsdom',
  bail: 1,
}

export default config
