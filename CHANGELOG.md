# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](changelog),
and this project adheres to [Semantic Versioning](semver).

<!--
## X.X.X - XXXX-XX-XX - XXXXXX

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->

## 0.32.0 - 2020-06-05 - Many changes

### Added
- Add a GitHub Action to ping Heroku every 20 minutes
- Add header to block robots on /analytics/*
- Add site title and description data
- Add server redirect for /github
- Add some TODO comments
- Add `content` field to `Project` model
- Validate built HTML during development watching
- Let git ignore Cloudflare Worker files
- Add slugignore to reduce Heroku compiled slug
- Add husky
- Add `.env.example`

### Changed
- Update GitHub issue templates
- Reorder server redirects
- Update navigation URLs
- Unconstrain masthead layout width
- Style masthead top border
- Update website maximum width
- Reset image display property inside paragraphs
- Update home page content
- Convert content files to `*.11ty.js` files
- Improve `origin` and `referrer` headers comparison during auth
- Update Heorku API redirect
- Update environment variables
- Rename debug namespace
- Simplify Eleventy collection creation
- Update Eleventy site data
- Update scripts include syntax
- Update docs

### Removed
- Remove some extra pages
- Remoev robots.txt file
- Remove passwords from `getUsers` response

### Fixed
- Fix card components functions' return values
- Fix active navigation item logic and markup
- Fix navigation CSS nesting
- Prevent masthead title from wrapping when more navigation items are present
- Fix Readme description typo
- Fix unique Project validation
- Fix Eleventy collection API url

### Security
- Update dependencies

## 0.31.0 - 2020-05-14 - Better Docs

### Changed
- Update Readme Get Started instructions
- Update Docs

## 0.31.0 - 2020-05-14 - Fix scrolling, Better navigation markup

### Added
- Set Eleventy watch throttle wait time
- Add CSS TODO comments
- Set default `<img>` `aspect-ratio` based on `width` and `height` attributes

### Changed
- Update Readme URLs and example Node version number
- Rename `.screen-reader-text` CSS class to `.visually-hidden`
- Improve navigation markup with better a11y

### Fixed
- Prevent horizontal scrolling
- Fix smooth scrolling

### Security
- Update dependencies (minor and bugfix version bumps)

## 0.30.0 - 2020-04-30 - Analytics, Better Build Pipeline

### Added
- Add analytics tracking code
- Add redirect for analytics
- Add TODO comments
- Add YAML data extension
- Add HTML validation
- Add SVG minification
- Add page level scripts

### Changed
- Update configs
- Update build pipeline
- Update project description
- Update browserslist to use defaults
- Clean up client-side JavaScript code

### Deprecated
- Remove deprecated elements

### Removed
- Remove redundant aria roles

### Fixed
- Fix netlify redirect
- Fix Eleventy watching layout changes in development

## 0.29.0 - 2020-04-20 - Improve authorization, model lengths

### Added
- Add token refresh
- Add logout
- During authorization, if `origin` or `referrer` header doesn't match current domain, deny access
- During authorization, if token is expired, deny access
- Add token creation time and expiration
- Add min and max lengths to model properties

### Changed
- Only send HSTS header in production
- Update token cookie `maxAge` to 1 week
- When creating user, only set secure cookie in production
- Update token body properties

### Removed
- Remove logout middleware

## 0.28.0 - 2020-04-17 - Add Express server

### Added
- Migrate everything over from Express-Starter repo

### Changed
- Link Netlify/Heroku servers to this repo

## 0.27.0 - 2019-11-02 - Restructure and simplify

### Added
- Configure Eleventy: data, includes, input, layouts, output, collections, Passthrough file copy (`.eleventy.js`)
- Add assets, data, includes, layouts, content (`/src/*`)
- Add configuration files (`/config`)
- Add scripts (`/_scripts`)
- Add Gulp

### Changed
- Update GitHub Issue and Pull Request templates
- Update lighthouse script and move into `/_scripts/lighthouse.sh`
- Move lighthouse logs into `/_logs/lighthouse`
- Update Netlify config (`/netlify.toml`)
- Update Zeit Now config (`/now.json`)
- Update page markup

### Removed
- Remove webpack

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

[changelog]: https://keepachangelog.com/en/1.0.0/
[semver]: https://semver.org/spec/v2.0.0.html