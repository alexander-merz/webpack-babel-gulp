const path = require('path')
const appStructure = require('./app.structure')

module.exports = {
	mode: 'production',
	entry: appStructure,
	output: {
		path: path.resolve(__dirname, 'dist', 'js'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'ts-loader'
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss', 'css']
	}
}
