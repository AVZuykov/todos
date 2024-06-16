import type { Config } from 'jest'

const config: Config = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Use babel-jest to transform files ending in .ts, .tsx, .js, and .jsx
  },
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  verbose: true,
  testEnvironment: 'jsdom',
  bail: 1,
}

export default config
