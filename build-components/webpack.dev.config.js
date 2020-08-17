const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
module.exports = merge(webpackbaseconfig, {
    devtool: 'source-map',
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"development"'
            }
        })
    ]
});