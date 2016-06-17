module.exports = function (grunt) {

    'use strict';

    var sourceDir = 'js/';
    var distDir = 'js/dist/';
    var jsDistFile = 'swiftclick.min.js';

    var jsFilesArray = [sourceDir + 'libs/swiftclick.js'];

    // ====================
    // ====================

    // Project configuration.
    grunt.initConfig({

        watch: {

            js: {
                files: [
                    'Gruntfile.js',
                    'js/app/app.js',
                    'js/libs/swiftclick.js'
                ],

                tasks: ['uglify:deploy']
            }
        },

        uglify: {

            deploy: {
                options: {

                    compress: true,

                    // mangle: Turn on or off mangling
                    mangle: true,

                    // beautify: beautify your code for debugging/troubleshooting purposes
                    beautify: false,

                    // report: Show file size report
                    report: 'gzip',
                },

                src: jsFilesArray,
                dest: distDir + jsDistFile
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // A task for deployment
    grunt.registerTask('deploy', ['uglify:deploy']);
    grunt.registerTask('default', ['deploy']);
};
