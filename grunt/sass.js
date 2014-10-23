module.exports = function (grunt) {
  return {
    dist: {
      options: { 
        style: 'compressed'
      },
      files: [{
        expand: true,
        cwd: "app/assets/sass",
        src: ["**/*.scss"],
        dest: "public/assets/css",
        ext: ".css"
      }]
    }
  };
};

