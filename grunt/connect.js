module.exports = function (grunt) {
  return {
    default: {
      options: {
        port: 3000,
        hostname: 'localhost',
      },
      livereload: {
        keepalive: true
      }
    },
    docs: {
      options: {
        port: 4000,
        hostname: 'localhost',
        base: 'docs/',
        keepalive: true
      },
      livereload: {
        keepalive: true
      }
    }
  }
};