const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  'publicPath': './', // 根域上下文目录
  'outputDir': 'dist', // 构建输出目录
  'assetsDir': 'assets', // 静态资源目录 (js, css, img, fonts)
  'lintOnSave': false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  'runtimeCompiler': true, // 运行时版本是否需要编译
  'transpileDependencies': [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  'productionSourceMap': true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  'configureWebpack': config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) { // 开发环境配置
      config.devtool = 'cheap-module-eval-source-map';
    } else { // 生产环境配置
    }
  },
  'chainWebpack': config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    config.resolve.alias
      .set('@', resolve('src'));
  },
  // 构建时开启多进程处理babel编译
  'parallel': require('os').cpus().length > 1,
  // 第三方插件配置
  'pluginOptions': {},
  // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  'pwa': {},
  'devServer': {
    'open': true,
    'host': 'localhost',
    'port': 8090,
    'https': false,
    'hotOnly': false,
    'historyApiFallback': true,
    'proxy': {
      '/my-space-server':{
        changeOrigin: true,
        target: 'http://127.0.0.1:8080',
        pathRewrite: {
          '^/api': '/luanniao'
        }
      }
    }
  }
};
