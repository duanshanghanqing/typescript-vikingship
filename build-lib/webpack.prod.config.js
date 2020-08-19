const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 独立打包css
module.exports = merge(webpackbaseconfig, {
    mode: 'production',
    devtool: 'none',
    output: {
        filename: 'index.min.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: 'css/[name]-[hash].css',
            // chunkFilename: 'css/[id]-[hash].css'
            filename: 'index.min.css',
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"production"'
            }
        })
    ]
});