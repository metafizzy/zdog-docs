ZdogDocs.onePixelGapFix = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  new Zdog.Box({
    addTo: illo,
    width: 120,
    height: 100,
    depth: 80,
    rotate: { x: -Zdog.TAU/8, y: Zdog.TAU/8 },
    stroke: 1, // 1px stroke
    color: gold,
    rearFace: eggplant,
    leftFace: eggplant,
    bottomFace: eggplant,
  });

});
