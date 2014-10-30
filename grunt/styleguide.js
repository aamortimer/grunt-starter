module.exports = function(grunt) {
  return {
    default: {
      options: {
        framework: {
          name: 'styledocco'
        },
        name: 'Style Guide'
      },
      src: ['app/assets/css/*'],
      dest: 'docs'
    }
  }
}