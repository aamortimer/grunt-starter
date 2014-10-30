module.exports = function(grunt) {
  return {
    all: {
      src: 'app/assets/sprites/*.png',
      destImg: 'public/assets/imgs/sprite.png',
      destCSS: 'app/assets/sass/_sprites.scss',
      cssFormat: 'scss'
    }
  }
}