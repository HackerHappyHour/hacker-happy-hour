module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      configs: [
        "Gruntfile.js",
        "package.json"
      ],
      src:{
        files: {
          src: ["src/**/*.js"]
        },
        options: {
          ignores: ['libs/**/*']
        }
      },
      test: ["test/**/*.js"]
    },

    less: {
      development: {
        options: {
          paths: ['src/css'],
          yuicompress: false
        },
        files: {
          'src/index.css':'src/index.less'
        }
      }
    },

    watch: {
      configs: {
        files: "<%= jshint.configs %>",
        tasks: ["jshint:configs"]
      },
      src: {
        files: "<%= jshint.src %>",
        tasks: ["jshint:src"]
      },
      test: {
        files: "<%= jshint.src %>",
        tasks: ["jshint:test"]
      },
      options: {
          verbose: true
      }
    }
    }
  });
  


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['jshint']);

};