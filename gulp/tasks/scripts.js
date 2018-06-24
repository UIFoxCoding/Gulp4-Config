var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.src(config.scripts.src)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.jsbeautifier({
        indent_size: 2
      }))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(plugins.uglify())
      .pipe(plugins.rename("main.min.js"))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(config.scripts.dest));
    // -------------------- End Task
    return stream;
  };
};