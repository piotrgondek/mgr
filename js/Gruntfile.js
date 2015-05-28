module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            basic: {
                src: [
                    'lib/jquery.js',
                    'lib/lodash.js',
                    'lib/backbone.js',
                    'lib/backbone.marionette.js'
                ],
                dest: 'basic.js'
            },
            app: {
                src: [
                    'application/backbone.namespaces.js',
                    'application/RootView.js',
                    'application/routers/*.js',
                    'application/app.js'
                ],
                dest: 'app.js'
            },
            components: {
                src: [
                    'application/components/gallery/*.js',
                    'application/components/product/*.js'
                ],
                dest: 'components.js'
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: [
                        'jQuery',
                        'Backbone',
                        'Marionette'
                    ]
                }
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
            }
        },
        watch: {
            basic: {
                files: ['lib/*.js'],
                tasks: ['uglify']
            },
            app: {
                files: ['application/**/*.js'],
                tasks: ['concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'uglify',
        'concat',
        'watch'
    ]);
};
