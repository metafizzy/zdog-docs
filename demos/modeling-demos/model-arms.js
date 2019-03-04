ZdogDocs.modelArms = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var step = parseInt( data.step );
  illo.zoom = 5;

  // ----- model ----- //

  var hipX = 3;
  // hips
  var hips = new Zdog.Shape({
    addTo: illo,
    path: [ { x: -hipX }, { x: hipX } ],
    // translate: { y: 2 },
    stroke: 4,
    color: eggplant,
  });

  // ----- legs ----- //

  var leg = new Zdog.Shape({
    addTo: hips,
    path: [ { y: 0 }, { y: 12 } ],
    translate: { x: -hipX },
    // rotate: { x: TAU/4 },
    color: eggplant,
    stroke: 4,
  });
  
  // foot
  new Zdog.RoundedRect({
    addTo: leg,
    width: 2,
    height: 4,
    cornerRadius: 1,
    translate: { y: 14, z: 2 },
    rotate: { x: TAU/4 },
    color: garnet,
    fill: true,
    stroke: 4,
  });

  leg.copyGraph({
    translate: { x: hipX },
  });

  // ----- upper body ----- //

  var chest = new Zdog.Shape({
    addTo: hips,
    path: [ { x: -1.5 }, { x: 1.5 } ],
    translate: { y: -6.5 },
    stroke: 9,
    color: garnet,
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

  // ----- arms ----- //

  var armSize = 6;

  // right arm
  var upperArm = new Zdog.Shape({
    addTo: chest,
    path: [ { y: 0 }, { y: armSize } ],
    translate: { x: -5, y: -2 },
    color: eggplant,
    stroke: 4,
  });

  var forearm;
  if ( step >= 2 ) {
    forearm = new Zdog.Shape({
      addTo: upperArm,
      path: [ { y: 0 }, { y: armSize } ],
      translate: { y: armSize },
      color: gold,
      stroke: 4,
    });
  }

  // hand
  if ( step >= 3 ) {
    new Zdog.Shape({
      addTo: forearm,
      translate: { z: 1, y: armSize },
      stroke: 6,
      color: gold,
    });
  }

  // left arm
  if ( step >= 4 ) {
    upperArm.copyGraph({
      translate: { x: 5, y: -2 },
    });
  }

});
