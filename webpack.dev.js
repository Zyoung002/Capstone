const path = require('path');
const common = require ('./webpack.common');
const merge = require("webpack-merge");

module.exports = {
  devServer: {
    static: './dist',
  },
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
 
}; 