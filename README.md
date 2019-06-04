# Zdog docs

Documentation site for [Zdog](https://github.com/metafizzy/zdog) - Flat, round, designer-friendly pseudo 3D engine

[zzz.dog](https://zzz.dog)

## Install

Install dependencies with npm.

``` bash
npm install
```

## Tasks

+ `gulp` - build the production site, concatenate CSS and JS, minify JS
+ `gulp dev` - build the site, but use separate CSS and JS files for debugging
+ `gulp hint` - Lint JavaScript and JSON files

## Structure

+ `assets/` - files that get copied into `build/`. Fonts and images have been ignored from the repo
+ `base/` - boilerplate CSS and JS files
+ `build/` - where static site gets built
+ `content/` - page content
+ `data/` - site data
+ `demos/` - in-page demo modules, similar to modules
+ `modules/` - See Modules below
+ `tasks/` - Gulp tasks to build the site
+ `templates/` - page templates

## Modules

Modules are re-usable components used throughout the site. A module may consist of template, JS, and CSS files.

    modules/
      page-nav/
        page-nav.css
        page-nav.js
        page-nav.hbs

[BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) is used for CSS code style.

``` css
.page-nav {} /* block */
.page-nav__item {} /* element, child */
.page-nav--dark {} /* modifier */
```

JavaScript can be initialized for each element with `data-js` attribute.

``` html
<div class="page-nav" data-js="pageNav">
```

``` js
ZdogDocs.pageNav = function( elem ) {
  // do something with elem
};
```

---

Made by [Metafizzy](https://metafizzy.co) 🌈🐻
