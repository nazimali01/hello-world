'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsonlint = require('gulp-jsonlint');

var defRoot = './src/main/resources/definitions/edgs**/';
var jsLocations = [
    ".js"
];

var jsonLocations = [
    defRoot + '*.columns',
    defRoot + '*.connector',
    defRoot + '*.localDefaultData',
    defRoot + '*.page',
    defRoot + '*.report',
    defRoot + '*.component',
    defRoot + '*.element'
];

var jsHintOptions = {
    'unused': false,
    'quotmark': false,
    'maxlen': 130,
    'predef': ['_', 'reportApiCallbackFunction', 'edgs']
};

module.exports = {
    run: function () {
        gulp.src('./src/main/resources/definitions/edgs**/*.js')
            .pipe(jshint(jsHintOptions))
            .pipe(jshint.reporter('default'));

        gulp.src(jsonLocations)
            .pipe(jsonlint())
            .pipe(jsonlint.failAfterError())
            .pipe(jsonlint.reporter(function (file) {
                console.error('JSON Validation Error: file ' + file.path + ' is not valid JSON.');
                console.error(file.jsonlint.message);
            }));
    }
};
