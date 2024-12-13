const path = require('path');
const common = require ('./webpack.common');
const {merge} = require("webpack-merge");

module.exports = merge(common, {
  devServer: {
    static: './dist',
  },
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 
}); 