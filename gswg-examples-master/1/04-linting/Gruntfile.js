module.exports = function(grunt) {

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true
      },
      target1: ['Gruntfile.js', 'src/**/*.js']
    }
  });
    grunt.registerTask('t', function(){
        alert(1=='1')
    });
  // Define the default task
  grunt.registerTask('default', ['jshint']);

};