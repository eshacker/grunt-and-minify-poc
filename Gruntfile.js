module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/index.js',
        dest: 'dist/js/index.min.js'
      }
    },
    less: {
      production: {
        options: {
          paths: ["dist/css"],
          compress: true
        },
        files: {
          "dist/css/index.min.css": "src/css/index.less"
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'src/index.html',     // 'destination': 'source'
        }
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "less compilation" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  // Load the plugin that provides the "html minification" task.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less', 'htmlmin']);

};
