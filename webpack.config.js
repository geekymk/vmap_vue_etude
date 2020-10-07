const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: '#inline-source-map',
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    }
};