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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
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