var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.watch('./src/**/*.html', gulp.series('html'));
      gulp.watch(config.sass.src, gulp.series('styles'));
      gulp.watch(config.scripts.src, gulp.series('scripts'));
      // -------------------- End Task
    return stream;
  };
};