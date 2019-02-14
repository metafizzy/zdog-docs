ZdogDocs.pathLines = ZdogDocs.shapeDemo( function( canvas, illo ) {

  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: -32, y: -40 },
      { x:  32, y: -40 },
      { x: -32, y:  40 },
      { x:  32, y:  40 },
    ],
    closed: false,
    stroke: 20,
    color: '#636',
  });

});
