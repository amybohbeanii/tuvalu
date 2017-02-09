

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('buildCSS', function () {
	// The source scss file is a main file which just imports all the separate scss files
	return gulp.src('./client/scss/index.scss')
	.pipe(sass().on('error', sass.logError)) // compile the sass file to a css file
	.pipe(cleanCSS())
	.pipe(gulp.dest('./client/css/')) // write the css file to ./server
});

gulp.task('watch', function() {
	gulp.watch('./client/scss/*', ['buildCSS']);
});

gulp.task('default', ['buildCSS', 'watch']);
