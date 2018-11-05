var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer=require('gulp-autoprefixer');


gulp.task('serve', function(){
	browserSync.init({
		server:{
			baseDir:'SiteExtjs/'
		}
	});

	//gulp.watch('./scss/*.scss');
	gulp.watch('./**/*.html').on('change',browserSync.reload);

});
gulp.task('default',['serve']);