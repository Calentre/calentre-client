import nextJest from 'next/jest.js';

// For reference see : https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/src/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/__tests__/testUtils/', '.*constant(s)?.ts'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 85,
      lines: 95,
      statements: 90,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
  preset: 'ts-jest',
  testRegex: '__tests__/.*test.(ts|tsx)$',
  globals: {
    'ts-jest': {
      verbose: true,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
