var config = require('../config.js'),
  del = require('del');

module.exports = function (gulp, plugins) {
  return function (cb) {
    var stream =
      // -------------------- Start Task
      del(config.clean.folders, cb);
      // -------------------- End Task
    return stream;
  };
};