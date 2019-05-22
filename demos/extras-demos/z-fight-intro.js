ZdogDocs.zFightIntro = ZdogDocs.spinDemo( function( canvas, data, illo ) {
  
  var step = parseInt( data.step );

  illo.rotate.x = -TAU/16;

  var distance = step == 2 ? 80 / Math.sqrt(2) : 40;

  var dot = new Zdog.Shape({
    addTo: illo,
    translate: { y: -distance },
    stroke: 80,
    color: eggplant,
  });
  dot.copy({
    translate: { x: -distance },
    color: step == 3 ? null : gold,
  });
  dot.copy({
    translate: { z: distance },
    color: step == 3 ? null : garnet,
  });
  dot.copy({
    translate: { x: distance },
    color: step == 3 ? null : orange,
  });
  dot.copy({
    translate: { z: -distance },
    color: step == 3 ? null : garnet,
  });
  dot.copy({
    translate: { y: distance },
  });

});
