ZdogDocs.anchorCopyGraph = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var rect = new Zdog.Rect({
    addTo: illo,
    width: 64,
    height: 64,
    translate: { x: -48 },
    stroke: 16,
    color: gold,
  });

  new Zdog.Shape({
    addTo: rect,
    translate: { z: 20 },
    stroke: 32,
    color: eggplant,
  });

  rect.copyGraph({
    translate: { x: 48 },
    color: garnet,
  });

});
