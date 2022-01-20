const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const config = require('./public/config')[isDev ? 'dev' : 'build']

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map', //开发环境下使用
  devServer: {
    port: '3000', //默认是8080
    quiet: false, //默认不启用
    inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: "errors-only", //终端仅打印 error
    overlay: false, //默认不启用
    clientLogLevel: "silent", //日志等级
    compress: true //是否启用 gzip 压缩
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: function () {
                return [
                  require('autoprefixer')({
                    "overrideBrowserslist": [
                      ">0.25%",
                      "not dead"
                    ]
                  })
                ]
              }
            }
          }
        }, 'sass-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 模板文件目录
      filename: 'index.html', //打包后的文件名
      minify: {
          removeAttributeQuotes: false, //是否删除属性的双引号
          collapseWhitespace: false, //是否折叠空白
      },
      config: config.template,
      // hash: true //是否加上hash，默认是 false
  })
  ]
}