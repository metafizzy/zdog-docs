ZdogDocs.evalSpinDemo = function( example ) {
  /* jshint evil: true */
  var isSpinning = true;
  var isDragging = false;
  var didDrag = false;
  var illoElem = example.querySelector('.illo');

  var illo = new Zdog.Illustration({
    element: illoElem,
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

  var exampleCode = example.querySelector('.example__code');
  eval( exampleCode.textContent );

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
    element: illoElem,
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
