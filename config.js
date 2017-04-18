'use strict';

var basePaths = {
	src: 'src/main/webapp/',
	target: 'target/web/',
	test: 'src/test/webapp/'
};
var paths = {
	src: {
		scss: basePaths.src + 'scss/',
		css: basePaths.src + 'css/',
		ts: basePaths.src + 'ts/',
		js: basePaths.src + 'js/',
		lib: basePaths.src + 'lib/'
	},
	tests: {
		unit: basePaths.test + 'unit/',
		coverage: basePaths.test + 'unit/coverage/'
	},
	target: {
		css: basePaths.target + 'css/',
		js: basePaths.target + 'js/'
	}
};
var files = {
	styles: paths.src.scss + '**/*.scss',
	scripts: {
		html: paths.src.ts + '**/*.html',
		src: paths.src.ts + '**/*.ts',
		bundle: paths.src.js + 'bundle.js'
	},
	tests: {
		unit: {
			src: paths.tests.unit + '**/*.test.ts',
			tests: paths.tests.unit + '**/*.test.js',
			lib: paths.tests.unit + 'lib/*'
		},
		karmaConfig: paths.tests.unit + 'karma.conf.js'
	}
};

module.exports = {
	paths: paths,
	files: files
};
