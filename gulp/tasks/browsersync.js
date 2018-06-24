var config = require('../config.js');
var browserSync = require('browser-sync').create();

module.exports = function (gulp, plugins) {
  return function () {
    var stream =
      // -------------------- Start Task
      browserSync.init(config.browsersync.opts);

    browserSync.watch(config.html.src, gulp.series('html'));
    browserSync.watch(config.sass.src, gulp.series('sass'));
    browserSync.watch(config.scripts.src, gulp.series('scripts'));
    browserSync.watch([config.vendors.js.src, config.vendors.css.src, config.vendors.fonts.src], gulp.series('vendors'));
    browserSync.watch(config.browsersync.watch).on('change', browserSync.reload);
    // -------------------- End Task
    return stream;
  };
};