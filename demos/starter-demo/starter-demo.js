ZdogDocs.starterDemo = function( elem ) {

  var isRotating = true;
  var TAU = Zdog.TAU;

  var illo = new Zdog.Illustration({
    canvas: elem,
    zoom: 4,
    dragRotate: true,
    onDragStart: function() {
      isRotating = false;
    },
  });

  var anchor = new Zdog.Anchor({
    addTo: illo,
    translate: { y: -10, z: 10 },
  });

  // circle
  new Zdog.Ellipse({
    addTo: anchor,
    diameter: 20,
    translate: { z: 10 },
    stroke: 5,
    color: '#636',
  });

  // triangle
  new Zdog.Shape({
    addTo: anchor,
    path: [
      { x:  0, y: -1 },
      { x:  1, y:  1 },
      { x: -1, y:  1 },
    ],
    scale: 8,
    translate: { z: -10 },
    rotate: { y: TAU/4 },
    color: '#E62',
    stroke: 3,
    fill: true,
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
