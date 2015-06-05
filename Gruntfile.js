module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell');



  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      html: {
        files: '_book/*.html',
        options: {
          livereload: true,
        }
      },
      src: {
        files: ['*.md', '*.css'],
        tasks: ['shell:build']
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: '_book',
          livereload: true
        }
      }
    },

    shell: {
        build: {
            command: 'gitbook build'
        }
    }

  });


  // Register Tasks
  grunt.registerTask('serve', ['connect', 'watch']);

};