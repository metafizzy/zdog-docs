// boilerplate

/* globals IntersectionObserver */

( function() {

// global namespace
window.ZdogDocs = {};

// global convience variables
window.TAU = Zdog.TAU;
// colors
window.offWhite = '#FED';
window.yellow = '#ED0';
window.gold = '#EA0';
window.orange = '#E62';
window.garnet = '#C25';
window.eggplant = '#636';

// ----- shapeDemo ----- //

ZdogDocs.shapeDemo = function( callback ) {
  return function( canvas, data ) {
    var isAnimating = false;

    var illo = new Zdog.Illustration({
      element: canvas,
      dragRotate: true,
      onDragStart: function() {
        isAnimating = true;
        animate();
      },
      onDragEnd: function() {
        isAnimating = false;
      },
    });

    callback( canvas, data, illo );

    function animate() {
      illo.updateRenderGraph();
      if ( isAnimating ) {
        requestAnimationFrame( animate );
      }
    }

    animate();

  };
};

// ----- IntersectionObserver ----- //

ZdogDocs.supportsIntObs = typeof IntersectionObserver == 'function';

// ----- IntersectionObserver ----- //

ZdogDocs.observeIntersect = function( options ) {
  if ( !ZdogDocs.supportsIntObs ) {
    return;
  }

  var obsOptions = {
    threshold: options.threshold || 0.2,
  };

  var onIntersect = function( entries ) {
    var entry = entries[0];
    var isIntersect = entry.intersectionRatio > obsOptions.threshold;
    options.onIntersect( isIntersect );
  };

  var observer = new IntersectionObserver( onIntersect, obsOptions );
  observer.observe( options.element );
  observer.takeRecords();

};

})();
