const unocss = require('unocss-webpack-uniapp2').default
module.exports = {
  transpileDependencies: ['uview-ui'],
  configureWebpack: {
    plugins: [unocss()],
  },
  devServer: {
    // 开发服务器配置
    // https://cli.vuejs.org/config/#devserver
    // https://webpack.js.org/configuration/dev-server/
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/devServer.js
    // https://cli.vuejs.org/config/#devserver-proxy
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
