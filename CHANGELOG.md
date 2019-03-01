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

## 0.6.0 - 2019-03-01 - Babel

### Added
- Install and configure Babel
  - [x] @babel/cli
  - [x] @babel/core
  - [x] @babel/preset-env
  - [x] babel-loader
- Let git ignore generated files

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