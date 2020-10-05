const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist/build',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8080,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}