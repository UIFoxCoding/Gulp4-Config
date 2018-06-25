var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.src(config.sass.src)
      .pipe(plugins.plumber())
      .pipe(plugins.if(config.production, plugins.sourcemaps.init()))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer(config.autoprefixer.opts))
      .pipe(plugins.jsbeautifier({
        indent_size: 2
      }))
      .pipe(gulp.dest(config.sass.dest))
      .pipe(plugins.if(config.production,
        plugins.cssnano(),
        plugins.rename("styles.min.css"),
        plugins.sourcemaps.write('.'),
        gulp.dest(config.sass.dest)));
    // -------------------- End Task
    return stream;
  };
};