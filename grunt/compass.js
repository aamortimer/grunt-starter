module.exports = function(grunt) {
  return {
    dist: {
      options: {
        sassDir: 'app/assets/sass',
        cssDir: 'public/assets/css',
        outputStyle: 'compressed'
      }
    }
  }
}