ZdogDocs.modelHead = function( elem, data ) {

  var isAnimating = false;
  var step = parseInt( data.step || 0 );

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

  var eye;

  if ( step > 1 ) {
    eye = new Zdog.Ellipse({
      addTo: head,
      diameter: 2,
      quarters: 2,
      translate: { x: -2, y: 1, z: 4.5 },
      rotate: { z: -TAU/4 },
      color: eggplant,
      stroke: 0.5,
      backface: false,
    });
  }

  if ( step > 2 ) {
    eye.copy({
      translate: { x: 2, y: 1, z: 4.5 },
    });
  }

  if ( step > 3 ) {
    // smile
    new Zdog.Ellipse({
      addTo: head,
      diameter: 3,
      quarters: 2,
      translate: { y: 2.5, z: 4.5 },
      rotate: { z: TAU/4 },
      closed: true,
      color: '#FED',
      stroke: 0.5,
      fill: true,
      backface: false,
    });
  }

  // ----- animate ----- //

  function animate() {
    illo.updateGraph();
    illo.renderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();

};
