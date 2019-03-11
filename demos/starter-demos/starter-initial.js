ZdogDocs.starterInitial = function( elem, data ) {

  var illo = new Zdog.Illustration({
    element: elem,
  });

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    stroke: 20,
    color: '#636',
  });

  var isSpinning = data.spin;

  function animate() {
    illo.updateRenderGraph();
    if ( isSpinning ) {
      requestAnimationFrame( animate );
      illo.rotate.y += 0.03;
    }
  }
  // start animation if no IntObs
  if ( !data.spin || !ZdogDocs.supportsIntObs ) {
    animate();
  }

  // ----- IntersectionObserver ----- //

  if ( data.spin ) {

    ZdogDocs.observeIntersect({
      element: elem,
      onIntersect: function( isIntersect ) {
        isSpinning = isIntersect;
        if ( isSpinning ) {
          animate();
        }
      }
    });
  }

};
