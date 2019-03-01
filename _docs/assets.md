# Assets

- [JavaScript](#javascript)
- [CSS](#css)

## JavaScript

- Babel (`.babelrc`)
	- preset-env: @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

JavaScript files are in the `scr/_assets/js` directory. `app.js` requires `browser.js`, `a11y.js`, and `navigation.js`, and includes `app.css`, which tells webpack to process CSS.

## CSS

- PostCSS (`postcss.config.js`)
	- precss: Use Sass-like markup in your CSS
  - postcss-node-sass: Parse styles with node-sass
  - postcss-preset-env: Convert modern CSS into something browsers understand
  - autoprefixer: Add vendor prefixes
  - cssnano: Modern CSS compression

CSS files are in the `scr/_assets/css` directory. `app.css` includes `_defaults.css`, `_modules.css`, and `_components.css`, which include their own modularized partials.