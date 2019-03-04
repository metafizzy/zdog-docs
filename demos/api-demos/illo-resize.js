ZdogDocs.illoResize = function( elem, data ) {

  var isAnimating = false;

  var illo = new Zdog.Illustration({
    element: elem,
    zoom: 1.5,
    resize: true,
    dragRotate: true,
    onDragStart: function() {
      isAnimating = true;
      animate();
    },
    onDragEnd: function() {
      isAnimating = false;
    },
    onResize: function( width ) {
      if ( data.onresize ) {
        this.zoom = width / 400;
      }
      // render on resize because may not be animating
      if ( this.isCanvas && this.children.length ) {
        this.updateRenderGraph();
      }
    },
  });

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    translate: { z: -40 },
    stroke: 20,
    color: eggplant,
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
    // rotate: { y: TAU/4 },
    color: orange,
    stroke: 12,
    fill: true,
  });

  function animate() {
    illo.updateRenderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();

};
