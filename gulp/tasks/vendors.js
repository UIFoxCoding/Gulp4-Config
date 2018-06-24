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
      .pipe(plugins.concat('vendors.js'))
      .pipe(gulp.dest(config.vendors.js.dest))
      .pipe(plugins.if(config.production,
        plugins.uglify(),
        plugins.rename({
          suffix: ".min",
          extname: ".js"
        }),
        gulp.dest(config.vendors.js.dest)
      ));

    // ---- CSS
    var css =
      gulp.src(config.vendors.css.src)
      .pipe(plugins.jsbeautifier({
        indent_size: 2
      }))
      .pipe(plugins.concat('vendors.css'))
      .pipe(gulp.dest(config.vendors.css.dest))
      .pipe(plugins.if(config.production,
        plugins.cssnano(),
        plugins.rename({
          suffix: ".min",
          extname: ".css"
        }),
        gulp.dest(config.vendors.css.dest)
      ));

    // ---- Fonts
    var fonts =
      gulp.src(config.vendors.fonts.src)
      .pipe(gulp.dest(config.vendors.fonts.dest));

    // -------------------- End Task
    return merge(js, css, fonts);
  };
};