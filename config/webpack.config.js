const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: "production",
  entry: "./src/client/js/main.jsx",
  output: {
    path: path.resolve('dest'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", {
              "targets": {
                "chrome": "60",
              },
              "useBuiltIns": "usage",
              corejs: 3
            }],
            ["@babel/preset-react"]
          ]
        }
      }
    }]
  },
  plugins: [
    htmlWebpackPlugin
  ]
};