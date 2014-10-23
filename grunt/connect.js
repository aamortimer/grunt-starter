module.exports = function (grunt) {
  return {
    options: {
      port: 3000,
      hostname: 'localhost',
    },
    livereload: {
      keepalive: true
    }
  };
};