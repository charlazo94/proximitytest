var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "src/index.html",
    filename: 'index.html',
    inject: 'body'
});

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js"
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            maxSize: 244000,
            chunks: 'all',
        },
        minimizer: [
            new UglifyJsPlugin()
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['babel-plugin-transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                loader: 'url-loader?limit=3000000&name=resources/[name]-[hash].[ext]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images/'
                }
            }
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.optimize.SplitChunksPlugin({
            names: ['app'],
            minChunks: Infinity,
        }),
    ],
    // devtool: "eval-source-map",
};
