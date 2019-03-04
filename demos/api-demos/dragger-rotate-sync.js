ZdogDocs.draggerRotateSync = function( canvas ) {

  var isAnimating = false;

  var illo = new Zdog.Illustration({
    element: canvas,
  });

  // circle
  var circle = new Zdog.Ellipse({
    addTo: illo,
    diameter: 70,
    translate: { x: -50 },
    stroke: 20,
    color: eggplant,
  });

  // triangle
  var triangle = new Zdog.Shape({
    addTo: illo,
    path: [
      { x:   0, y: -32 },
      { x:  32, y:  32 },
      { x: -32, y:  32 },
    ],
    translate: { x: 50 },
    color: orange,
    stroke: 12,
    fill: true,
  });

  var viewRotation = new Zdog.Vector();
  var dragStartRX, dragStartRY;

  new Zdog.Dragger({
    startElement: canvas,
    onDragStart: function() {
      circle.color = garnet;
      triangle.color = gold;
      dragStartRX = viewRotation.x;
      dragStartRY = viewRotation.y;
      isAnimating = true;
      animate();
    },
    onDragMove: function( pointer, moveX, moveY ) {
      var moveRX = moveY / illo.width * TAU;
      var moveRY = moveX / illo.width * TAU;
      viewRotation.x = dragStartRX - moveRX;
      viewRotation.y = dragStartRY - moveRY;
    },
    onDragEnd: function() {
      circle.color = eggplant;
      triangle.color = orange;
      isAnimating = false;
    },
  });

  function animate() {
    circle.rotate.set( viewRotation );
    triangle.rotate.set( viewRotation );
    illo.updateRenderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();

};
