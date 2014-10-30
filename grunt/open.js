module.exports = function (grunt) {
  return {
    default: {
      server: {
        path: 'http://localhost:<%= connect.default.options.port %>'
      }
    },
    docs: {
      server: {
       path: 'http://localhost:<%= connect.docs.options.port %>' 
      }
    }
  };
};