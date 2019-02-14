ZdogDocs.shapeClosed = ZdogDocs.shapeDemo( function( canvas, illo ) {

  var isClosed = canvas.getAttribute('data-closed');

  new Zdog.Shape({
    addTo: illo,
    path: [
      { x:   0, y: -40 },
      { x:  40, y:  40 },
      { x: -40, y:  40 },
    ],
    closed: isClosed,
    stroke: 20,
    color: eggplant,
  });

});
