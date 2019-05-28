var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var getGlobPaths = require('./utils/get-glob-paths');

var jsSrc = [
  // Zdog
  'node_modules/zdog/js/boilerplate.js',
  'node_modules/zdog/js/canvas-renderer.js',
  'node_modules/zdog/js/svg-renderer.js',
  'node_modules/zdog/js/vector.js',
  'node_modules/zdog/js/anchor.js',
  'node_modules/zdog/js/path-command.js',
  'node_modules/zdog/js/shape.js',
  'node_modules/zdog/js/group.js',
  'node_modules/zdog/js/rect.js',
  'node_modules/zdog/js/rounded-rect.js',
  'node_modules/zdog/js/ellipse.js',
  'node_modules/zdog/js/polygon.js',
  'node_modules/zdog/js/cone.js',
  'node_modules/zdog/js/cylinder.js',
  'node_modules/zdog/js/hemisphere.js',
  'node_modules/zdog/js/box.js',
  'node_modules/zdog/js/dragger.js',
  'node_modules/zdog/js/illustration.js',
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
    .pipe( gulp.dest('build') );
});

module.exports = function( site ) {
  site.data.jsPaths = getGlobPaths( jsSrc );
};
