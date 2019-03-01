const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const insert = require('gulp-insert');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const del = require('del');
const pkg = require('./package.json');

const cssSrc = 'src/main.css';
const comment = filename => `/**
 * Resketch v${pkg.version}
 * ${filename}
 */
`;

gulp.task('styles:expanded', () => {
  const filename = 'resketch.css';
  return gulp
    .src(cssSrc)
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(rename(filename))
    .pipe(insert.prepend(comment(filename)))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles:minified', () => {
  const filename = 'resketch.min.css';
  return gulp
    .src(cssSrc)
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(rename(filename))
    .pipe(cssnano())
    .pipe(insert.prepend(comment(filename)))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => del(['dist/*.css', 'dist/*.css.map']));

gulp.task(
  'styles',
  gulp.series('clean', gulp.parallel('styles:expanded', 'styles:minified'))
);
