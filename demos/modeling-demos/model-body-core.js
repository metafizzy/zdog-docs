ZdogDocs.modelBodyCore = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var step = parseInt( data.step );
  illo.zoom = 5;

  // ----- model ----- //

  var head = new Zdog.Shape({
    addTo: illo,
    stroke: 12,
    translate: { y: -14 },
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

  // chest
  new Zdog.Shape({
    addTo: illo,
    path: [ { x: -1.5 }, { x:  1.5 } ],
    translate: { y: -4.5 },
    color: garnet,
    stroke: 9,
  });


  if ( step >= 2 ) {
    var hipX = 3;
    // hips
    new Zdog.Shape({
      addTo: illo,
      path: [ { x: -hipX }, { x: hipX } ],
      translate: { y: 2 },
      color: eggplant,
      stroke: 4,
    });
  }

});
