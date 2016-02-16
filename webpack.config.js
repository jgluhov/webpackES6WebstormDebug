module.exports = {

	entry: './src/app',

	output: {
		filename: 'bundle.js',
		path: __dirname + '/public'
	},

	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	},

	devtool: '#source-map',

	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel?presets[]=es2015'
			}
		],

		noParse: /angular\/angular.js/
	},

	watch: true
};
