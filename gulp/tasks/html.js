var config = require('../config.js'),
  fileinclude = require('gulp-file-include');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      gulp.src(config.html.src)
      .pipe(plugins.plumber())
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest(config.html.dest));
    // -------------------- End Task
    return stream;
  };
};