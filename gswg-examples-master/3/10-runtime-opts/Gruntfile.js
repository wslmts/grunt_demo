module.exports = function(grunt) {
 //ע�⿴ִ��˳�򣬻��ȴ�ӡconsole.log��������ԭ��
  /*  Note the  console.log output occurs before the  "Running
    "foo" task" output; this is because Grunt executes our  Gruntfile.js in order
    to initialize our tasks and configuration, and only then the tasks specified on the
    command line are run in sequence.*/
  grunt.registerTask('foo', function() {
    console.log(this.args);
      if(grunt.option('bar')){
          this.args=grunt.option('bar')
      }
      console.log(this.args);
  });
    console.log('========= ');
    console.log('bar is: ' + grunt.option('bar'));
    console.log('debug is: ' + grunt.option('debug'));
};