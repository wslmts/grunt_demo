module.exports = function(grunt) {
  console.log('bar is: ' + grunt.option('bar'));
  console.log('debug is: ' + grunt.option('debug'));
  grunt.registerTask('foo', function() {
    console.log(this.args);
      if(grunt.option('bar')){
          this.args=grunt.option('bar')
      }
      console.log(this.args);
  });
};