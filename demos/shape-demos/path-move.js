ZdogDocs.pathMove = ZdogDocs.shapeDemo( function( canvas, illo ) {

  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: -40, y: -32 },
      { x:  40, y: -32 },
      { move: { x: -40, y:  32 } },
      { x:  40, y:  32 },
    ],
    closed: false,
    stroke: 20,
    color: '#636',
  });

});
