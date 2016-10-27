module.exports = function(grunt) {

    grunt.initConfig({ //方法指定
        watch: { //watch方法
            /*jade: {
                files: ['views/**'],
                options: {
                    livereload: true //文件改动时重新启动
                }
            },*/
            js: {
                files: ['public/js/**', 'models/**/*.js', 'schemas/**/*.js', '*.js'],
                //tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            /*uglify: {
              files: ['public/!**!/!*.js'],
              tasks: ['jshint'],
              options: {
                livereload: true
              }
            },*/
            /*styles: {
              files: ['public/!**!/!*.less'],
              tasks: ['less'],
              options: {
                nospawn: true
              }
            }*/
        },

        /*jshint: {
          options: {
            jshintrc: '.jshintrc',
            ignores: ['public/libs/!**!/!*.js']
          },
          all: ['public/js/!*.js', 'test/!**!/!*.js', 'app/!**!/!*.js']
        },*/

        /*less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              'public/build/index.css': 'public/less/index.less'
            }
          }
        },*/

        /*uglify: {
          development: {
            files: {
              'public/build/admin.min.js': 'public/js/admin.js',
              'public/build/detail.min.js': [
                'public/js/detail.js'
              ]
            }
          }
        },*/

        nodemon: {
            dev: {
                script: 'app.js', //由于版本的不同，不能再根据file：app.js监管app.js，而要单独出来
                options: {
                    //file: 'app.js',
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['./'],
                    debug: true,
                    delayTime: 1,
                    env: {
                        PORT: 8080
                    },
                    cwd: __dirname
                }
            }
        },

        /*mochaTest: {
          options: {
            reporter: 'spec'
          },
          src: ['test/!**!/!*.js']
        },*/

        concurrent: {
            tasks: ['nodemon', 'watch' /*, 'less', 'uglify', 'jshint'*/ ],
            options: {
                logConcurrentOutput: true
            }
        }
    });
    /*插件加载*/
    grunt.loadNpmTasks('grunt-contrib-watch'); //实时监听修改文件
    grunt.loadNpmTasks('grunt-nodemon'); //实时监听app.js
    grunt.loadNpmTasks('grunt-concurrent'); //优化sass,less等
    //grunt.loadNpmTasks('grunt-mocha-test');
    //grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.option('force', true); //不因语法错误中断，继续执行

    grunt.registerTask('default', ['concurrent']); //执行任务

    //grunt.registerTask('test', ['mochaTest'])
};
