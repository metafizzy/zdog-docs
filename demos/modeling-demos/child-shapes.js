ZdogDocs.childShapes = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  // origin dot
  new Zdog.Shape({
    addTo: illo,
    stroke: 8,
    color: eggplant,
  });

  var step = parseInt( data.step ) || 0;

  var zCircle = new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    quarters: 2,
    closed: true,
    translate: { z: 40 },
    rotate: step >= 3 ? { z: -TAU/8 } : null,
    scale: step >= 3 ? 1.5 : 1,
    stroke: 8,
    fill: true,
    color: eggplant,
    visible: step != 4,
  });
  // z line
  new Zdog.Shape({
    addTo: zCircle,
    path: [ {}, zCircle.translate.copy().multiply({ z: -1 }) ],
    scale: 1/zCircle.scale.z,
    stroke: 2,
    color: zCircle.color,
  });

  var xRect = new Zdog.Rect({
    addTo: step >= 2 ? zCircle : illo,
    width: 20,
    height: 20,
    translate: { x: 40 },
    rotate: step >= 3 ? { x: TAU/8 } : null,
    stroke: 8,
    fill: true,
    color: garnet,
    visible: step != 4,
  });
  // x line
  new Zdog.Shape({
    addTo: xRect,
    path: [ {}, xRect.translate.copy().multiply({ x: -1 }) ],
    stroke: 2,
    color: xRect.color,
  });

  var yTri = new Zdog.Polygon({
    addTo: step >= 2 ? xRect : illo,
    radius: 10,
    sides: 3,
    translate: { y: -60 },
    stroke: 8,
    fill: true,
    color: orange,
  });
  // y line
  new Zdog.Shape({
    addTo: yTri,
    path: [ {}, yTri.translate.copy().multiply({ y: -1 }) ],
    stroke: 2,
    color: yTri.color,
  });

});
