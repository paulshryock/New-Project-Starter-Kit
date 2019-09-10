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

## 0.27.0 - 2019-09-10 - Restructure

### Added
- Configure Eleventy: data, includes, input, layouts, output, collections, Passthrough file copy (`.eleventy.js`)
- Add npm scripts (`package.json`)
- Add assets, data, includes, layouts, content (`/src/*`)
- Add environment variables (`.env`)
- Add configuration files (`/config`)
- Add scripts (`/_scripts`)

### Changed
- Move assets and content into platform directories (`app`, `cms`, `email`, `site`)
- Update GitHub Issue and Pull Request templates
- Update lighthouse script and move into `/_scripts/lighthouse.sh`
- Move lighthouse logs into `/_logs/lighthouse`
- Update Netlify config (`/netlify.toml`)
- Update Zeit Now config (`/now.json`)
- Update page markup

### Fixed
- Fix API post content

### Security
- Update dependencies

## 0.26.0 - 2019-08-01 - Clean up dependencies

### Added
- Install npm-run-all

### Changed
- Update npm scripts
- Update dependencies
- Update gitignore

### Removed
- Remove Readme links
- Remove package-lock.json

### Fixed
- Fix eleventy error
- Fix linter warnings

## 0.25.0 - 2019-06-12 - Full Width component

### Added
- Add full width component

## 0.24.0 - 2019-06-07 - Performance budget

### Added
- Add budget.json
- Add Performance Budget docs
- Install Lighthouse cli
- Add aspect ratio classes

### Changed
- Upgrade Eleventy to 0.8.3

### Fixed
- Clean up StandardJS warnings
- Audit and fix dev dependency vulnerability

## 0.23.3 - 2019-06-05 - Security fix

### Removed
- Remove package-lock.json

## 0.23.2 - 2019-06-05 - Security fix

### Fixed
- Fix security vulnerability

## 0.23.1 - 2019-05-30 - Security fixes, Navigation fix

### Fixed
- Fixed 3 high severity vulnerabilities
- Fix navigation condition

## 0.23.0 - 2019-04-24 - Navigation data file, Package updates

### Added
- Add navigation data file
- Add API files

### Changed
- Update npm packages
- Update babel corejs version
- Run standard to fix some js syntax
- Update project description
- Update page title markup

## 0.22.0 - 2019-04-24 - Sass variables, StandardJS, more config

### Added
- Add Sass variables
- Install StandardJS
- Add Netlify Status badge to Readme
- Add cms subdomain proxy redirect to /cms
- Add humans credits
- Add a few style resets
- Add cms deploy context to Netlify config
- Add .nvmrc

### Changed
- Update Now alias
- Update pull request template
- Update Readme description
- Style focus state
- Update docs link in Readme
- Redirect default Netlify subdomain to primary domain
- Update Eleventy
- Put humans before robots
- Add canonical links to head
- Disable Netlify CMS content previews
- Add Netlify CMS display url
- Update Pages and Articles CMS description
- Swap CMS config display_url for site_url
- Update Readme description
- Move local serve port into Eleventy config

### Removed 
- Remove duplicate docs files

### Fixed
- Fix image and font directory locations

## 0.21.0 - 2019-03-26 - CMS, Styles, Strict JS

### Added
- Install postcss-easy-import
- Add strict mode to JS files
- Add thanks credits in humans.txt
- Add cms.js
- Add cms Passthrough
- Update netlify config
- Deploy dev branch

### Changed
- Update default and component styles
- Update project description
- Chunk CSS includes
- Rename 'defaults' styles to 'elements'
- Lower input type selectors' specificity
- Update CMS title

### Removed
- Uninstall postcss-import

### Fixed
- Fix npm clean scripts
- Fix image webpacking

## 0.20.0 - 2019-03-25 - JSHint, Docs

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

## 0.19.0 - 2019-03-08 - Dependencies, Docs, Configs

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

## 0.18.0 - 2019-03-08 - CMS, Navigation, Docs, Configs

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

## 0.17.0 - 2019-03-08 - Configure GitBook, Organize Docs

### Added
- Add content docs

### Changed
- Update pdf paper size
- Organize docs files

## 0.16.0 - 2019-03-08 - GitBook

### Added
- Configure GitBook

## 0.15.0 - 2019-03-08 - Components

### Added
- Style components

### Removed
- Remove form layout_class
- Remove markdown code spaces

## 0.14.0 - 2019-03-07 - Styles, Data, Body Classes

### Added
- Add Pull Request template checklist items

### Changed
- Update default styles
- Update body classes
- Update package and site data

## 0.13.0 - 2019-03-06 - Zeit Now

### Added
- Configure Zeit Now

## 0.12.0 - 2019-03-05 - Netlify

### Added
- Configure Netlify

## 0.11.0 - 2019-03-05 - Titles, Meta

### Added
- Add document head meta for PWA, icons, colors

### Changed
- Update site data
- Update page titles
- Reorder document head meta

## 0.10.0 - 2019-03-05 - Images, New Title

### Added
- Install `image-webpack-loader`

### Changed
- Give the project a new title

## 0.9.0 - 2019-03-01 - Favicon, Data, Includes

### Added
- Add generic `src/favicon.ico` and favicon images to `src/_assets/img` to be replaced later
- Add data files
  - `server.11tydata.js`
  - `site.11tydata.js`
- Add includes
  - `_globals`
  - `_layouts`

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
  - @babel/core
  - @babel-polyfill
  - @babel/preset-env
  - @babel/register
  - babel-loader
- Let git ignore generated files
- Add `browser.js`

### Changed
- Update npm scripts
- Update webpack configuration

## 0.5.0 - 2019-03-01 - PostCSS

### Added
- Install PostCSS
- Install PostCSS plugins
  - autoprefixer
  - cssnano
  - postcss-node-sass
  - postcss-preset-env
  - precss
- Install webpack plugins
  - style-loader
  - css-loader
  - mini-css-extract-plugin
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