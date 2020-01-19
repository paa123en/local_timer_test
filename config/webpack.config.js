const path = require('path')

module.exports = {
  mode: "production",
  entry: "./src/client/main.jsx",
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
  }
};