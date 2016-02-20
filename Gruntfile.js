module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.titile || pkg.name %> - v<%= pkg.version %>*/',
    paths: {
      project: __dirname,
      dist: '<%=paths.project%>/dist',
      src: '<%=paths.project%>/src',
      doc: '<%=paths.project%>/doc',
      jsSrc: '<%=paths.src%>/js',
      jsDest: '<%=paths.dist%>/js'
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%=paths.jsSrc%>/index.js',
        dest: '<%=paths.jsDest%>/index.min.js'
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
    },
    jshint: {
      options:{ jshintrc: true },
      all: ['<%=paths.jsSrc%>/*.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "less compilation" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  // Load the plugin that provides the "html minification" task.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'less', 'htmlmin']);

};
