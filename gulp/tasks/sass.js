var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.src(config.sass.src)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer(config.autoprefixer.opts))
      .pipe(plugins.jsbeautifier({
        indent_size: 2
      }))
      .pipe(gulp.dest(config.sass.dest))
      .pipe(plugins.cssnano())
      .pipe(plugins.rename("styles.min.css"))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(config.sass.dest));
    // -------------------- End Task
    return stream;
  };
};