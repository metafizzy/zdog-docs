/* globals IntersectionObserver */

ZdogDocs.utilsEaseInOut = function( elem ) {

  var supportIntObs = typeof IntersectionObserver == 'function';
  var isAnimating = !supportIntObs;

  // ----- IntersectionObserver ----- //

  if ( supportIntObs ) {
    var obsOptions = {
      threshold: 0.2,
    };

    var onIntersect = function( entries ) {
      var entry = entries[0];
      isAnimating = entry.intersectionRatio > obsOptions.threshold;
      if ( isAnimating ) {
        animate();
      }
    };

    var observer = new IntersectionObserver( onIntersect, obsOptions );
    observer.observe( elem );
    observer.takeRecords();
  }

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

  var timer = 0;

  function animate() {
    var alpha = Zdog.easeInOut( timer % 1, 3 );
    illo.rotate.y = alpha * TAU;
    timer += 1/150; // complete cycle every 150 frames
    illo.updateRenderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();

};
