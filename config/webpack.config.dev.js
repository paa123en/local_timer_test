const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dest'),
    compress: false,
    port: 8080,
    host: 'localhost',
    open: true
  }
})