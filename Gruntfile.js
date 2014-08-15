module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      app: {
        options: {
          jshintrc: 'app/.jshintrc'
        },
        src: ['app/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      },
    },
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/{,*/}*.html'
        ]
      },
      app: {
        files: '<%= jshint.app.src %>',
        tasks: ['jshint:app']
      }
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        'app/{,*/}*.html'
      ]
    },
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              connect().use('/bower_components', connect.static('./bower_components')),
              connect().use('/modules', connect.static('.')),
              connect.static('app')
            ];
          }
        }
      }
    },


    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: [
            '*.js',
            'styles/*.css',
            'views/*.html',
            'index.html'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components',
          dest: 'dist/bower_components',
          src: [
            'requirejs/require.js',
            'bootstrap/dist/css/bootstrap.min.css',
            'bootstrap/dist/js/bootstrap.min.js',
            'jquery/dist/jquery.min.js'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '',
          dest: 'dist/modules',
          src: [
            'palindromes.js'
          ]
        }]
      }
    },

    coveralls: {
      options: {
        debug: true,
        coverage_dir: 'coverage',
        dryRun: false,
        force: true,
        recursive: true
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-karma-coveralls');

  // Default task.
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('build', ['copy:dist']);

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });

};