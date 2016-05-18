"use strict"

// import necessary modules
const gulp 	  = require('gulp'),
	  babel   = require('gulp-babel'),
	  source  = require('vinyl-source-stream'),
	  jshint  = require('gulp-jshint'),
	  stylish = require('jshint-stylish');



// jshint tasks
gulp.task('jshint', function() {
  return gulp.src('lib/**/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter(stylish));
});
gulp.task('jshint:test', function() {
  return gulp.src('test/**/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter(stylish));
});


// build
gulp.task('build', ['jshint'], () => {
	return gulp.src('./lib/**/*.es6')
				.pipe(babel({
					presets: ['es2015']
				}))
				.pipe(gulp.dest('dist'));
});


// watch task
gulp.task('watch', ['build','jshint:test'], function () {
    gulp.watch('./**/*.es6', ['build']);
});


// default task
gulp.task('default', ['watch']);


