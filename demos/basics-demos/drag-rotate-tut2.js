ZdogDocs.dragRotateTut2 = function( elem ) {
  
  var isRotating = true;

  var illo = new Zdog.Illustration({
    canvas: elem,
    zoom: 4,
    dragRotate: true,
    onDragStart: function() {
      isRotating = false;
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
    if ( isRotating ) {
      illo.rotate.y += 0.03;
    }
    illo.updateGraph();
    illo.renderGraph();
    requestAnimationFrame( animate );
  }

  animate();
};
