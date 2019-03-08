ZdogDocs.modelRotateSpine = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var step = parseInt( data.step );
  illo.zoom = 5;
  illo.rotate.y = -TAU/8;

  // ----- model ----- //

  var hipX = 3;
  // hips
  var hips = new Zdog.Shape({
    addTo: illo,
    path: [ { x: -hipX }, { x: hipX } ],
    translate: { y: 2 },
    rotate: step == 1 ? { x: TAU/8 } : null,
    stroke: 4,
    color: eggplant,
  });

  // ----- legs ----- //

  var leg = new Zdog.Shape({
    addTo: hips,
    path: [ { y: 0 }, { y: 12 } ],
    translate: { x: -hipX },
    rotate: { x: TAU/4 },
    color: eggplant,
    stroke: 4,
  });
  
  // foot
  var foot = new Zdog.RoundedRect({
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

  var standLeg = leg.copy({
    translate: { x: hipX },
    rotate: { x: -TAU/8 },
  });

  foot.copy({
    addTo: standLeg,
    rotate: { x: -TAU/8 },
  });

  // ----- upper body ----- //

  var spine = new Zdog.Anchor({
    addTo: hips,
    rotate: { x: TAU/8 },
  });

  var chest = new Zdog.Shape({
    addTo: step >= 2 ? spine : hips,
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

  // arm on left
  var upperArm = new Zdog.Shape({
    addTo: chest,
    path: [ { y: 0 }, { y: armSize } ],
    translate: { x: -5, y: -2 },
    rotate: step >= 3 ? { x: -TAU/4 } : null,
    color: eggplant,
    stroke: 4,
  });

  var forearm = new Zdog.Shape({
    addTo: upperArm,
    path: [ { y: 0 }, { y: armSize } ],
    translate: { y: armSize },
    rotate: step >= 4 ? { x: TAU/8 } : null,
    color: gold,
    stroke: 4,
  });

  // hand
  new Zdog.Shape({
    addTo: forearm,
    translate: { z: 1, y: armSize },
    stroke: 6,
    color: gold,
  });

  // arm on right
  upperArm.copyGraph({
    translate: { x: 5, y: -2 },
    rotate: step >= 3 ? { x: TAU/4 } : null,
  });

});
