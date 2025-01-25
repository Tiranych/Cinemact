const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve('./src/index.tsx'),
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./src/index.html'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/styles', to: 'styles' },
				{ from: 'src/fonts', to: 'fonts' },
			],
		}),
	],
	resolve: {
		alias: {
			'@components': path.resolve('./src/components'),
			'@pages': path.resolve('./src/pages'),
			'@utils': path.resolve('./src/utils'),
			'@hooks': path.resolve('./src/hooks'),
			'@store': path.resolve('./src/store'),
			'@services': path.resolve('./src/services'),
			'@assets': path.resolve('./src/assets'),
		},
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			},
		],
	},
	devServer: {
		open: true,
		hot: true,
	},
	devtool: 'eval',
	watch: true,
	watchOptions: {
		ignored: ['/node_modules/', '/public/'],
	},
};
