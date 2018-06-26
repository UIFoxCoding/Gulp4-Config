var config = require('../config.js');
var browserSync = require('browser-sync').create();

module.exports = function (gulp, plugins) {
  return function () {
    var stream =
      // -------------------- Start Task
      browserSync.init(config.browsersync.opts);
    browserSync.watch(config.browsersync.watch).on('change', browserSync.reload);
    // -------------------- End Task
    return stream;
  };
};