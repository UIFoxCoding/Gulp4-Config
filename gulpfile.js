// Using Gulp4
var gulp = require('gulp'),
	config = require('./gulp/config'),
	plugins = require('gulp-load-plugins')();

// -------------------- Get tasks from gulp/tasks
function getTask(task) {
	return require('./gulp/tasks/' + task)(gulp, plugins);
}

// -------------------- Gulp Tasks
gulp.task('clean', getTask('clean'));
gulp.task('html', getTask('html'));
gulp.task('styles', getTask('styles'));
gulp.task('scripts', getTask('scripts'));
gulp.task('images', getTask('images'));
gulp.task('fonts', getTask('fonts'));
gulp.task('vendors', getTask('vendors'));
gulp.task('favicons', getTask('favicons'));
gulp.task('sync', getTask('browsersync'));
gulp.task('watch', getTask('watch'));
gulp.task('moveDist', getTask('move-dist'));

// -------------------- Build Task
gulp.task('build', gulp.series('clean',
	gulp.parallel('html', 'styles', 'scripts', 'fonts', 'images', 'vendors',
		'favicons')));

// -------------------- Default Task
gulp.task('default', gulp.series('build',
	gulp.parallel('watch', 'sync')));