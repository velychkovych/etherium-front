const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

function findPara(param) {
	let result = '';
	process.argv.forEach((argv) => {
		if (argv.indexOf('--' + param) === -1) return;
		result = argv.split('=')[1];
	});
	return result;
}

const port = findPara('port');

module.exports = merge(common, {
	mode: 'development',
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/,
	},
	devServer: {
		compress: true,
		port: port,
		historyApiFallback: true,
		open: true,
		proxy: {
			'/api': {
				changeOrigin: true,
				target: 'http://localhost:5000',
			},
		},
	},
	devtool: 'eval-cheap-source-map',
});
