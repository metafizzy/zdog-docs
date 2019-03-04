ZdogDocs.modelBodyCore = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var step = parseInt( data.step );
  illo.zoom = 5;

  if ( step == 4 ) {
    illo.rotate.y = -TAU/8;
  }

  // ----- model ----- //

  var hipX = 3;
  // hips
  var hips = new Zdog.Shape({
    addTo: illo,
    path: [ { x: -hipX }, { x: hipX } ],
    // translate: { y: 2 },
    rotate: step == 4 ? { x: TAU/8 } : null,
    color: eggplant,
    stroke: 4,
  });

  var chest;
  if ( step >= 2 ) {
    chest = new Zdog.Shape({
      addTo: hips,
      path: [ { x: -1.5 }, { x: 1.5 } ],
      // position right above hips
      // ( hips.stroke + chest.stroke ) / 2
      translate: { y: -6.5 },
      stroke: 9,
      color: garnet,
    });
  }

  if ( step >= 3 ) {
    var head = new Zdog.Shape({
      addTo: chest,
      stroke: 12,
      // position above chest
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
  }
  

});
