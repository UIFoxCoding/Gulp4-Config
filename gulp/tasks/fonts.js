var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.src(config.fonts.src)
      .pipe(gulp.dest(config.fonts.dest));
    // -------------------- End Task
    return stream;
  };
};