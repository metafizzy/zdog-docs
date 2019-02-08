var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var getGlobPaths = require('./utils/get-glob-paths');

var jsSrc = [
  // Zdog
  'bower_components/zdog/js/utils.js',
  'bower_components/zdog/js/vector.js',
  'bower_components/zdog/js/anchor.js',
  'bower_components/zdog/js/path-direction.js',
  'bower_components/zdog/js/shape.js',
  'bower_components/zdog/js/group.js',
  'bower_components/zdog/js/rect.js',
  'bower_components/zdog/js/rounded-rect.js',
  'bower_components/zdog/js/ellipse.js',
  'bower_components/zdog/js/polygon.js',
  'bower_components/zdog/js/cone.js',
  'bower_components/zdog/js/cylinder.js',
  'bower_components/zdog/js/hemisphere.js',
  'bower_components/zdog/js/box.js',
  'bower_components/zdog/js/dragger.js',
  'bower_components/zdog/js/illustration.js',
  // docs
  'base/boilerplate.js',
  // modules
  'modules/*/*.js',
  'demos/*/*.js',
  // init
  'base/init.js',
];

// concat & minify js
gulp.task( 'js', function() {
  return gulp.src( jsSrc )
    .pipe( uglify() )
    .pipe( concat('zdog-docs.min.js') )
    .pipe( gulp.dest('build/assets') );
});

module.exports = function( site ) {
  site.data.jsPaths = getGlobPaths( jsSrc );
};
