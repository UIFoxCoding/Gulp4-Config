var config = require('../config.js'),
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  imageminPngquant = require('imagemin-pngquant');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.src(config.img.src)
      .pipe(plugins.if(config.production,
        plugins.cache(plugins.imagemin([
          plugins.imagemin.gifsicle({
            interlaced: true
          }),
          plugins.imagemin.jpegtran({
            progressive: true
          }),
          imageminJpegRecompress({
            loops: 5,
            min: 65,
            max: 70,
            quality: 'medium'
          }),
          plugins.imagemin.svgo(),
          plugins.imagemin.optipng({
            optimizationLevel: 3
          }),
          imageminPngquant({
            quality: '65-70',
            speed: 5
          })
        ], {
          verbose: true
        }))
      ))
      .pipe(gulp.dest(config.img.dest));
    // -------------------- End Task
    return stream;
  };
};