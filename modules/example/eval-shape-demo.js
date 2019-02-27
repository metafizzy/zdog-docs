/* jshint evil: true */

ZdogDocs.evalShapeDemo = function( elem ) {

  var isAnimating = false;

  var illo = new Zdog.Illustration({
    element: elem.querySelector('.illo'),
    dragRotate: true,
    onDragStart: function() {
      isAnimating = true;
      animate();
    },
    onDragEnd: function() {
      isAnimating = false;
    },
  });

  var exampleCode = elem.querySelector('.example__code');
  eval( exampleCode.textContent );

  function animate() {
    illo.updateGraph();
    illo.renderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();
};
