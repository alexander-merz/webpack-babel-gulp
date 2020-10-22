const path = require('path');
const appStructure = require('./app.structure');

module.exports = {
    mode: 'production',
    entry: appStructure,
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                    loader: 'babel-loader'
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
};