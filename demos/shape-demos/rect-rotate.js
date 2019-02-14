ZdogDocs.rectRotate = ZdogDocs.shapeDemo( function( canvas, illo ) {

  var rect = new Zdog.Rect({
    addTo: illo,
    width: 80,
    height: 64,
    stroke: 10,
    translate: { x: -48 },
    rotate: { y: TAU/4 },
    color: orange,
  });

  rect.copy({
    translate: { y: -48 },
    rotate: { x: TAU/4 },
    color: eggplant,
  });

});
