ZdogDocs.modelEye = function( elem ) {

  var isAnimating = false;

  var illo = new Zdog.Illustration({
    canvas: elem,
    zoom: 10,
    dragRotate: true,
    onDragStart: function() {
      isAnimating = true;
      animate();
    },
    onDragEnd: function() {
      isAnimating = false;
    },
  });

  // -- model --- //

  var head = new Zdog.Shape({
    addTo: illo,
    stroke: 12,
    color: gold,
  });

  var eye = new Zdog.Ellipse({
    addTo: head,
    diameter: 2,
    quarters: 2,
    translate: { x: -2, y: 1, z: 4.5 },
    rotate: { z: -TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

  // -- animate --- //

  function animate() {
    illo.updateGraph();
    illo.renderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();

};
