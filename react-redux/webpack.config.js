var path = require('path');

module.exports = {
    devtool: 'sourcemaps',
    entry: './src/main.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                  presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss?$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }
};