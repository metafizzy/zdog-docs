ZdogDocs.starterRect = function( elem ) {

  var illo = new Zdog.Illustration({
    element: elem,
  });

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    translate: { z: 40 },
    stroke: 20,
    color: '#636',
  });

  // square
  new Zdog.Rect({
    addTo: illo,
    width: 80,
    height: 80,
    translate: { z: -40 },
    stroke: 12,
    color: '#E62',
    fill: true,
  });

  // ----- animate ----- //

  var isSpinning = true;

  function animate() {
    illo.rotate.y += 0.03;
    illo.updateRenderGraph();
    if ( isSpinning ) {
      requestAnimationFrame( animate );
    }
  }
  // start animation if no IntObs
  if ( !ZdogDocs.supportsIntObs ) {
    animate();
  }

  // ----- IntersectionObserver ----- //

  ZdogDocs.observeIntersect({
    element: elem,
    onIntersect: function( isIntersect ) {
      isSpinning = isIntersect;
      if ( isSpinning ) {
        animate();
      }
    }
  });

};
