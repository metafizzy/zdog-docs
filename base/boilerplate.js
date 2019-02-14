// boilerplate
( function() {

// global namespace
window.ZdogDocs = {};

// global convience variables
window.TAU = Zdog.TAU;
// colors
window.yellow = '#ED0';
window.gold = '#EA0';
window.orange = '#E62';
window.garnet = '#C25';
window.eggplant = '#636';

// ----- shapeDemo ----- //

ZdogDocs.shapeDemo = function( callback ) {
  return function( canvas ) {
    var isAnimating = false;

    var illo = new Zdog.Illustration({
      canvas: canvas,
      dragRotate: true,
      onDragStart: function() {
        isAnimating = true;
        animate();
      },
      onDragEnd: function() {
        isAnimating = false;
      },
    });

    callback( canvas, illo );

    function animate() {
      illo.updateGraph();
      illo.renderGraph();
      if ( isAnimating ) {
        requestAnimationFrame( animate );
      }
    }

    animate();
    
  };
};

})();
