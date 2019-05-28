var gulp = require('gulp');
var version = require('./package.json').version;

// ----- site ----- //

// stuff used across tasks
var site = {
  // templating data
  data: {
    version: version,
    description: 'Round, flat, designer-friendly pseudo-3D engine for canvas and SVG',
    dev: process.argv[2] == 'dev',
  },
};

// ----- tasks ----- //

require('./tasks/assets')( site );
require('./tasks/hint')( site );
require('./tasks/js')( site );
require('./tasks/css')( site );
require('./tasks/content')( site );

// ----- default ----- //

gulp.task( 'default', gulp.parallel(
  'hint',
  'content',
  'js',
  'css',
  'assets'
));

// ----- watch ----- //

gulp.task( 'dev', gulp.parallel(
  'hint',
  'assets',
  'content'
));
