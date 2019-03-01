ZdogDocs.shapeBackface = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var rotor = new Zdog.Anchor({
    addTo: illo,
  });

  new Zdog.Rect({
    addTo: rotor,
    width: 80,
    height: 60,
    translate: { z: 50 },
    stroke: 8,
    fill: true,
    color: gold,
    backface: data.backface,
  });

  rotor.copyGraph({
    rotate: { y: TAU * 1/4 },
  });
  rotor.copyGraph({
    rotate: { y: TAU * 2/4 },
  });
  rotor.copyGraph({
    rotate: { y: TAU * 3/4 },
  });

});
