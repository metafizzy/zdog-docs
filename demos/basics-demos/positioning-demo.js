ZdogDocs.positioningDemo = function( elem ) {

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

  function animate() {
    illo.rotate.y += 0.03;
    illo.updateGraph();
    illo.renderGraph();
    // animate next frame
    requestAnimationFrame( animate );
  }
  // start animation
  animate();
};
