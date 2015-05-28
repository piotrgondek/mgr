module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                sourceMap: true
            },
            basic: {
                files: {
                    'basic.min.js': [
                        'lib/jquery.js',
                        'lib/lodash.js',
                        'lib/backbone.js',
                        'lib/backbone.marionette.js'
                    ]
                }
            },
            app: {
                files: {
                    'app.min.js': [
                        [
                            'application/backbone.namespaces.js',
                            'application/RootView.js',
                            'application/routers/*.js',
                            'application/app.js'
                        ]
                    ]
                }
            },
            components: {
                files: {
                    'components.min.js': [
                        'application/components/gallery/*.js',
                        'application/components/product/*.js'
                    ]
                }
            }
        },
        watch: {
            basic: {
                files: ['lib/*.js'],
                tasks: ['uglify:basic']
            },
            app: {
                files: ['application/**/*.js'],
                tasks: ['uglify:app', 'uglify:components']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'uglify',
        'watch'
    ]);
};
