var gulp = require('gulp');

gulp.task( 'assets', function() {
  return gulp.src('assets/**/*.*')
    .pipe( gulp.dest('build/assets') );
});

module.exports = function() {};
