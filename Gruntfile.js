module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      src: {
        files: ['**/*.md'],
        tasks: ['shell:build'],
        options: {
        }
      }
    },

    shell: {
        documentation: {
            command: 'mobo --generate-docs'
        },
        build: {
            command: 'gitbook build'
        }
    }

  });

  // Register Tasks
  grunt.registerTask('default', ['shell:documentation', 'shell:build', 'watch']);

};