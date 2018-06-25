var config = require('../config.js');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var date = new Date();
    var stream =
      // -------------------- Start Task
      gulp.src('./dist/**/*.*')
      .pipe(gulp.dest(config.projectDir + config.projectName + '/' + config.projectVersion));
    // -------------------- End Task
    return stream;
  };
};