const path = require('path');
const common = require ('./webpack.common');
const merge = require("webpack-merge");

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  


};