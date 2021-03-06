module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      target1: {
        files: {
          'dest1/file1.txt': 'src/file1.txt',
          'dest1/file2.txt': 'src/file2.txt'
        }
      },
      target2: {
        files: {
          'dest1/file3.txt': 'src/file3.txt',
          'dest1/file4.txt': 'src/file4.txt'
        }
      }
    }
  });

  grunt.registerMultiTask('copy', function() {
    this.files.forEach(function(file) {
      grunt.file.copy(file.src, file.dest);
    });
    console.log('Copied ' + this.files.length + ' files');
  });

};
