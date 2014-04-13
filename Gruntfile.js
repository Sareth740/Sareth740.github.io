module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        props: grunt.file.readJSON('license.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',
        // Task configuration
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: [ 'bower_components/components-bootstrap/js/bootstrap.js', 'bower_components/angular/angular.js'],
                dest: 'public/static/js/vendor/Sareth740.js'
            },
            site: {
                src: ['src/static/static/js/**/*.js'],
                dest: 'public/static/js/app.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'public/static/js/vendor/Sareth740.min.js'
            },
            site: {
                src: '<%= concat.site.dest %>',
                dest: 'public/static/js/app.min.js'
            }
        },
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                eqnull: true,
                browser: true,
                globals: { jQuery: true },
                boss: true
            },
            gruntfile: {
                src: 'gruntfile.js'
            },
            all: ['src/static/static/js']
        },
        less: {
            development: {
                options: {
                    paths: ["public/static/css"]
                },
                files: {
                    "public/static/css/vendor/bootstrap.css": "bower_components/components-bootstrap/less/bootstrap.less"
                }
            },
            production: {
                options: {
                    paths: ["public/static/css"],
                    cleancss: true
                },
                files: {
                    "public/static/css/vendor/bootstrap.css": "bower_components/components-bootstrap/less/bootstrap.less" 
                }
            }
        },
        shell: {
            hugo: {
                options: {
                    stdout: true
                },
                command: 'hugo --source=src --destination=../public'
            },
            githubpages: {
                options: {
                    stdout: true
                },
                command: 'git subtree push --prefix=public https://github.com/Sareth740/Sareth740.github.io.git gh-pages'
            }

        },
        watch: {
            hugo: {
                files: 'src/',
                tasks: ['shell:hugo', 'jshint', 'concat', 'uglify', 'less:production']
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-shell');

    // Default task
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less:production', 'shell:hugo']);
};

