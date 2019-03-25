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

## 0.21.0 - 2019-03-25 - [JSHint, Docs](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.21.0)

### Added

### Changed
- Update project description

## 0.20.0 - 2019-03-25 - [JSHint, Docs](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.20.0)

### Added
- Add docs summary links
- Install JSHint
- Add `.jshintrc`
- Add strict mode to js files
- Install postcss-import

### Changed
- Update Readme
- Lint js files and fix typos
- Update dev dependencies
- Move contributing instructions to CONTRIBUTING.md

## 0.19.0 - 2019-03-08 - [Dependencies, Docs, Configs](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.19.0)

### Added
- Add `pkg.company` for use in `/src/_data/site.json` in `copyright`
- Add deploy docs

### Changed
- Update dev dependencies
- Update quick start docs
- Update `browserconfig.xml`
- Update `humans.txt`
- Update `manifest.json`
- Update `robots.txt`
- Update `serviceworker.js`

## 0.18.0 - 2019-03-08 - [CMS, Navigation, Docs, Configs](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.18.0)

### Added
- Add deployment docs
- Add Netlify CMS
- Add Netlify `_redirects` file

### Changed
- Make navigation markup conditional
- Update Eleventy passthrough assets
- Update npm scripts
- Update git ignored files
- Update now ignored files and config settings
- Update webpack entry config and image path
- Update docs

## 0.17.0 - 2019-03-08 - [Configure GitBook, Organize Docs](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.17.0)

### Added
- Add content docs

### Changed
- Update pdf paper size
- Organize docs files

## 0.16.0 - 2019-03-08 - [GitBook](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.16.0)

### Added
- Configure GitBook

## 0.15.0 - 2019-03-08 - [Components](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.15.0)

### Added
- Style components

### Removed
- Remove form layout_class
- Remove markdown code spaces

## 0.14.0 - 2019-03-07 - [Styles, Data, Body Classes](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.14.0)

### Added
- Add Pull Request template checklist items

### Changed
- Update default styles
- Update body classes
- Update package and site data

## 0.13.0 - 2019-03-06 - [Zeit Now](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.13.0)

### Added
- Configure Zeit Now

## 0.12.0 - 2019-03-05 - [Netlify](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.12.0)

### Added
- Configure Netlify

## 0.11.0 - 2019-03-05 - [Titles, Meta](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.11.0)

### Added
- Add document head meta for PWA, icons, colors

### Changed
- Update site data
- Update page titles
- Reorder document head meta

## 0.10.0 - 2019-03-05 - [Images, New Title](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.10.0)

### Added
- Install `image-webpack-loader`

### Changed
- Give the project a new title

## 0.9.0 - 2019-03-01 - [Favicon, Data, Includes](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.9.0)

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

## 0.8.0 - 2019-03-01 - [Boilerplate, PWA, Service Worker](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.8.0)

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

## 0.7.0 - 2019-03-01 - [Eleventy](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.7.0)

### Added
- Install and configure Eleventy
- Add `.eleventy.js`
- Add npm Scripts documentation in `_docs` directory

### Changed
- Update npm scripts

## 0.6.0 - 2019-03-01 - [Babel](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.6.0)

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

## 0.5.0 - 2019-03-01 - [PostCSS](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.5.0)

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

## 0.4.0 - 2019-02-28 - [Configure webpack](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.4.0)

### Added
- Add npm private attribute and scripts
- Add `webpack.config.js`
- Add `app.js`

## 0.3.0 - 2019-02-28 - [webpack](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.3.0)

### Added
- Install webpack
- Install webpack cli

## 0.2.0 - 2019-02-28 - [npm](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.2.0)

### Added
- Install npm

## 0.1.0 - 2019-02-28 - [Setup](https://github.com/paulshryock/New-Project-Starter-Kit/releases/tag/v0.1.0)

### Added
- Add `.gitattributes`
- Add `.gitignore`
- Add `CHANGELOG.md`
- Add `CODE_OF_CONDUCT.md`
- Add `README.md`
- Add Issue and Pull Request templates