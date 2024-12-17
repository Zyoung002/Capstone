const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        static: './dist',
    },
    devtool: 'inline-source-map',
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'template.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'landingtemp.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'landingtemp.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'logintemp.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'logintemp.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'submittemp.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'submittemp.html'),
        })
    ],
    resolve: {
        extensions: [
            ".css",
            ".html",
            ".js",
            ".json"
        ],
    }
}
