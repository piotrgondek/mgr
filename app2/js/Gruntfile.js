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
                        'lib/backbone.marionette.js',
                        'lib/handlebars.js'
                    ]
                }
            },
            app: {
                files: {
                    'app.min.js': [
                        [
                            'application/backbone.namespaces.js',
                            'application/templates.js',
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
                        'application/components/alsobought/AlsoBoughtItemsCollection.js',
                        'application/components/alsobought/AlsoBoughtPlaceholderItemView.js',
                        'application/components/alsobought/AlsoBoughtItemView.js',
                        'application/components/alsobought/AlsoBoughtItemsView.js',
                        'application/components/review/*.js',
                        'application/components/product/*.js'
                    ]
                }
            }
        },
        sass: {
            dist: {
                files: {
                    '../css/style.css': '../../css/style.scss'
                }
            }
        },
        watch: {
            basic: {
                files: ['lib/*.js'],
                tasks: ['uglify:basic']
            },
            app: {
                files: ['application/*.js', 'application/routers/*.js'],
                tasks: ['uglify:app']
            },
            components: {
                files: ['application/components/**/*.js'],
                tasks: ['uglify:components']
            },
            css: {
                files: ['../../css/**/*.scss'],
                tasks: ['sass']
            },
            templates: {
                files: ['../templates/**/*.hbs'],
                tasks: ['handlebars']
            }
        },
        handlebars: {
            options: {
                namespace: 'templates',
                processName: function (filePath) {
                    return filePath.replace('../templates/', '').replace('.hbs', '')
                },
                partialsUseNamespace: true,
                processPartialName: function(filePath) { // input:  templates/_header.hbs
                    return filePath.replace('../templates/', '').replace('.hbs', '')
                }
            },
            compile: {
                files: {
                    'application/templates.js': '../templates/**/*.hbs'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', [
        'uglify',
        'sass',
        'handlebars',
        'watch'
    ]);
};
