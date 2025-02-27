# WebChallange_31

PSD design converted to responsive website.

Page is available at: https://mamucha.github.io/WebChallange_31/

More information about the project:
* [BEM](#bem)
* [CSS specificty](#css-specificity)
* [Media queries](#media-queries)
* [Accessibility](#accessibility)
* [File structure](#file-structure)
* [Gulp](#gulp)


## BEM

[BEM methodology](https://en.bem.info) has been used in this project.

**Block - Standalone entity that is meaningful on its own**
```html
  nav, container, menu, checkbox
```

**Element - Part of a block with no standalone meaning**
```html
  nav__item, list__item, checkbox__caption
```

**Modifier - A variation of a block or element**
```html
  nav__item--active, checkbox--checked, nav--fixed, nav-dark
```

### Types of modifiers are used:

- Namespaces <br>
Namespaces are used to add more scalability and maintainability to the code and to make it more self documented. There are few prefixed terms in use.

**Layouts**
```html
 l-header, l-section, l-wrapper
```

**Component**
```html
  c-button, c-card, c-contact
```

**Helper**
```html
  h-active, h-nav
```



 - a boolean flag<br>
    Original block/element name + double dash + mod name<br>
    **.prefix-block--mod** or **.prefix=block__elem--mod**
 - a key/value pair<br>
    Original block/element name + double dash + mod key name + single underscore + mod value<br>
    **.prefix-block--key_value** or **.prefix-block__elem--key_value**
    
For example:
```html
  <nav class="l-section l-section--about">...</nav>
  <div class="c-menu__burger c-menu__burger--open">...</div>
```

## CSS specificity

It is often [recommended](https://csswizardry.com/2014/10/the-specificity-graph/) to keep specificity low, consistent and very little difference between the selectors in order to make the stylesheet maintainable.
Use of BEM methodology in this project allowed to keep specificity low and avoid spikes.
https://github.com/mamucha/WebChallange_31/blob/master/resources/css_specificity_graph.png


## Media queries
Inspired by Dominique Briggs' [solution](https://medium.com/front-end-developers/the-solution-to-media-queries-in-sass-5493ebe16844)


Example: <br>
_block.scss
```css
@mixin c-block\@screen_large {
    .c-block { styles }
```
_media-queries.scss
```css
@media only screen and (min-width: 1042px) {
  @include c-block\@screen_large;
```

## File structure

The Sass architecture in this project is a modification of solution introduced in Hugo Giraudel's Sass Guidelines:

-> https://sass-guidelin.es/#architecture

```
src/
|
|--js/
|   |--app.js                       # Compile js.file
|
|--scss/
    |-- abstracts/                  # Global Mixins, Variables and Fonts
    |   |-- _abstracts-dir.scss
    |
    |-- base/                       # Base styles, Typography, Reset
    |   |-- _base-dir.scss
    |
    |-- componets/                  # Blocks, Elements and Modifiers
    |   |-- _components-dir.scss/
    |
    |-- layouts/                    # Larger layout components and media-queries styles.
    |   |-- _layouts-dir.scss
    |
    |-- vendor/                      
    |   |-- _normalize.scss         # Normalize.css v8.0.1
    |
    |-- style.scss                  # Main Scss file compiles to style.css

```



## Gulp

Gulp is a build system for automating tasks.
- Minification (Compress/Uglyfy)
- Minification (Compress/Uglyfy)
- Compile Sass, LESS files for you
- Combining multiple js/css files into single file respectively
- Converting SVG icons to fonts
- Live browser reload
- CSS browser prefix can be automated for eg.


setting the working environment -> http://domanart.pl/gulp/

