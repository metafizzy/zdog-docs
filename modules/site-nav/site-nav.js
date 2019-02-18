ZdogDocs.siteNav = function( elem ) {
  var basename = document.body.getAttribute('data-basename');
  var className = '.site-nav__item--' + basename;
  var selectedItem = elem.querySelector( className );
  if ( selectedItem ) {
    selectedItem.classList.add('is-selected');
  }
};
