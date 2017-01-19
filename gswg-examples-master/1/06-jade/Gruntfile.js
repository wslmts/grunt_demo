module.exports = function(grunt) {

  // Load the plugin that provides the "jade" task.
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Project configuration.
  grunt.initConfig({
   /* jade: {
      target1: {
        files: {
          "build/foo.html": "src/foo.jade",
          "build/bar.html": "src/bar.jade"
        } 
      }
    },*/
      jade: {
          target1: {
              expand: true,
              flatten: true,
              cwd: 'src/',
              src: ['*.jade'],
              dest: 'build/',
              ext: '.html'
          }
      }
  });

  // Define the default task
  grunt.registerTask('default', ['jade']);
};