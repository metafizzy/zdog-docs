const transfob = require('transfob');

// get <h2>title</h2>
const reHeader = /\n<h([23])>([\w _#&;\.\(\)\$\-]+)<\/h[23]>/gi;
//

module.exports = function pageNav() {
  return transfob( function( file, enc, next ) {
    let contents = file.contents.toString();
    // add to @file.pageNavItems
    // const pageNavItems = [];
    let navItems = [];
    let h2Slug;
    // insert slugs into headers
    contents = contents.replace( reHeader, function( full, number, title ) {
      // remove HTML entities &
      let slug = title.replace( /&\w+;/gi, '' )
        // replace non-alphanumeric characters with dashes
        .replace( /[^\w]+/gi, '-' )
        // trim trailing hyphens
        .replace( /^\-/, '' ).replace( /\-$/, '' ).toLowerCase();

      if ( number == '2' ) {
        // create page-nav <li> html
        navItems.push(`<li class="page-nav__item--h${number}">
          <a href="#${slug}">${title}</a></li>`);
        h2Slug = slug;
      } else {
        // prefix h2 slug on h3 slugs
        slug = `${h2Slug}-${slug}`;
      }

      return `\n<h${number} id="${slug}" class="hashed-header"><a class="hashed-header__link" href="#${slug}"></a>${title}
        </h${number}>`;
    });

    // insert page-nav HTML
    let pageNavHTML = '<ul class="page-nav">\n' +
      navItems.join('\n') + '\n</ul>';
    contents = contents.replace( '<ul class="page-nav"></ul>', pageNavHTML );

    file.contents = Buffer.from( contents );
    next( null, file );
  });
};
