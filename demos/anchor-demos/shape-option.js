ZdogDocs.shapeOption = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var options = {
    addTo: illo,
    path: [
      { x:   0, y: -50 },
      { x:  50, y:  50 },
      { x: -50, y:  50 },
    ],
    color: orange,
    stroke: 10,
  };

  if ( data.options ) {
    data.options = JSON.parse( data.options );
    Zdog.extend( options, data.options );
  }

  new Zdog.Shape( options );

  if ( data.options && data.options.backface != undefined ) {
    var dot = new Zdog.Shape({
      addTo: illo,
      color: garnet,
      stroke: 20,
      translate: { z: 40 },
    });
    
    dot.copy({
      color: gold,
      translate: { z: -40 },
    });
  }

});
