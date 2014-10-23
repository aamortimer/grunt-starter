module.exports = function(grunt) {
  return {
    options: {
      jshintrc: '.jshintrc'
    },
    all: ['Gruntfile.js', 'app/assets/js/*.js', '!app/assets/js/vendor/*.js']
  }
}