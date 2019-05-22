ZdogDocs.zFightDotSandwich = ZdogDocs.spinDemo( function( canvas, data, illo ) {

  illo.rotate.x = -TAU/16;

  new Zdog.Rect({
    addTo: illo,
    width: 120,
    height: 120,
    stroke: 16,
    fill: true,
    color: garnet,
  });

  [ false, true ].forEach( function( isGroup ) {

    var SliceClass = isGroup ? Zdog.Group : Zdog.Anchor;

    var dotSlice = new SliceClass({
      addTo: illo,
      translate: { z: isGroup ? 25 : -25 },
    });

    var d = 45;

    var dot = new Zdog.Shape({
      addTo: dotSlice,
      stroke: 20,
      color: isGroup ? gold : eggplant,
    });
    dot.copy({ translate: { x: -d, y: -d } });
    dot.copy({ translate: { x:  0, y: -d } });
    dot.copy({ translate: { x:  d, y: -d } });
    dot.copy({ translate: { x: -d, y:  0 } });
    dot.copy({ translate: { x:  d, y:  0 } });
    dot.copy({ translate: { x: -d, y:  d } });
    dot.copy({ translate: { x:  0, y:  d } });
    dot.copy({ translate: { x:  d, y:  d } });

  });

});
