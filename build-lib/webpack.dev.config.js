const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 独立打包css
module.exports = merge(webpackbaseconfig, {
    devtool: 'source-map',
    mode: 'development',
    output: {
        filename: 'index.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: 'css/[name]-[hash].css',
            // chunkFilename: 'css/[id]-[hash].css'
            filename: 'index.css',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"development"'
            }
        })
    ]
});