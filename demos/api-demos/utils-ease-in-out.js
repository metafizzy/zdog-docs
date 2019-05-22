ZdogDocs.utilsEaseInOut = function( elem ) {

  // start animation if IntObs not supported
  var isAnimating = !ZdogDocs.supportsIntObs;

  // ----- Zdog ----- //

  var illo = new Zdog.Illustration({
    element: elem,
  });

  // triangle
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x:   0, y: -32 },
      { x:  32, y:  32 },
      { x: -32, y:  32 },
    ],
    translate: { z: 40 },
    color: orange,
    stroke: 12,
    fill: true,
  });

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    translate: { z: -40 },
    stroke: 20,
    color: eggplant,
  });

  var ticker = 0;
  var cycleCount = 150;

  function animate() {
    var progress = ticker / cycleCount;
    // apply easing to rotation
    var tween = Zdog.easeInOut( progress % 1, 3 );
    illo.rotate.y = tween * Zdog.TAU;
    ticker++;
    illo.updateRenderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();

  // ----- IntersectionObserver ----- //

  ZdogDocs.observeIntersect({
    element: elem,
    onIntersect: function( isIntersect ) {
      isAnimating = isIntersect;
      if ( isAnimating ) {
        animate();
      }
    }
  });

};
