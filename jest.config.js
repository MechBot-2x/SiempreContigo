// jest.config.js
module.exports = {
  // Configuración de transformación para que Jest use Babel.
  transform: {
    '^.+\\.js$': 'babel-jest', // Transforma todos los archivos .js usando babel-jest.
  },
  
  // Patrones para ignorar la transformación de ciertos módulos.
  transformIgnorePatterns: [
    '/node_modules/(?!(@babel|@some-other-module))', // Permite la transformación de ciertos módulos.
    '\\.pnp\\.(js|cjs|mjs|ts|mts)$', // Ignora los archivos de PnP para evitar errores al cargar módulos.
  ],
  
  // Extensiones de archivo que Jest reconocerá durante las pruebas.
  moduleFileExtensions: [
    'js',   // Archivos JavaScript.
    'mjs',  // Archivos JavaScript con módulo ECMAScript.
    'cjs',  // Archivos JavaScript de módulos comunes.
    'jsx',  // Archivos de JavaScript con JSX.
    'ts',   // Archivos TypeScript.
    'tsx',  // Archivos TypeScript con JSX.
    'json', // Archivos JSON.
    'node', // Archivos Node.js específicos.
  ],
  
  // Entorno de ejecución para las pruebas.
  testEnvironment: 'node', // Configura Jest para correr tests en un entorno de Node.js.
  
  // Configuración de recursos de trabajo para las pruebas.
  maxWorkers: 1, // Limita la ejecución a un solo worker de pruebas.
  workerIdleMemoryLimit: '512MB', // Limita la memoria máxima para cada worker.

  // Configuración de cobertura de pruebas.
  collectCoverage: true, // Habilita la recolección de cobertura de código.
  coverageDirectory: 'coverage', // Especifica el directorio donde se almacenarán los resultados de cobertura.
  coverageReporters: ['text', 'lcov'], // Reportes de cobertura en formato de texto y lcov.

  // Selecciona qué archivos de pruebas incluir.
  testMatch: ['**/tests/**/*.test.js'], // Define la ruta y los patrones de los archivos de prueba.
};
