module.exports = function(grunt) {
  return {
    css : {
      files: [
        'app/assets/sass/*.scss'
      ],
      options: {
        livereload: true,
      },
      tasks: ['sass'],
    },
    js: {
      files: [
        'app/assets/js/*.js',
        'Gruntfile.js'
      ],
      options: {
        livereload: true,
      },
      tasks: ['jshint', 'uglify']
    },
    html: {
      files: [
        '**/*.html',
        '!docs/**/*.html'
      ],
      options: {
        livereload: true,
      },
    }
  }
}