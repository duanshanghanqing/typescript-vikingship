const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '..', 'src', 'components','index'),
    output: {
        path: path.join(__dirname, '..', 'lib'),
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        // libraryExport: 'default',
        library: 'vik'
    },
    externals: {
        'react': 'react',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.resolve('./src_package')
        }
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader' 
            },
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: { /* Loader options go here */ }
                    }
                ]
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: './index.html'
    //     })
    // ]
};