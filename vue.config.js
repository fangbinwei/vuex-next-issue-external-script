/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  lintOnSave: true,
  configureWebpack () {
    return {
      externalsType: 'script',
      externals: {
        vue: ['https://unpkg.com/vue@3.0.4/dist/vue.global.js', 'Vue']
      }
    }
  }
}
