module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest', // Usar Babel para transpilar archivos JS
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@babel|@some-other-module))', // Ignorar node_modules, excepto @babel y otros módulos específicos
    '\\.pnp\\.(js|cjs|mjs|ts|mts)$', // Ignorar archivos PnP
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
  testEnvironment: 'node', // Especificar el entorno de pruebas (Node.js)
  maxWorkers: 1, // Limitar el número de workers para evitar problemas de concurrencia
  retryLimit: 3, // Número de reintentos para pruebas fallidas
  workerIdleMemoryLimit: '512MB', // Limitar el uso de memoria por worker
  collectCoverage: true, // Habilitar la generación de informes de cobertura
  coverageDirectory: 'coverage', // Directorio para los informes de cobertura
  coverageReporters: ['text', 'lcov'], // Formatos de informe de cobertura
  testMatch: ['**/tests/**/*.test.js'], // Patrón para encontrar archivos de prueba
};
