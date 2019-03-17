ZdogDocs.zFightDotSandwich = function( elem ) {

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

  [ false, true ].forEach( function( isGroup ) {

    var SliceClass = isGroup ? Zdog.Group : Zdog.Anchor;

    var dotSlice = new SliceClass({
      addTo: illo,
      translate: { z: isGroup ? 25 : -25 },
    });

    var d = 45;

    var dot = new Zdog.Shape({
      addTo: dotSlice,
      stroke: 20,
      color: isGroup ? gold : eggplant,
    });
    dot.copy({ translate: { x: -d, y: -d } });
    dot.copy({ translate: { x:  0, y: -d } });
    dot.copy({ translate: { x:  d, y: -d } });
    dot.copy({ translate: { x: -d, y:  0 } });
    dot.copy({ translate: { x:  d, y:  0 } });
    dot.copy({ translate: { x: -d, y:  d } });
    dot.copy({ translate: { x:  0, y:  d } });
    dot.copy({ translate: { x:  d, y:  d } });

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
