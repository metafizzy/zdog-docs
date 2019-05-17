ZdogDocs.onePixelGapFixZoom = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  illo.zoom = 4;

  new Zdog.Box({
    addTo: illo,
    width: 30,
    height: 25,
    depth: 20,
    rotate: { x: -Zdog.TAU/8, y: Zdog.TAU/8 },
    stroke: 1 / illo.zoom, // 1px stroke
    color: gold,
    rearFace: eggplant,
    leftFace: eggplant,
    bottomFace: eggplant,
  });

});
