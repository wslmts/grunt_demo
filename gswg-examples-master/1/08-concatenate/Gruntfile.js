module.exports = function(grunt) {

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Project configuration.
  grunt.initConfig({
    config1:grunt.file.readJSON('config.json'),
    concat: {
      target1: {
        files: {
          "build/abc.js": ["src/a.js", "src/b.js", "src/c.js"]
        }
      },
        target2: {
            expand:true,
            flatten:true,
            cwd:'./src',
            src:['*.js'],
            dest:'build1/',
            ext:'.min.js'
        },
        target3: {
            files: {
                "build/<%=config1.name%>.js": ["src/a.js", "src/b.js", "src/c.js"]
            }
        }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['concat']);
};