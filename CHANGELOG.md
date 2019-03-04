# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
## X.X.X - XXXX-XX-XX - XXXXXX

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->

## 0.10.0 - 2019-03-04 - Images

### Added
- Install `image-webpack-loader`

## 0.9.0 - 2019-03-01 - Favicon, Data, Includes

### Added
- [x] Add generic `src/favicon.ico` and favicon images to `src/_assets/img` to be replaced later
- [x] Add data files
	- `server.11tydata.js`
	- `site.11tydata.js`
- Add includes
	- [x] `_globals`
	- [x] `_layouts`
	- [ ] `_modules`
	- [ ] `_components`

## 0.8.0 - 2019-03-01 - Boilerplate, PWA, Service Worker

### Added
- Add boilerplate HTML files:
	- `boilerplate.html`
	- `form.html`
	- `index.html`
	- `kitchen-sink.html`
	- `offline.html`
- Add humans and robots txt files:
	- `humans.txt`
	- `robots.txt`
- Add pwa and service worker files:
	- `browserconfig.xml`
	- `manifest.json`
	- `serviceworker.js`
- Add CSS and JavaScript files
- Add Assets documentation in `_docs` directory

### Removed
- Remove `style-loader`

## 0.7.0 - 2019-03-01 - Eleventy

### Added
- Install and configure Eleventy
- Add `.eleventy.js`
- Add npm Scripts documentation in `_docs` directory

### Changed
- Update npm scripts

## 0.6.0 - 2019-03-01 - Babel

### Added
- Install and configure Babel
  - [x] @babel/core
  - [x] @babel-polyfill
  - [x] @babel/preset-env
  - [x] @babel/register
  - [x] babel-loader
- Let git ignore generated files
- Add `browser.js`

### Changed
- Update npm scripts
- Update webpack configuration

## 0.5.0 - 2019-03-01 - PostCSS

### Added
- Install PostCSS
- Install PostCSS plugins
	- [x] autoprefixer
	- [x] cssnano
	- [x] postcss-node-sass
	- [x] postcss-preset-env
	- [x] precss
- Install webpack plugins
	- [x] style-loader
	- [x] css-loader
	- [x] mini-css-extract-plugin
- Add `app.css`
- Add `.browserslistrc`

### Changed
- Swap postcss for postcss-loader
- Update npm script
- Update webpack configuration

## 0.4.0 - 2019-02-28 - Configure webpack

### Added
- Add npm private attribute and scripts
- Add `webpack.config.js`
- Add `app.js`

## 0.3.0 - 2019-02-28 - webpack

### Added
- Install webpack
- Install webpack cli

## 0.2.0 - 2019-02-28 - npm

### Added
- Install npm

## 0.1.0 - 2019-02-28 - Setup

### Added
- Add `.gitattributes`
- Add `.gitignore`
- Add `CHANGELOG.md`
- Add `CODE_OF_CONDUCT.md`
- Add `README.md`
- Add Issue and Pull Request templates