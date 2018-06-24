var gulp = require('gulp'),
	config = require('./gulp/config'),
	plugins = require('gulp-load-plugins')();

// -------------------- Get tasks from gulp/tasks
function getTask(task) {
	return require('./gulp/tasks/' + task)(gulp, plugins);
}

// -------------------- Gulp Tasks
gulp.task('html', getTask('html'));
gulp.task('sass', getTask('sass'));
//gulp.task('styles', getTask('styles'));
gulp.task('scripts', getTask('scripts'));
gulp.task('images', getTask('images'));
gulp.task('fonts', getTask('fonts'));
gulp.task('vendors', getTask('vendors'));
//gulp.task('sync', getTask('browsersync'));
gulp.task('clean', getTask('clean'));

// -------------------- Default Task
//gulp.task('default', gulp.series(
//	gulp.parallel('html', 'sass', 'scripts'), 'sync'));

// -------------------- Build Task
//gulp.task('build', gulp.series('clean',
//	gulp.parallel('scripts', 'styles', 'html'), 'vendors', 'moveDist'));

// -------------------- Build Task
gulp.task('build', gulp.series('clean',
	gulp.parallel('html', 'sass', 'scripts', 'fonts', 'images')));