var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('scss/**.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('wsass', function(){
	gulp.watch('scss/**.scss', ['sass']);
});
