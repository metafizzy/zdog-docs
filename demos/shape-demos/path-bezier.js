ZdogDocs.pathBezier = ZdogDocs.shapeDemo( function( canvas, illo ) {

  var start        = { x: -60, y: -60 };
  var startControl = { x:  20, y: -60 };
  var endControl   = { x:  20, y:  60 };
  var end          = { x:  60, y:  60 };

  // curve
  new Zdog.Shape({
    addTo: illo,
    path: [
      start,
      { bezier: [ startControl, endControl, end ] },
    ],
    closed: false,
    stroke: 20,
    color: eggplant,
  });

  var controlDot = new Zdog.Shape({
    addTo: illo,
    translate: startControl,
    stroke: 12,
    color: orange,
  });
  controlDot.copy({
    translate: endControl,
  });

  var controlLine = new Zdog.Shape({
    addTo: illo,
    path: [ start, startControl ],
    stroke: 2,
    color: orange,
  });
  controlLine.copy({
    path: [ end, endControl ],
  });

});
