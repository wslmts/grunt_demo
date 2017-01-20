module.exports = function(grunt) {

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc:'.jshintrc'
      },
      target1: 'src/**/*.js'
    }
  });

  // A new task to make "jshint" optional 
  grunt.registerTask('check', function() {
    if(grunt.file.exists('.jshintrc1')) {
      grunt.task.run('jshint');
    }else{
        grunt.loadTasks('./lib');
        console.log(grunt.task.run('value'));
    }
  });
    grunt.loadTasks('./lib');
    grunt.task.run('task1');
   // grunt.registerTask('default',['check','task1']);
};