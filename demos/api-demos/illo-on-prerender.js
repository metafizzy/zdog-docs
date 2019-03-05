ZdogDocs.illoOnPrerender = function( elem ) {

  var isAnimating = false;

  var illo = new Zdog.Illustration({
    element: elem,
    dragRotate: true,
    onDragStart: function() {
      isAnimating = true;
      animate();
    },
    onDragEnd: function() {
      isAnimating = false;
    },
    onPrerender: function( ctx ) {
      ctx.fillStyle = gold;
      ctx.fillRect( -1, -120, 2, 240 );
      ctx.fillRect( -120, -1, 240, 2 );
    },
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
    color: orange,
    stroke: 12,
    fill: true,
  });

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
