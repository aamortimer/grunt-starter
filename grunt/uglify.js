module.exports = function (grunt) {
  return {
    target: {
      options: {
        mangle: true,
        compress: true,
        preserveComments: 'some',
      },
      files: [{
        expand: true,
        cwd: "app/assets/js",
        src: ["**/*.js"],
        dest: "public/assets/js",
        ext: ".js"
      }]
    }
  };
};