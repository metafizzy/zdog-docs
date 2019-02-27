ZdogDocs.animatingDemo = function( elem ) {
  var illo = new Zdog.Illustration({
    element: elem,
  });

  // add circle shape
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    stroke: 20,
    color: '#636',
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
