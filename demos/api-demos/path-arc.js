ZdogDocs.pathArc = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  function graphArc( start, corner, end ) {
    // arc
    new Zdog.Shape({
      addTo: illo,
      path: [
        start,
        { arc: [ corner, end ] },
      ],
      closed: false,
      stroke: 20,
      color: eggplant,
    });
    // corner dot
    new Zdog.Shape({
      addTo: illo,
      translate: corner,
      stroke: 12,
      color: orange,
    });
    // start line
    var line = new Zdog.Shape({
      addTo: illo,
      path: [ start, corner ],
      stroke: 2,
      color: orange,
    });
    // end line
    line.copy({
      path: [ corner, end ],
    });
  }

  graphArc(
    { x: -60, y: -60 },
    { x:  20, y: -60 },
    { x:  20, y:  20 }
   );

  graphArc(
    { x: 20, y: 20 },
    { x: 20, y: 60 },
    { x: 60, y: 60 }
  );

});
