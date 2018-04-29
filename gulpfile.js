const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const simpleVars = require('postcss-simple-vars');
const del = require('del');

gulp.task('css', function() {
	const postcssPlugins = [atImport, autoprefixer(), simpleVars];

	return gulp
		.src('src/css/index.css')
		.pipe(postcss(postcssPlugins))
		.pipe(gulp.dest('build/css'));
});

gulp.task('watch:css', () => {
	return gulp.watch('./src/css/**/*.css', ['css']);
});

gulp.task('clean', function() {
	return del(['build/**/*']);
});

gulp.task('default', ['clean', 'css']);
