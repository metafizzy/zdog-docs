ZdogDocs.groupEye = ZdogDocs.shapeDemo( function( canvas, data, illo ) {

  var eyeGroup = new Zdog.Group({
    addTo: illo,
  });

  // eye white
  new Zdog.Ellipse({
    addTo: eyeGroup,
    width: 160,
    height: 80,
    stroke: 8,
    fill: true,
    color: 'white',
  });

  var iris = new Zdog.Ellipse({
    addTo: eyeGroup,
    diameter: 70,
    stroke: 8,
    fill: true,
    color: gold,
  });
  // pupil
  iris.copy({
    diameter: 40,
    color: eggplant,
  });
  // highlight
  iris.copy({
    diameter: 30,
    translate: { x: 15, y: -15 },
    color: 'white',
  });

});
