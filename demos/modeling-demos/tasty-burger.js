ZdogDocs.tastyBurger = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  illo.rotate.x = -TAU/8;

  var burger = new Zdog.Anchor({
    addTo: illo,
    translate: { y: 24 },
    rotate: { x: TAU/4 },
  });

  // top bun
  var topBun = new Zdog.Hemisphere({
    addTo: burger,
    diameter: 96,
    translate: { z: 60 },
    stroke: 24,
    color: orange,
    // backface: gold,
  });

  // cheese
  new Zdog.Ellipse({
    addTo: burger,
    diameter: 112,
    translate: { z: 32 },
    stroke: 16,
    color: yellow,
    fill: true,
  });

  // patty
  new Zdog.Ellipse({
    addTo: burger,
    diameter: 96,
    stroke: 32,
    color: garnet,
    fill: true,
  });

  // bottom bun
  new Zdog.Cylinder({
    addTo: burger,
    diameter: topBun.diameter,
    length: 16,
    translate: { z: -44 },
    stroke: topBun.stroke,
    color: topBun.color,
  });

  // var seedAnchor = new Zdog.Anchor({
  //   addTo: burger,
  //   translate: topBun.translate,
  // });
  var seedAnchor = new Zdog.Anchor({
    addTo: topBun,
  });
  
  var seedZ = ( topBun.diameter + topBun.stroke ) / 2 + 1;
  // seed
  new Zdog.Shape({
    addTo: seedAnchor,
    path: [ { y: -3 }, { y: 3 } ],
    translate: { z: seedZ },
    stroke: 8,
    color: gold,
  });

  seedAnchor.copyGraph({
    rotate: { x: 0.6 },
  });
  seedAnchor.copyGraph({
    rotate: { x: -0.6 },
  });
  seedAnchor.copyGraph({
    rotate: { y: -0.5 },
  });
  seedAnchor.copyGraph({
    rotate: { y: 0.5 },
  });

});
