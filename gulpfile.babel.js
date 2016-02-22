//load gulp modules
import gulp from 'gulp';
import concat from 'gulp-concat';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import htmlreplace from 'gulp-html-replace';


//load other plugins
import del from 'del';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

//custom vars
const css_min_filename = 'style.min.css';
const js_min_filename = 'build.min.js';
const browserSyncPort = 5000;

//HTML task 
gulp.task('html', () => {
	gulp.src('*.html', {base: './'})
	.pipe(htmlreplace({
		'css': `assets/css/${css_min_filename}`,
		'js': `assets/js/${js_min_filename}`
	}))
    .pipe(gulp.dest('dist'));

    gulp.src('*/*.html', {base: './'})
	.pipe(htmlreplace({
		'css': `../assets/css/${css_min_filename}`,
		'js': `../assets/js/${js_min_filename}`
	}))
    .pipe(gulp.dest('dist'));
});

//CSS task
gulp.task('css', () => {
	gulp.src('assets/css/*.css')
	.pipe(sourcemaps.init())
	.pipe(cssnano())
    .pipe(concat(css_min_filename))
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/assets/css'));

    gulp.src('assets/css/vendor/*.css', {base: './'})
    .pipe(gulp.dest('dist'));
});

//JS task
gulp.task('js', () => {
	gulp.src('assets/js/*.js')
	.pipe(babel())
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(concat(js_min_filename))	
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/assets/js'));

	gulp.src('assets/js/vendor/*.js', {base: './'})
	.pipe(gulp.dest('dist'));
});


//FONTS task
gulp.task('fonts', () => {
	gulp.src('assets/fonts/*.*', {base: './'})
	.pipe(gulp.dest('dist'));
});

//IMAGES task
gulp.task('images', () => {
	gulp.src(['*.ico', '*.png'])
	.pipe(gulp.dest('dist'));
	
	gulp.src('assets/img/*.*', {base: './'})
	.pipe(gulp.dest('dist'));
});

gulp.task('build', ['html', 'fonts', 'images', 'css', 'js']);

gulp.task('serve', () => {
	browserSync({
		notify: false,
		port: browserSyncPort,
		server: {
		  baseDir: ['./']
		}		
	});

	gulp.watch([
		'*.html',
		'*/*.html',
		'assets/js/*.js',
		'assets/css/*.css',
		'assets/img/*.*'
	]).on('change', reload);
});

gulp.task('serve:dist', () => {
	browserSync({
		notify: false,
		port: browserSyncPort,
		server: {
		  baseDir: ['dist']
		}		
	});

	gulp.watch([
		'dist/*.html',
		'dist/*/*.html',
		'dist/assets/js/*.js',
		'dist/assets/css/*.css',
		'dist/assets/img/*.*'
	]).on('change', reload);

	gulp.watch(['*.html', '*/*.html'], ['html']);
	gulp.watch('assets/js/*.js', ['js']);
	gulp.watch('assets/css/*.css', ['css']);
	gulp.watch('assets/img/*.*', ['images']);
});

gulp.task('clean', del.bind(null, ['dist']));

// Default task
gulp.task('default', ['html', 'fonts', 'images', 'css', 'js']);