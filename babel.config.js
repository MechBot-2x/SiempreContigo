// babel.config.js
module.exports = {
  // Definición de presets que determinan cómo se transformará el código.
  presets: [
    [
      '@babel/preset-env', // Preset que permite transpilar código ES6+ a una versión compatible con el entorno deseado.
      {
        // Objetivo de los entornos de ejecución.
        targets: {
          // Indica que se debe utilizar la versión actual de Node.js.
          node: 'current', // Permite a Babel identificar qué versiones de Node son compatibles en el momento actual.
        },
        // Otras configuraciones opcionales.
        useBuiltIns: 'entry', // Permite usar polyfills de acuerdo con el entorno de destino.
        corejs: 3, // Especifica qué versión de Core-js se utilizará.
        loose: true, // Activa las transformaciones más sueltas para algunas características de ES6+, lo que puede ayudar a reducir el tamaño del código.
      },
    ],
  ],

  // Plugins que extienden la funcionalidad de Babel.
  plugins: [
    // Plugin que permite transformar módulos ES a CommonJS.
    '@babel/plugin-transform-modules-commonjs',
    // Aquí puedes añadir otros plugins adicionales según tus necesidades.
  ],

  // Opciones avanzadas pueden incluir configuraciones para ignorar archivos específicos, entre otras personalizaciones.
  ignore: [
    // Ignorar ciertos archivos o carpetas específicas si es necesario.
    '**/*.spec.js', // Por ejemplo, ignorar archivos de prueba.
  ],
};
