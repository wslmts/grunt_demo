module.exports = function(grunt) {

  grunt.registerTask('bar', function() {
    console.log(this.options());
  });
    grunt.initConfig({
        bar:{
            options:{name:'hello bar'}
        }
    });

};