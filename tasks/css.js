const gulp = require('gulp');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const getGlobPaths = require('./utils/get-glob-paths');

const cssSrc = [
  'base/*.css',
  'modules/*/*.css',
  'demos/*/*.css',
];

gulp.task( 'css', function() {
  return gulp.src( cssSrc )
    .pipe( replace( '../assets/fonts/', 'fonts/' ) )
    .pipe( concat('zdog-docs.css') )
    .pipe( gulp.dest('build/assets') );
});

module.exports = function( site ) {
  site.data.stylesheets = getGlobPaths( cssSrc );
};
