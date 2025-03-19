module.exports = {
  // Especifica el entorno de prueba como Node.js
  testEnvironment: 'node',

  // Configura Jest para usar babel-jest para transformar archivos JavaScript
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  // Ignora la transformación de todos los módulos en node_modules,
  // excepto los módulos @babel y otros módulos especificados.
  transformIgnorePatterns: [
    '/node_modules/(?!(@babel|@some-other-module))',
    '\\.pnp\\.(js|cjs|mjs|ts|mts)$',
  ],

  // Define las extensiones de archivo que Jest debe procesar como módulos
  moduleFileExtensions: [
    "js",    // Archivos JavaScript
    "mjs",   // Archivos JavaScript de módulos
    "cjs",   // Archivos JavaScript de CommonJS
    "jsx",   // Archivos React JSX
    "ts",    // Archivos TypeScript
    "tsx",   // Archivos React TypeScript
    "json",  // Archivos JSON
    "node",  // Archivos Node.js
    ".mjs"   // Archivos JavaScript de módulos (con punto)
  ],
};
