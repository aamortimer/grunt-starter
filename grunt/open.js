module.exports = function (grunt) {
  return {
    server: {
      path: 'http://localhost:<%= connect.options.port %>'
    }
  };
};