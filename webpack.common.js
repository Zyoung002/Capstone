const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
  entry: {
  main: "./src/index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      Login: "./src/logintemp.html",
      inject: true,
      chunks: ['log'],
      filename: 'log.html',
    }),
    new HtmlWebpackPlugin({
      Login: "./src/landingtemp.html",
      inject: true,
      chunks: ['land'],
      filename: 'land.html',
    }),
    new HtmlWebpackPlugin({
      Login: "./src/submittemp.html",
      inject: true,
      chunks: ['submit'],
      filename: 'sub.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env']
            ]
          }
        },
      }
    ],
  },
};
