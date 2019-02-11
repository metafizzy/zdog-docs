ZdogDocs.modelChestHips = function( elem ) {

  var isAnimating = false;

  var illo = new Zdog.Illustration({
    canvas: elem,
    zoom: 5,
    dragRotate: true,
    onDragStart: function() {
      isAnimating = true;
      animate();
    },
    onDragEnd: function() {
      isAnimating = false;
    },
  });

  // ----- model ----- //

  var hipX = 3;

  var hips = new Zdog.Shape({
    addTo: illo,
    path: [ { x: -hipX }, { x: hipX } ],
    translate: { y: 2 },
    color: eggplant,
    stroke: 4,
  });

  var spine = new Zdog.Anchor({
    addTo: hips,
    // rotate: { x: TAU/8 },
  });

  // chest
  var chest = new Zdog.Shape({
    addTo: spine,
    path: [ { x: -1.5 }, { x:  1.5 } ],
    translate: { y: -6.5 },
    color: garnet,
    stroke: 9,
  });

  var head = new Zdog.Shape({
    addTo: chest,
    stroke: 12,
    translate: { y: -9.5 },
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
  eye.copy({
    translate: { x: 2, y: 1, z: 4.5 },
  });
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
