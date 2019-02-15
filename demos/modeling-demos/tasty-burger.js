ZdogDocs.tastyBurger = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var burger = new Zdog.Anchor({
    addTo: illo,
    translate: { y: 12 },
    rotate: { x: TAU/4 },
  });

  // top bun
  var topBun = new Zdog.Hemisphere({
    addTo: burger,
    diameter: 80,
    translate: { z: 44 },
    stroke: 16,
    color: orange,
    // backface: gold,
  });

  // cheese
  new Zdog.Ellipse({
    addTo: burger,
    diameter: 84,
    translate: { z: 24 },
    stroke: 10,
    color: yellow,
    fill: true,
  });

  // patty
  new Zdog.Ellipse({
    addTo: burger,
    diameter: 72,
    stroke: 28,
    color: garnet,
    fill: true,
  });

  // bottom bun
  new Zdog.Cylinder({
    addTo: burger,
    diameter: topBun.diameter,
    length: 16,
    translate: { z: -35 },
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
  // seed
  new Zdog.Shape({
    addTo: seedAnchor,
    path: [ { y: -3 }, { y: 3 } ],
    translate: { z: 49 },
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
