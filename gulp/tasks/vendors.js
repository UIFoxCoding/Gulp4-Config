// =========================================================
// Gulp Task: vendors
// Description: move all node and bower dependencies to dist
// easily add sass, less, etc. Operate on each as needed.
// basic configuration supplied
// npm install --save-production merge-stream gulp-newer
// gulp-load-plugins
// =========================================================
var config = require('../config.js'),
  merge = require('merge-stream');

module.exports = function (gulp, plugins) {
  return function () {
    // -------------------- Start Task
    // ---- JS
    var js =
      gulp.src(config.vendors.js.src)
      .pipe(plugins.uglify())
      .pipe(plugins.rename({
        suffix: ".min",
        extname: ".js"
      }))
      .pipe(gulp.dest(config.vendors.js.dest));

    // ---- CSS
    var css =
      gulp.src(config.vendors.css.src)
      .pipe(plugins.cssnano())
      .pipe(plugins.rename({
        suffix: ".min",
        extname: ".css"
      }))
      .pipe(gulp.dest(config.vendors.css.dest));

    // ---- SASS
    //var sass =
      //gulp.src(config.vendors.sass.src)
      //.pipe(plugins.sass().on('error', plugins.sass.logError))
      //.pipe(plugins.autoprefixer(config.autoprefixer.opts))
      //.pipe(plugins.cssnano())
      //.pipe(plugins.rename({
        //suffix: ".min",
        //extname: ".css"
      //}))
      //.pipe(gulp.dest(config.vendors.sass.dest));

    // ---- Fonts
    var fonts =
      gulp.src(config.vendors.fonts.src)
      .pipe(gulp.dest(config.vendors.fonts.dest));

    // -------------------- End Task
    return merge(js, css, fonts); // + sass
  };
};