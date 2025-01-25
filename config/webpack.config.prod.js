const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: path.resolve('./src/index.tsx'),
	output: {
		path: path.resolve(__dirname, '../public/build'),
		filename: 'bundle.js',
	},
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
		new CssMinimizerWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
	},
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
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
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
							name: '[name].[ext]',
						},
					},
				],
			},
		],
	},
};
