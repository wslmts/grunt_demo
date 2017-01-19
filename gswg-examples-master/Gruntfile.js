// This Gruntfile performs static analysis
// on all of the examples.
// A Gruntfile for the Gruntfiles!

var fs = require('fs'), path = require('path');
var ignoredEgs = /(04-sample-plugin|03-npm-install)/;

module.exports = function (grunt) {

  require("load-grunt-tasks")(grunt);

  //normalize each example's package.json
  grunt.registerTask('check-packages', function() {

    //chapters
    var chs = fs.readdirSync(__dirname);
    chs.forEach(function(ch) {

      if(!/^\d$/.test(ch)) return;

      //examples
      var egs = fs.readdirSync(ch);
      egs.forEach(function(eg) {

        if(ignoredEgs.test(eg)) return;

        var pkgPath = path.join(ch, eg, 'package.json');

        if(!fs.existsSync(pkgPath))
          return console.log('WARNING: ' + pkgPath + ' is missing');

        var pkg = JSON.parse( fs.readFileSync(pkgPath).toString() );

        //key positions
        var newpkg = {
          name: null,
          version: null,
          repository: null,
          author: null
        };

        for(var key in pkg)
          newpkg[key] = pkg[key];

        //overrides
        newpkg.name = "gswg-"+ch+"-"+eg;
        newpkg.version = "0.1.0";
        newpkg.repository = "https://github.com/jpillora/gswg-examples.git";
        newpkg.author = "Jaime Pillora <gswg@jpillora.com>";
        newpkg.license = "MIT";
        delete newpkg.scripts;
        delete newpkg.description;
        delete newpkg.main;

        //should be devDependencies
        if(newpkg.dependencies)
          console.log('WARNING: ' + pkgPath + ' has "dependencies"');

        fs.writeFileSync(pkgPath, JSON.stringify(newpkg, null, 2));
      });
    });
  });

  grunt.initConfig({
    jshint: {
      options: {
        eqeqeq: true,
        node: true
      },
      all: [
        'Gruntfile.js',
        '**/*.{js,json}',
        // Excludes
        "!**/node_modules/**",
        "!**/test/lib/**",
        "!**/*.min.js",
        "!1/04-linting/src/foo.js"
      ]
    }
  });

  grunt.registerTask("default", ["jshint"]);
};
