var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync'),
	del		 		= require('del'),
	autoprefixer	= require('gulp-autoprefixer'),
	cssmin 			= require('gulp-cssmin'),
	rename 			= require("gulp-rename"),
	uglify 			= require('gulp-uglify'),
	pump 			= require('pump'),
	runSequence 	= require('run-sequence');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 15 versions']}))
		.pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('app/*.css')
        .pipe(gulp.dest('dist.css'));
});

gulp.task('compress', function (cb) {
	pump([
			gulp.src('app/js/*.js'),
			uglify(),
			gulp.dest('dist/js')
		],
		cb
	);
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('clean', function() {
	return del.sync('dist/');
});

gulp.task('build', function(cb) {
	runSequence('clean', 'sass',
		['html', 'cssmin', 'compress', 'css'],
		cb
	);
});

gulp.task('default', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('bower.json', ['bower']);
});