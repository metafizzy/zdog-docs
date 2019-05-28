( function() {

  // init all modules, based on their data-js attribute
  var jsModuleElems = document.querySelectorAll('[data-js]');
  for ( var i=0; i < jsModuleElems.length; i++ ) {
    var elem = jsModuleElems[i];
    var moduleName = elem.getAttribute('data-js');
    var module = ZdogDocs[ moduleName ];
    if ( module ) {
      // turn data-attributes into data
      var attrData = getAttrData( elem );
      module( elem, attrData );
    }
  }

  // get data-attribute and add to object
  function getAttrData( elem ) {
    var data = {};
    for ( var i=0; i < elem.attributes.length; i++ ) {
      var attr = elem.attributes[i];
      var keyMatch = attr.name.match( /data\-(\w+)/i );
      var key = keyMatch && keyMatch[1];
      if ( key ) {
        data[ key ] = attr.value;
      }
    }
    return data;
  }

})();
