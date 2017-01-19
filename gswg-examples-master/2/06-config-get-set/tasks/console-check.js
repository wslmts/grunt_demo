module.exports = function(grunt) {

  grunt.registerTask('consoleCheck', function() {
    //load app.js
    var contents = grunt.file.read('./src/app.js');
    //search for console.log statements
    if(contents.indexOf('console.log(') >= 0)
     console.log('"console.log(" found in "app.js"');
  });

};