module.exports = function (grunt) {
  return {
    target: {
      options: {
        mangle: true,
        compress: true,
        preserveComments: 'some',
        sourceMap: true,
        banner: '/*! <%= package.name %> - v<%= package.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
        sourceMapName: 'public/assets/js/app.map'
      },
      files: {
        'public/assets/js/app.min.js': ['app/assets/js/**/*.js']
      }
    }
  };
};