module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@babel|@some-other-module))',
    '\\.pnp\\.(js|cjs|mjs|ts|mts)$',
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
    ".mjs"
  ],
  testEnvironment: 'node',
  maxWorkers: 1,
  workerIdleMemoryLimit: '512MB',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  testMatch: ['**/tests/**/*.test.js'],
};
