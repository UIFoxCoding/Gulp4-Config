var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.src(config.favicons.src)
      .pipe(plugins.favicons(config.favicons.opts))
      .pipe(gulp.dest(config.favicons.dest));
    // -------------------- End Task
    return stream;
  };
};