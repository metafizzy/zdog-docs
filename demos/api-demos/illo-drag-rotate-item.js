ZdogDocs.illoDragRotateItem = function( canvas ) {

  var isAnimating = false;

  var triangle = new Zdog.Shape({
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

  var illo = new Zdog.Illustration({
    element: canvas,
    dragRotate: triangle,
    onDragStart: function() {
      isAnimating = true;
      animate();
    },
    onDragEnd: function() {
      isAnimating = false;
    },
  });

  illo.addChild( triangle );

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    translate: { z: -40 },
    stroke: 20,
    color: eggplant,
  });

  function animate() {
    illo.updateRenderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();

};
