
'use strict';

var gulpConfig = require('../../../../ui-build/config.js');

module.exports = function (config) {

    var src = gulpConfig.paths.src;
    var tests = gulpConfig.paths.tests;
    var files = gulpConfig.files;

    var karmaConfig = {
        // base path, that will be used texcludeo resolve files and
        basePath: '../../../../',

        // frameworks to use
        frameworks: [
            'jasmine',
            'jasmine-matchers'
        ],

        // list of files / patterns to load in the browser
        files: [
            // app dependencies
            src.lib + 'lodash/lodash.js',
            src.lib + 'jquery/jquery.js',
            src.lib + 'angular/angular.js',
            src.lib + 'angular-sanitize/angular-sanitize.js',
            src.lib + 'ui-router/angular-ui-router.js',
            src.lib + 'ui-router-extras/ct-ui-router-extras.js',
            src.lib + 'angular-bootstrap-typeahead/ui-bootstrap-custom-tpls-0.6.0.js',
            src.lib + 'd3/d3.js',
            src.lib + 'chartjs/Chart.js',
            src.lib + 'medium-editor/medium-editor.js',
            src.lib + 'toastr/toastr.js',
            src.lib + 'ag-grid/ag-grid.js',
            src.lib + 'moment/moment.js',
            // the app
            files.scripts.bundle,

            // test dependencies
            files.tests.unit.lib,
            // the tests
            files.tests.unit.tests
        ],

        // // list of files to exclude
        // exclude: [
        //     'app/main.js'
        // ],

        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN
        //   || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // // enable / disable watching file and executing tests whenever any file changes
        // autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // // Continuous Integration mode
        // // if true, it capture browsers, run tests and exit
        // singleRun: false,

        coverageReporter: {
            reporters: [
                {
                    type: 'html',
                    dir: tests.coverage
                },
                {type: 'text-summary'}
            ]
        }
    };

    karmaConfig.preprocessors[files.tests.unit.tests] = ['sourcemap'];
    karmaConfig.preprocessors[files.scripts.bundle] = ['coverage'];

    config.set(karmaConfig);

};
