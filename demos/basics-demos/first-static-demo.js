ZdogDocs.firstStaticDemo = function( elem ) {
  // create illo
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

  illo.updateGraph();
  illo.renderGraph();
};
