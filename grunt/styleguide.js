module.exports = function(grunt) {
  return {
    options: {
      framework: {
        name: 'styledocco'
      },
      name: 'Style Guide'
    },
    all: {
      files: [{
        'docs/styleguide': 'assets/sass/**/*'
      }]
    }
  }
}