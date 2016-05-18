"use strict"

// import necessary modules
const gulp 	 = require('gulp');
const babel  = require('gulp-babel');
const source = require('vinyl-source-stream');



// ToDo:
// define clean task
// only clean files that were updated


// build
// ToDo: only process files that were updated
gulp.task('build', () => {
	return gulp.src('./lib/**/*.es6')
				.pipe(babel({
					presets: ['es2015']
				}))
				.pipe(gulp.dest('dist'));
});


// ToDo:
// define test task
// https://tanzimsaqib.wordpress.com/2015/06/06/continuous-functional-test-automation-with-gulp-mocha-request-cheerio-chai/


// ToDo:
// define browser-sync task


// define watch task
gulp.task('watch', ['build'], function () {
    gulp.watch('./**/*.es6', ['build']);
});


// define default task
gulp.task('default', ['watch']);


