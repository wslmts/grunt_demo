module.exports = function(grunt) {

  grunt.initConfig({
    bar: {
      foo: 42
    },
     info:{
         email:'aaa@sina.com',
         phone:'13900232325'
     }
  });

  grunt.registerTask('bar', function() {
    var bar = grunt.config.get('bar');
    var bazz = bar.foo + 7;
      grunt.config.set('city',"beijing")
    console.log('Bazz is ' + bazz);
      var inf=grunt.config.get('info');
      console.log('info is ' + inf.email+"--"+inf.phone+"--"+grunt.config.get('city'));
     /* console.log(this);
      console.log('--------------------------');
      console.log(grunt)*/
      console.log('grunt option ' + grunt.option('opt'));
  });

};