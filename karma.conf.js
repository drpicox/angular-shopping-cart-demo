module.exports = function(config) {
	return config.set({
		
		basePath: '',

		files: [
			'.tmp/bundle.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'src/**/*.spec.js',
		],

		browsers: [
			'PhantomJS'
		],

		frameworks: [
			'jasmine',
			'source-map-support',
		],

		colors: true,

	});
};
