ZdogDocs.anchorCopy = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var rect = new Zdog.Rect({
    addTo: illo,
    width: 64,
    height: 64,
    translate: { x: -48 },
    stroke: 16,
    color: gold,
  });

  rect.copy({
    translate: { x: 48 },
    color: garnet,
  });

});
