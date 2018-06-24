var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var date = new Date();
    var stream =
      // -------------------- Start Task
      gulp.src('./dist/**/*.*')
      .pipe(gulp.dest(
        config.projectDir +
        config.projectName +
        '_' +
        (date.getFullYear()) +
        '-' +
        (date.getMonth()) +
        '-' +
        (date.getDate())));
    // -------------------- End Task
    return stream;
  };
};