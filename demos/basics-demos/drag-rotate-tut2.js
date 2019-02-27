ZdogDocs.dragRotateTut2 = function( elem ) {
  
  var isSpinning = true;

  var illo = new Zdog.Illustration({
    element: elem,
    zoom: 4,
    dragRotate: true,
    onDragStart: function() {
      isSpinning = false;
    },
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

  function animate() {
    if ( isSpinning ) {
      illo.rotate.y += 0.03;
    }
    illo.updateGraph();
    illo.renderGraph();
    requestAnimationFrame( animate );
  }

  animate();
};
