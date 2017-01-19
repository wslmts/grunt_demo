module.exports = function(grunt) {
   // grunt.loadTasks('./lib');
    console.log(grunt.loadTasks('./lib'))
    grunt.initConfig({
        bar:{
            options:{name:'this is from global'}
        }
    });
    grunt.registerTask('default', ['bar']);
};