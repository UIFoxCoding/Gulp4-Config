var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.src(config.scripts.src)
      .pipe(plugins.plumber())
      .pipe(plugins.if(config.production, plugins.sourcemaps.init()))
      .pipe(plugins.jsbeautifier({
        indent_size: 2
      }))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(plugins.if(config.production, plugins.uglify()))
      .pipe(plugins.if(config.production, plugins.rename("main.min.js")))
      .pipe(plugins.if(config.production, plugins.sourcemaps.write('.')))
      .pipe(plugins.if(config.production, gulp.dest(config.scripts.dest)));
    // -------------------- End Task
    return stream;
  };
};