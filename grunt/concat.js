module.exports = function(grunt) {
  return {
    jquery: {
	    files: {
	      'app/assets/js/vendor/jquery.js': ['bower_components/jquery/jquery.js']
	    }
	  },
	  modernizr: {
	    files: {
	      'app/assets/js/vendor/modernizr.js': ['bower_components/modernizr/modernizr.js']
	    }
	  }
  }
}