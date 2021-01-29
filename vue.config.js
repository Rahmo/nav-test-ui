
process.env.VUE_APP_VERSION = require('./package.json').version || '0.0.0';

/* eslint-disable no-param-reassign */
module.exports = {
	publicPath: './',
	transpileDependencies: [
		'morningstar-design-system',
		'@mds',
		'mwc-markets-core',
		'markets-market-data',
		'mwc-markets-plotter',
	],
	lintOnSave: true,
	css: {
		requireModuleExtension: true,
		loaderOptions: {
			css: {
				importLoaders: 1,
				modules: {
					localIdentName: '[local]___my-aop',
				},
			},
			sass: {
				prependData: `
          $mds-font-asset-path: '~@mds/fonts/src/';
        `,
			},
		},
	},
	chainWebpack: (config) => {
		config.module
			.rule('css')
			.oneOf('vue')
			.use('postcss-scss')
			.loader('resolve-url-loader');
	},
	configureWebpack: (config) => {
		config.output = Object.assign({}, config.output, {
			filename: process.env.ENV === 'dev' ? '[name].js' : '[name].[hash:8].js',
			chunkFilename: process.env.ENV === 'dev' ? '[name].js' : '[name].[hash:8].js',
		});
	},
};
