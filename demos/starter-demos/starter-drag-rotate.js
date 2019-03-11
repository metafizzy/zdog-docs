ZdogDocs.starterDragRotate = function( elem, data ) {
  
  var isSpinning = data.spin;
  var isDragging = false;
  var didDrag = false;

  var illo = new Zdog.Illustration({
    element: elem,
    zoom: 4,
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

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    translate: { z: 10 },
    stroke: 5,
    color: '#636',
  });

  // square
  new Zdog.Rect({
    addTo: illo,
    width: 20,
    height: 20,
    translate: { z: -10 },
    stroke: 3,
    color: '#E62',
    fill: true,
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

  if ( data.spin ) {
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
  } else {
    animate();
  }

};
