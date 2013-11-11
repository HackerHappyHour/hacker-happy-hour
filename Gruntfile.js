module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

      jshint : {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          smarttabs:true,
          globals: {
            jQuery: true
          },
        files : {
          src : ["src/js/**/*.js", "src/**/*.less"]
        }
      }
    }, 
    less : {
      development: {
        options: {
          paths: ["src/css"]
        },
        files: {
          "src/css/main.css": "src/css/main.less"
        }
      },
      production: {
        options: {
          paths: ["src/css"],
          cleancss: true
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      }
    },
    watch : {
      scripts: {
        files: ['src/**/*.js', 'src/**/*.less'],
        tasks: ['jshint', 'less:development'],
        options: {
          spawn: false,
        },
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['jshint']);

};