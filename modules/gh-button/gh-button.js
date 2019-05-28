( function() {

  var ghButtonGUID = 0;

  ZdogDocs.ghButton = function( elem ) {

    var hrefParts = elem.href.split('/');
    var user = hrefParts[3];
    var repo = hrefParts[4];
    var statTextElem = elem.querySelector('.gh-button__stat__text');

    // get data
    ghButtonGUID++;
    var callbackName = 'ghButtonCallback' + ghButtonGUID;

    window[ callbackName ] = function( response ) {
      var starText = addCommas( response.data.stargazers_count );
      statTextElem.textContent = starText;
    };

    function addCommas( num ) {
      return num.toString().replace( /(\d)(?=(\d{3})+$)/g, '$1,' );
    }

    // create & load script
    var script = document.createElement('script');
    script.src = 'https://api.github.com/repos/' + user + '/' + repo +
      '?callback=' + callbackName;
    document.head.appendChild( script );

  };

})();
