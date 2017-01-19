module.exports=function(grunt){
    //�Զ�������
/*
grunt.initConfig({
        log: {
            foo: [1, 2, 3],
            bar: 'hello world',
            baz: false
        }
    });

    grunt.registerMultiTask('log', 'Log stuff.', function() {
        grunt.log.writeln(this.target + ': ' + this.data);
    });*/
    //����npm�������
  /*  grunt.initConfig({
        // files to lint with the JSHint task
        jshint: ['Gruntfile.js']
    });
    // load the module containing the JSHint task
    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.registerTask('default', ['jshint']);*/
//����npm�������,���������
    grunt.initConfig({
        less: {
           dev: {
              files:{
                  './dev/dev.css':'./public/css/*.less'
              }
           },
            publish: {
              files:{
                  './product/product.css':'./public/css/*.less'
              }
            }
        },
        uglify:{
            './product/product.js':'./public/js/*.js'
        },
        sprite:{
            integrate:{
                src:'./public/img/icons/*.png',
                destImg: './product/icons/img/icons.png',
                destCSS:'./product/icons/css/product.css'
            }
        },
        clean:{
         anyname:'./product/**'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.registerTask('default',['less','uglify','sprite']);
    grunt.registerTask('custom', 'Creates a file with a timestamp in it',function(){
        var options = this.options({
            file: '.timestamp'
        });
        var stamp = +new Date(); // cast date into a unix timestamp
        var contents = stamp.toString();

        grunt.file.write(options.file, contents);
    })
};