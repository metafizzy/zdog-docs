var highlightjs = require('highlight.js');
var transfob = require('transfob');

highlightjs.configure({
  classPrefix: ''
});

var hljsJavascript = highlightjs.getLanguage('javascript');
// highlight Zdog classes
hljsJavascript.contains.push({
  className: 'zdog_class',
  begin: `Zdog\\.\\w+`,
});

hljsJavascript.keywords.demo_var = 'illo anchor rect circle shape';

function replaceCodeBlock( whiteSpace, block ) {
  if ( !block ) {
    return '';
  }
  var langMatch = block.match( /^ *([\w]+)\n/ );
  var language = langMatch && langMatch[1];
  // remove first line
  block = block.replace( /.*\n/, '' );
  // remove leading whitespace from code block
  if ( whiteSpace && whiteSpace.length ) {
    var reWhiteSpace = new RegExp( '^' + whiteSpace, 'gim' );
    block = block.replace( reWhiteSpace, '' );
  }
  // highlight code
  var highlighted = block;
  if ( language ) {
    highlighted = highlightjs.highlight( language, block, true ).value;
  }
  var codeAttr = language ? `class="${language}"` : '';
  return `<pre><code ${codeAttr}>${highlighted}</code></pre>\n`;
}

module.exports = function() {
  return transfob( function( file, enc, next ) {
    var contents = file.contents.toString();
    // split contents by ```, get leading white space
    var blocks = contents.split( /\n( *)```/ );
    var hiContent = '';
    for ( var i=0; i < blocks.length; i += 4 ) {
      var normBlock = blocks[i];
      var whitespace = blocks[ i + 1 ] || '';
      var codeBlock = blocks[ i + 2 ] || '';
      codeBlock = replaceCodeBlock( whitespace, codeBlock );
      hiContent += `${normBlock}\n${codeBlock}`;
    }
    file.contents = Buffer.from( hiContent );
    next( null, file );
  });
};
