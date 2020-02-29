const path = require('path')

function resolve(src) {
  return path.resolve(__dirname, src)
}

module.exports = {
  mode: 'production',
  entry: {
    'vue-plyr': resolve('src/vue-plyr.js'),
    'vue-plyr-ssr': resolve('src/vue-plyr.ssr.js'),
    'vue-plyr-nuxt': resolve('src/extra/nuxt/vue-plyr.nuxt.js')
  },
  output: {
    filename: '[name].min.js',
    path: resolve('dist')
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
