ZdogDocs.anchorTransform = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  // read transform from attribute and set anchor
  var anchorOptions = {
    addTo: illo,
  };

  if ( data.options ) {
    data.options = JSON.parse( data.options );
    Zdog.extend( anchorOptions, data.options );
  }

  var anchor = new Zdog.Anchor( anchorOptions );

  // circle
  new Zdog.Ellipse({
    addTo: anchor,
    diameter: 80,
    translate: { z: 40 },
    stroke: 20,
    color: eggplant,
  });

  // triangle
  new Zdog.Shape({
    addTo: anchor,
    path: [
      { x:   0, y: -32 },
      { x:  32, y:  32 },
      { x: -32, y:  32 },
    ],
    translate: { z: -40 },
    rotate: { y: TAU/4 },
    color: orange,
    stroke: 12,
    fill: true,
  });

});
