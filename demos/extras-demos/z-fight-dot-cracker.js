ZdogDocs.zFightDotCracker = ZdogDocs.spinDemo( function( canvas, data, illo ) {

  illo.rotate.x = -TAU/16;

  new Zdog.Rect({
    addTo: illo,
    width: 120,
    height: 120,
    stroke: 16,
    fill: true,
    color: garnet,
  });

  [ false, true ].forEach( function( isFixed ) {

    var group = new Zdog.Group({
      addTo: illo,
      translate: { z: isFixed ? 25 : -25 },
    });

    var d = 45;
    var x = d * ( isFixed ? -1 : 1 );
    // dot
    new Zdog.Shape({
      addTo: group,
      stroke: 20,
      translate: { x: x, y: -d },
      color: isFixed ? gold : eggplant,
    });

    if ( isFixed ) {
      new Zdog.Shape({
        addTo: group,
        translate: { x: -x, y: d },
      });
    }

  });

});
