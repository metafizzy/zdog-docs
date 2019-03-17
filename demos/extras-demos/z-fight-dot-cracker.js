ZdogDocs.zFightDotCracker = function( elem ) {

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

  new Zdog.Rect({
    addTo: illo,
    width: 120,
    height: 120,
    stroke: 16,
    fill: true,
    color: garnet,
  });

  [ false, true ].forEach( function( isFixed ) {

    var group = new Zdog.Group({
      addTo: illo,
      translate: { z: isFixed ? 25 : -25 },
    });

    var d = 45;
    var x = d * ( isFixed ? -1 : 1 );
    // dot
    new Zdog.Shape({
      addTo: group,
      stroke: 20,
      translate: { x: x, y: -d },
      color: isFixed ? gold : eggplant,
    });

    if ( isFixed ) {
      new Zdog.Shape({
        addTo: group,
        translate: { x: -x, y: d },
      });
    }

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
