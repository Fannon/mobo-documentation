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
        files: '_book/lastUpdate.txt'
      },
      src: {
        files: ['**/*.md'],
        tasks: ['shell:build'],
        options: {
          debounceDelay: 250
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: '_book'
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
  grunt.registerTask('default', ['shell:build', 'serve']);

};