const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/ts/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
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