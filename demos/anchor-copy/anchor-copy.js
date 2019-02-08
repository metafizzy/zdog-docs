ZdogDocs.anchorCopy = function( elem ) {

  var isRotating = false;
  var TAU = Zdog.TAU;

  var illo = new Zdog.Illustration({
    canvas: elem,
    zoom: 4,
    dragRotate: true,
    onDragStart: function() {
      isRotating = false;
    },
  });

  var rect = new Zdog.Rect({
    addTo: illo,
    width: 16,
    height: 16,
    translate: { x: -12 },
    stroke: 4,
    color: '#EA0',
  });

  rect.copy({
    translate: { x: 12 },
    color: '#C25',
  });

  // animate
  function animate() {
    if ( isRotating ) {
      illo.rotate.y += TAU/150;
    }
    illo.updateGraph();
    illo.renderGraph();
    requestAnimationFrame( animate );
  }

  animate();

};
