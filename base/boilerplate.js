// boilerplate

/* globals IntersectionObserver */

( function() {

// v1.0.2 hotfix
Zdog.Anchor.prototype.renderGraphSvg = function( svg ) {
  if ( !svg ) {
    throw new Error( 'svg is ' + svg + '. ' +
      'SVG required for render. Check .renderGraphSvg( svg ).' );
  }
  this.flatGraph.forEach( function( item ) {
    item.render( svg, Zdog.SvgRenderer );
  });
};

// global namespace
window.ZdogDocs = {};

// global convience variables
window.TAU = Zdog.TAU;
// colors
window.offWhite = '#FED';
window.yellow = '#ED0';
window.gold = '#EA0';
window.orange = '#E62';
window.garnet = '#C25';
window.eggplant = '#636';

// ----- shapeDemo ----- //

ZdogDocs.shapeDemo = function( callback ) {
  return function( canvas, data ) {
    var isAnimating = false;

    var illo = new Zdog.Illustration({
      element: canvas,
      dragRotate: true,
      onDragStart: function() {
        isAnimating = true;
        animate();
      },
      onDragEnd: function() {
        isAnimating = false;
      },
    });

    callback( canvas, data, illo );

    function animate() {
      illo.updateRenderGraph();
      if ( isAnimating ) {
        requestAnimationFrame( animate );
      }
    }

    animate();

  };
};

// ----- IntersectionObserver ----- //

ZdogDocs.supportsIntObs = typeof IntersectionObserver == 'function';

// ----- IntersectionObserver ----- //

ZdogDocs.observeIntersect = function( options ) {
  if ( !ZdogDocs.supportsIntObs ) {
    return;
  }

  var obsOptions = {
    threshold: options.threshold || 0.2,
  };

  var onIntersect = function( entries ) {
    var entry = entries[0];
    var isIntersect = entry.intersectionRatio > obsOptions.threshold;
    options.onIntersect( isIntersect );
  };

  var observer = new IntersectionObserver( onIntersect, obsOptions );
  observer.observe( options.element );
  observer.takeRecords();

};

// ----- spinDemo ----- //

ZdogDocs.spinDemo = function( callback ) {
  return function( canvas, data ) {

    var isSpinning = true;
    var isDragging = false;
    var didDrag = false;

    var illo = new Zdog.Illustration({
      element: canvas,
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

    callback( canvas, data, illo );

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
      element: canvas,
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
};

})();
