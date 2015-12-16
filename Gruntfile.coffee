module.exports = (grunt) ->

	grunt.initConfig

		autoprefixer:
			options: ['> 5%']
			build: files: [
				expand: true
				cwd: '.tmp/',
				src: '**/*.css',
				dest: '.tmp/'
			]

		browserify:
			dev:
				files: '.tmp/bundle.js': [ 'src/index.js']
				options:
					watch: true
					browserifyOptions: { debug: true }
					transform: [
						'hintify'
						[ 'stringify', 'extensions': [ '.html' ] ]
						'browserify-ngannotate'
						'envify'
					]
			www:
				files: '.tmp/bundle.js': [ 'src/index.js']
				options: transform: [
					'hintify'
					[ 'stringify', 'extensions': [ '.html' ], "minify": true, ]
					'browserify-ngannotate'
					'envify'
					'uglifyify'
				]

		clean:
			www: files: [ dot: true, src: [ 'www/*','!www/.git' ], ]
			tmp: files: [ dot: true, src: [ '.tmp' ], ]

		copy:
			options: onlyIf: 'modified'
			fonts: src: 'node_modules/*/fonts/*', dest: 'www/'
			images:
				expand: true,
				cwd: 'src',
				dest: 'www',
				src: '**/*.{png,gif,jpg,svg}'
			index: src: 'src/index.html', dest: 'www/index.html'

		connect:
			options:
				hostname: '0.0.0.0', port: 9843, livereload: 19843 # CHANGE ME
			livereload:	options: base: [ '.tmp','src','.' ]

		filerev: build: src: 'www/*.{js,css}'

		less: build:
			files: '.tmp/bundle.css': 'src/index.less'
			options:
				sourceMap: true
				sourceMapFilename: '.tmp/bundle.css.map'
				paths: [ 'src/', '.' ]
				compress: false
				yuicompress: false
				dumpLineNumbers: 'comments'
				optimization: 0

		useminPrepare:
			html: 'src/index.html'
			options: dest: 'www'

		usemin:
			html: [ 'www/index.html' ]
			options: dirs: ['www']

		watch:
			grunt: files: [ 'Gruntfile.coffee' ]
			less: files: [ 'src/**/*.less' ], tasks: [ 'less','autoprefixer' ]
			livereload: 
				options: livereload: '<%= connect.options.livereload %>'
				files: [
					'src/index.html'
					'src/**/*.{png,gif,jpg,svg}'
					'.tmp/bundle.*'
				]

	grunt.registerTask 'serve', [
		'clean'
		'browserify:dev'
		'less'
		'autoprefixer'
		'connect:livereload'
		'watch'
	]

	grunt.registerTask 'build', [
		'clean'
		'browserify:www'
		'less'
		'autoprefixer'
		'copy'
		'useminPrepare'
		'concat'
		'uglify'
		'cssmin'
		'filerev'
		'usemin'
	]


	# load dinamically as needed grunt plugins
	require('jit-grunt')(grunt, {
		useminPrepare: 'grunt-usemin'
	})

	# make stats of time consuming tasks
	require('time-grunt')
	