// babel.config.js
/*
Explicación:

presets (fuera de env): Aquí pones los presets que son comunes a todos los entornos (en tu caso, @babel/preset-react).
plugins (fuera de env): Lo mismo para los plugins comunes.
env object: 
  Contiene objetos con nombres de entorno (ej. development, production, test). 
  Cuando Babel se ejecuta, busca la variable de entorno BABEL_ENV. Si no está definida, busca NODE_ENV. Si tampoco está, por defecto es development.
  Cuando BABEL_ENV o NODE_ENV coincidan con una de las claves dentro de env, Babel fusionará esa configuración con la configuración base.

*/
module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    // Plugins comunes para desarrollo y producción
  ],
  env: {
    development: {
      // targets: { esmodules: true } podría ir aquí si usas webpack-dev-server
    },
    production: {
      presets: [
        ['@babel/preset-env', {
          // Targets para navegadores, quizás desde .browserslistrc
          // Si no tienes un .browserslistrc, puedes definir aquí:
          // targets: "> 0.25%, not dead", // Por ejemplo
          // o especificar versiones de navegadores concretas
          // targets: { chrome: '80', firefox: '78' }
        }]
      ],
      plugins: [
        // Plugins para optimización de producción (ej. tree shaking)
      ]
    },
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: { node: 'current' }
        }]
      ],
      plugins: [
        // Plugins específicos para tests (ej. babel-plugin-transform-require-context)
      ]
    }
  }
};