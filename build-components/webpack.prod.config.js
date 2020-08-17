const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css
module.exports = merge(webpackbaseconfig, {
    mode: 'production',
    devtool: 'none',
    plugins: [
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"production"'
            }
        })
    ]
});