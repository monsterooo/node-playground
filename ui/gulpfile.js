var gulp = require('gulp');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
var sass = require('gulp-sass');

gulp.task('default', function() {
  return gulp.src('giftUI.css')
    .pipe(sass())
    .pipe(postcss([
      // ...
      tailwindcss('./tailwind-config.js'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(gulp.dest('build/'));
});