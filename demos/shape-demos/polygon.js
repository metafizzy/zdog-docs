ZdogDocs.polygon = function( elem ) {
  // console.log( elem.querySelector('.example__code').textContent );


  var isAnimating = false;

  var illo = new Zdog.Illustration({
    canvas: elem.querySelector('.illo'),
    dragRotate: true,
    onDragStart: function() {
      isAnimating = true;
      animate();
    },
    onDragEnd: function() {
      isAnimating = false;
    },
  });

  eval( elem.querySelector('.example__code').textContent );

  function animate() {
    illo.updateGraph();
    illo.renderGraph();
    if ( isAnimating ) {
      requestAnimationFrame( animate );
    }
  }

  animate();

};
