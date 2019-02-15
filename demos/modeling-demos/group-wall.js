ZdogDocs.groupWall = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var wallGroup = new Zdog.Group({
    addTo: illo,
  });

  // wall
  var wall = new Zdog.Rect({
    addTo: wallGroup,
    width: 140,
    height: 100,
    stroke: 8,
    fill: true,
    color: orange,
  });

  // door
  wall.copy({
    width: 30,
    height: 65,
    translate: { x: -30, y: 17.5 },
    color: garnet,
  });

  // window
  new Zdog.Ellipse({
    addTo: wallGroup,
    diameter: 30,
    translate: { x: 30 },
    stroke: wall.stroke,
    fill: true,
    color: eggplant,
  });

});
