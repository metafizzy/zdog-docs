ZdogDocs.zFightIntro = function( elem, data ) {
  
  var step = parseInt( data.step );
  var isSpinning = true;
  var isDragging = false;
  var didDrag = false;

  var illo = new Zdog.Illustration({
    element: elem,
    rotate: { x: -TAU/16 },
    dragRotate: true,
    onDragStart: function() {
      isSpinning = false;
      isDragging = true;
      didDrag = true;
      animate();
    },
    onDragEnd: function() {
      isDragging = false;
    },
  });

  var distance = step == 2 ? 80 / Math.sqrt(2) : 40;

  var dot = new Zdog.Shape({
    addTo: illo,
    translate: { y: -distance },
    stroke: 80,
    color: eggplant,
  });
  dot.copy({
    translate: { x: -distance },
    color: step == 3 ? eggplant : gold,
  });
  dot.copy({
    translate: { z: distance },
    color: step == 3 ? eggplant : garnet,
  });
  dot.copy({
    translate: { x: distance },
    color: step == 3 ? eggplant : orange,
  });
  dot.copy({
    translate: { z: -distance },
    color: step == 3 ? eggplant : garnet,
  });
  dot.copy({
    translate: { y: distance },
    color: eggplant,
  });

  function animate() {
    if ( isSpinning ) {
      illo.rotate.y += 0.03;
    }
    illo.updateRenderGraph();
    if ( isSpinning || isDragging ) {
      requestAnimationFrame( animate );
    }
  }

  // ----- IntersectionObserver ----- //

  // start animation if no IntObs
  if ( !ZdogDocs.supportsIntObs ) {
    animate();
  }

  ZdogDocs.observeIntersect({
    element: elem,
    onIntersect: function( isIntersect ) {
      if ( didDrag ) {
        return;
      }
      isSpinning = isIntersect;
      if ( isSpinning ) {
        animate();
      }
    }
  });

};
