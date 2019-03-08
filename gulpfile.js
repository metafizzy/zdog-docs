var gulp = require('gulp');

// ----- site ----- //

// stuff used across tasks
var site = {
  // templating data
  data: {
    description: 'Round, flat, designer-friendly pseudo-3D engine',
    dev: process.argv[2] == 'dev',
  },
};

// ----- tasks ----- //

require('./tasks/assets')( site );
// require('./tasks/dist')( site );
// require('./tasks/hint')( site );
require('./tasks/js')( site );
require('./tasks/css')( site );
require('./tasks/content')( site );

// ----- default ----- //

gulp.task( 'default', gulp.parallel(
  // 'hint',
  'content',
  'js',
  'css',
  // 'dist',
  'assets'
));

// ----- watch ----- //

gulp.task( 'dev', gulp.parallel(
  // 'hint',
  'assets',
  'content'
));
