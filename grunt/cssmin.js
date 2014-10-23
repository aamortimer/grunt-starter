module.exports = function(grunt) {
  return {
    default: {
	    options: {
	      banner: '/*! <%= package.name %> - v<%= package.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
	    },
	    files: {
	      'public/assets/css/app.min.css': ['app/assets/css/**/*.css']
	    }
	  }
  }
}