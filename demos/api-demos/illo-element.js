ZdogDocs.illoElement = ZdogDocs.shapeDemo( function( elem, data, illo ) {

  if ( data.options ) {
    data.options = JSON.parse( data.options );
    illo.setOptions( data.options );
  }

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    translate: { z: -40 },
    stroke: 20,
    color: eggplant,
  });

  // triangle
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x:   0, y: -32 },
      { x:  32, y:  32 },
      { x: -32, y:  32 },
    ],
    translate: { z: 40 },
    // rotate: { y: TAU/4 },
    color: orange,
    stroke: 12,
    fill: true,
  });

});
