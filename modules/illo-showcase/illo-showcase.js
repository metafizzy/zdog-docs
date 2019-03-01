ZdogDocs.illoShowcase = function( elem ) {

  var TAU = Zdog.TAU;
  var isSpinning = true;
  var canvasSize = 180;
  // colors
  var white = 'white';
  var yellow = '#ED0';
  var gold = '#EA0';
  var orange = '#E62';
  var garnet = '#C25';
  var eggplant = '#636';
  var midnight = '#424';

  var illos = [];

  var viewRotation = new Zdog.Vector();

  var dragStartRX, dragStartRY;

  function controlDragStart() {
    isSpinning = false;
    dragStartRX = viewRotation.x;
    dragStartRY = viewRotation.y;
  }

  function controlDragMove( pointer, moveX, moveY ) {
    var moveRX = moveY / canvasSize * TAU;
    var moveRY = moveX / canvasSize * TAU;
    viewRotation.x = dragStartRX + moveRX;
    viewRotation.y = dragStartRY + moveRY;
  }

  // ------------------------- strutter ------------------------- //

  ( function() {

    var canvas = elem.querySelector('.illo-showcase__illo--1');
    // var illoSize = 48;
    var zoom = 3;

    var illo = new Zdog.Illustration({
      element: canvas,
      zoom: zoom,
      rotate: { y: -TAU/8 },
      translate: { y: 4 },
    });

    illos.push( illo );

    new Zdog.Dragger({
      startElement: canvas,
      onDragStart: controlDragStart,
      onDragMove: controlDragMove,
    });

    // -- illustration shapes --- //

    var hipX = 3;

    new Zdog.Shape({
      addTo: illo,
      path: [ { x: -1 }, { x: 1 } ],
      scale: hipX,
      color: eggplant,
      stroke: 4,
    });

    var rightLeg = new Zdog.Shape({
      addTo: illo,
      path: [ { y: 0 }, { y: 12 } ],
      translate: { x: -hipX },
      rotate: { x: TAU/4 },
      color: eggplant,
      stroke: 4,
    });
    // foot
    new Zdog.RoundedRect({
      addTo: rightLeg,
      width: 2,
      height: 4,
      radius: 1,
      translate: { y: 14, z: 2 },
      rotate: { x: TAU/4 },
      color: garnet,
      fill: true,
      stroke: 4,
    });

    var plantAngle = -TAU/32 * 3;
    var leftLeg = rightLeg.copyGraph({
      translate: { x: hipX },
      rotate: { x: plantAngle },
      color: midnight,
    });

    leftLeg.children[0].rotate.set({ x: TAU/4 - plantAngle });

    // chest
    new Zdog.Shape({
      addTo: illo,
      path: [ { x: -1 }, { x:  1 } ],
      scale: 1.5,
      translate: { y: -5.5, z: -3 },
      color: garnet,
      stroke: 9,
      fill: true,
    });

    var armSize = 6;

    [ true, false ].forEach( function( isRight ) {
      var xSide = isRight ? -1 : 1;

      var upperArm = new Zdog.Shape({
        addTo: illo,
        path: [ { x: 0 }, { x: armSize } ],
        scale: { x: xSide },
        translate: { x: 4.5 * xSide, y: -8, z: -4 },
        rotate: isRight ? { y: TAU/8, z: -TAU/16 } : { y: TAU/8  },
        color: eggplant,
        stroke: 4,
      });

      var forearm = new Zdog.Shape({
        addTo: upperArm,
        path: [ { x: 0 }, { x: armSize-2 } ],
        translate: { x: armSize },
        rotate: isRight ? { z: TAU/16 * 3, y: TAU/4 } : { z: -TAU/4, x: -TAU/32 * 2, y: TAU/8 },
        color: garnet,
        stroke: 4,
      });
      // hand
      new Zdog.Shape({
        addTo: forearm,
        translate: { x: armSize, z: 1 },
        stroke: 6,
        color: gold,
      });

    });

    var head = new Zdog.Anchor({
      addTo: illo,
      translate: { y: -12, z: -10 },
      rotate: { x: TAU/8 },
    });

    // face
    new Zdog.Hemisphere({
      addTo: head,
      diameter: 12,
      color: gold,
      backface: garnet,
      rotate: { x: -TAU/4 },
      stroke: false,
    });

    var eye = new Zdog.Ellipse({
      addTo: head,
      diameter: 2,
      quarters: 2,
      translate: { x: -2, y: 1.5, z: 5 },
      rotate: { z: -TAU/4 },
      color: eggplant,
      stroke: 0.5,
      backface: false,
    });
    eye.copy({
      translate: { x: 2, y: 1.5, z: 5 },
      rotate: { z: -TAU/4 },
    });
    // smile
    new Zdog.Ellipse({
      addTo: head,
      diameter: 3,
      quarters: 2,
      translate: { y: 3, z: 4.5 },
      rotate: { z: TAU/4 },
      closed: true,
      color: '#FED',
      stroke: 0.5,
      fill: true,
      backface: false,
    });

    new Zdog.Hemisphere({
      addTo: head,
      diameter: 12,
      color: garnet,
      backface: gold,
      rotate: { x: TAU/4 },
      stroke: false,
    });

  })();

  // -------------------------- boxes -------------------------- //

  ( function() {

    var canvas = elem.querySelector('.illo-showcase__illo--2');
    // var illoSize = 9;

    var illo = new Zdog.Illustration({
      element: canvas,
      zoom: 26,
      rotate: { x: (35/360) * TAU, y: TAU/8 },
    });
    illos.push( illo );

    new Zdog.Dragger({
      startElement: canvas,
      onDragStart: controlDragStart,
      onDragMove: controlDragMove,
    });

    // -- illustration shapes --- //

    var model = new Zdog.Anchor({
      addTo: illo,
    });

    function addBox( options ) {
      var boxOptions = {
        addTo: model,
        stroke: false,
        topFace: yellow,
        rearFace: gold,
        leftFace: orange,
        rightFace: orange,
        frontFace: garnet,
        bottomFace: eggplant,
      };
      Zdog.extend( boxOptions, options );

      new Zdog.Box( boxOptions );
    }

    // top
    addBox({
      bottomFace: false,
      translate: { y: -1 },
    });
    // bottom
    addBox({
      topFace: false,
      translate: { y: 1 },
    });
    // front
    addBox({
      rearFace: false,
      translate: { z: 1 },
    });
    // back
    addBox({
      frontFace: false,
      translate: { z: -1 },
    });
    // left
    addBox({
      rightFace: false,
      translate: { x: -1 },
    });
    // right
    addBox({
      leftFace: false,
      translate: { x: 1 },
    });

    var dot = new Zdog.Shape({
      addTo: model,
      translate: { y: -2 },
      stroke: 1,
      color: gold,
    });
    dot.copy({
      translate: { y: 2 },
      color: gold,
    });
    dot.copy({
      translate: { x: -2 },
      color: yellow,
    });
    dot.copy({
      translate: { x: 2 },
      color: garnet,
    });
    dot.copy({
      translate: { z: -2 },
      color: orange,
    });
    dot.copy({
      translate: { z: 2 },
      color: eggplant,
    });

  })();


  // -------------------------- gear -------------------------- //

  ( function() {

    var canvas = elem.querySelector('.illo-showcase__illo--3');
    // var illoSize = 48;
    var zoom = 4;

    var illo = new Zdog.Illustration({
      element: canvas,
      zoom: zoom,
      rotate: { x: -TAU/8 },
    });
    illos.push( illo );

    new Zdog.Dragger({
      startElement: canvas,
      onDragStart: controlDragStart,
      onDragMove: controlDragMove,
    });


    // -- illustration shapes --- //

    var teeth = 8;
    var frontZ = { z: 3 };
    var backZ = { z: -3 };

    var gearPath = ( function() {
      var path = [];
      var teethCount = teeth * 4;
      for ( var i=0; i < teethCount; i++ ) {
        var isOuter = i % 4 < 2;
        var radius = isOuter ? 12 : 9.5;
        var theta = Math.ceil( i/2 ) * 2;
        theta += i % 2 ? -0.2 : 0.2;
        theta = ( theta/teethCount + 1/teethCount ) * TAU ;
        path.push({
          x: Math.cos( theta ) * radius,
          y: Math.sin( theta ) * radius,
        });
      }
      return path;
    })();

    var gear = new Zdog.Anchor({
      addTo: illo,
      rotate: { x: TAU/4 },
    });

    var faceGroup = new Zdog.Group({
      addTo: gear,
      translate: frontZ,
    });
    // gear face
    new Zdog.Shape({
      addTo: faceGroup,
      path: gearPath,
      color: gold,
      backface: false,
      fill: true,
      stroke: 1/zoom,
      closed: false,
      // visible: false,
    });
    // nub
    new Zdog.Cylinder({
      addTo: faceGroup,
      diameter: 6,
      length: 2,
      color: eggplant,
      backface: white,
      translate: { z: 1 },
      fill: true,
      stroke: false,
    });

    faceGroup.copyGraph({
      rotate: { y: TAU/2 },
      translate: backZ,
    });

    gearPath.forEach( function( corner, i ) {
      // return;
      var nextCorner = gearPath[ i + 1 ] || gearPath[0];
      new Zdog.Shape({
        addTo: gear,
        path: [
          new Zdog.Vector( corner ).add( frontZ ),
          new Zdog.Vector( corner ).add( backZ ),
          new Zdog.Vector( nextCorner ).add( backZ ),
          new Zdog.Vector( nextCorner ).add( frontZ ),
        ],
        color: i % 2 ? gold : eggplant,
        fill: true,
        stroke: 1/zoom,
      });
    });

  })();

    // -------------------------- shade & shades -------------------------- //

  ( function() {
    
    var canvas = elem.querySelector('.illo-showcase__illo--4');
    // var illoSize = 96;

    var illo = new Zdog.Illustration({
      element: canvas,
      zoom: 2,
      rotate: { y: -TAU/8 },
      dragRotate: true,
      onDragStart: function() {
        isSpinning = false;
      }
    });
    illos.push( illo );

    new Zdog.Dragger({
      startElement: canvas,
      onDragStart: controlDragStart,
      onDragMove: controlDragMove,
    });

    // -- illustration shapes --- //

    // cap top
    [ 0, 1, 2, 3, 4 ].forEach( function( i ) {
      new Zdog.Shape({
        path: [
          { x: -20, y: 4 },
          { x: -20, y: 0 },
          { arc: [
            { x: -20, y: -20 },
            { x:   0, y: -20 },
          ]},
        ],
        rotate: { y: TAU/6 * i -TAU/12 },
        addTo: illo,
        closed: false,
        stroke: 3,
        color: orange,
      });
    });

    // cap back
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 40,
      quarters: 2,
      translate: { y: 4 },
      rotate: { x: TAU/4, z: -TAU/4 },
      closed: false,
      stroke: 3,
      color: orange,
    });

    // cap back to brim bottom connect
    var brimConnector = new Zdog.Shape({
      path: [
        { x: -20, z: 0 },
        { arc: [
          { x: -20, z: 6 },
          { x: -16, z: 12 },
        ]},
      ],
      addTo: illo,
      translate: { y: 4 },
      closed: false,
      stroke: 3,
      color: orange,
    });

    brimConnector.copy({
      scale: { x: -1 },
    });

    // brim back arch
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 32,
      quarters: 2,
      translate: { y: 4, z: 12 },
      rotate: { z: -TAU/4 },
      closed: false,
      stroke: 3,
      color: orange,
    });

    var brimTip = new Zdog.Vector({ x: 0, y: -12, z: 34 });
    var brimEdge = brimTip.copy();
    brimEdge.x = -14;

    // brim top line
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: 0, y: -12, z: 12 },
        brimTip,
      ],
      closed: false,
      stroke: 3,
      color: orange,
    });

    var brimBridge = new Zdog.Shape({
      addTo: illo,
      path: [
        { x: -16, y: 4, z: 12 },
        { x: -16, y: 4, z: 18 },
        { bezier: [
          { x: -16, y: 4, z: 30 },
          brimEdge,
          brimTip
        ]},
      ],
      closed: false,
      stroke: 3,
      color: orange,
    });
    brimBridge.copy({
      scale: { x: - 1},
    });

    // glasses front top
    var glassFront = new Zdog.Shape({
      addTo: illo,
      path: [
        { x: -16 },
        { x:  16 }
      ],
      translate: { y: 8, z: 12 },
      color: eggplant,
      closed: false,
      stroke: 3,
    });

    // glass lens
    var glassLens = new Zdog.Shape({
      addTo: glassFront,
      path: [
        { x: -1, y: -1 },
        { x:  1, y: -1 },
        { x:  1, y:  0 },
        { arc: [
          { x: 1, y: 1 },
          { x: 0, y: 1 },
        ]},
        { arc: [
          { x: -1, y: 1 },
          { x: -1, y: 0 },
        ]},
      ],
      closed: true,
      scale: 5,
      translate: { x: -8, y: 5 },
      color: eggplant,
      fill: true,
      stroke: 3,
    });

    glassLens.copy({
      translate: { x: 8, y: 5 },
    });

    // glasses arm
    var glassesArm = new Zdog.Shape({
      addTo: illo,
      path: [
        { x: 12, y: 0 },
        { x: -1, y: 0 },
        { arc: [
          { x: -12, y: 0 },
          { x: -12, y: 8 },
        ]},
      ],
      rotate: { y: TAU/4 },
      translate: { x: -16, y: 8 },
      color: eggplant,
      // only see one arm at time
      backface: false,
      stroke: 3,
      closed: false,
    });
    glassesArm.copy({
      scale: { x: -1 },
      rotate: { y: -TAU/4 },
      translate: { x: 16, y: 8 },
    });

  })();

  // ------------------------- animate ------------------------- //

  var initialRotates = illos.map( function( illo ) {
    return illo.rotate.copy();
  });

  var t = 0;

  function animate() {
    if ( isSpinning ) {
      viewRotation.y = Zdog.easeInOut( t % 1, 3 ) * TAU;
      t += 1/150;
    }
    illos.forEach( animateEachIllo );
    requestAnimationFrame( animate );
  }

  var eachRotate = new Zdog.Vector();

  function animateEachIllo( illo, i ) {
    var initialRotate = initialRotates[i];
    eachRotate.set( viewRotation ).add( initialRotate );
    illo.rotate.set( eachRotate );
    illo.updateGraph();
    illo.renderGraph();
  }

  animate();

};
