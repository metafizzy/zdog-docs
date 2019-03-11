ZdogDocs.starterZoom = function( elem ) {

  var illo = new Zdog.Illustration({
    element: elem,
    zoom: 4,
  });

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    translate: { z: 10 },
    stroke: 5,
    color: '#636',
  });

  // square
  new Zdog.Rect({
    addTo: illo,
    width: 20,
    height: 20,
    translate: { z: -10 },
    stroke: 3,
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
