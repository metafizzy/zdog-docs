ZdogDocs.compositeScaleBug = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var anchor = new Zdog.Anchor({
    addTo: illo,
    scale: JSON.parse( data.scale ),
  });

  new Zdog.Hemisphere({
    addTo: anchor,
    diameter: 30,
    translate: { x: -35 },
    color: garnet,
    backface: gold,
    stroke: false,
  });

  new Zdog.Cylinder({
    addTo: anchor,
    diameter: 30,
    length: 30,
    color: gold,
    backface: orange,
    stroke: false,
  });

  new Zdog.Cone({
    addTo: anchor,
    diameter: 30,
    length: 30,
    translate: { x: 35 },
    color: eggplant,
    backface: garnet,
    stroke: false,
  });

});
