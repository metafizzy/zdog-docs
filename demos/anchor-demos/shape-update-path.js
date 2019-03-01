ZdogDocs.shapeUpdatePath = function( elem ) {
  var isAnimating = false;

  var illo = new Zdog.Illustration({
    element: elem,
  });

  var triangle = new Zdog.Shape({
    addTo: illo,
    path: [
      { x:   0, y: -50 },
      { x:  50, y:  50 },
      { x: -50, y:  50 },
    ],
    color: orange,
    stroke: 10,
    fill: true,
  });
  // change position of first path point
  var trianglePoint = triangle.path[0];
  var dragStartX, dragStartY;

  new Zdog.Dragger({
    startElement: elem,
    onDragStart: function() {
      dragStartX = trianglePoint.x;
      dragStartY = trianglePoint.y;
      isAnimating = true;
      animate();
    },
    onDragMove: function( pointer, moveX, moveY ) {
      trianglePoint.x = dragStartX + moveX;
      trianglePoint.y = dragStartY + moveY;
      triangle.updatePath();
    },
    onDragEnd: function() {
      isAnimating = false;
    },
  });

  function animate() {
    illo.updateRenderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();
};
