# New Project Starter Kit

[![Netlify Status][deploy-status]][deploys]
[![JavaScript Style Guide][standard-badge)][standard]

Fork this repository to start a new project with Eleventy, Netlify CMS, Gulp, Babel, PostCSS, and the following workflow: linting, Sass and modern CSS transpiling, ES2015+ compiling, concatenation, minification, beautification, source maps, bundling fonts, images, and favicons, serving files, watching for changes, and live reloading. Includes common accessible HTML, CSS, and JS components, and continuous deployment configurations for Netlify and Zeit Now.

This is an open source project which uses the [The Hippocratic License][license].

[NewProjectStarterKit.com][npsk]

## Quick Start

### Requirements

1. Node
  - Check if Node is installed: `node --version`
  - If you see a version number, such as `v11.6.0`, proceed to [Get Started](#get-started)
  - If Node isn't installed, [download][node-download] and install it, then proceed to [Get Started](#get-started)

### Get Started

Fork or clone this repo, install dev dependencies, and start:

```bash
git clone https://github.com/paulshryock/New-Project-Starter-Kit.git
cd New-Project-Starter-Kit
npm i
npm start
```

Then find and replace the package name (`New-Project-Starter-Kit`) and author name (`Paul Shryock`) in [`LICENSE`][license], [`package.json`][pkg], and `README.md`.

## CLI

- `npm start`: Builds website for production
- `npm run build`: Builds website for production 
- `npm run develop`: Builds website for development
- `npm run watch`: Builds markup and watches for changes
- `npm run serve`: Builds website for development, serves to `localhost:8080`, and watches for changes to assets

<!-- ## Documentation -->

<!-- [Project documentation][docs] files are in the `_docs` directory. -->

## Contributing

If you'd like to contribute, please read the [Code of Conduct][code-of-conduct] and [Contributing instructions][contributing], then fork the repository and use a feature branch. Pull requests are welcome.

[deploy-status]: https://api.netlify.com/api/v1/badges/a1031bfd-6642-45fe-9547-2438c4bc0de4/deploy-status
[deploys]: https://app.netlify.com/sites/npsk/deploys
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard]: https://standardjs.com
[license]: https://firstdonoharm.dev/
[pkg]: package.json
[npsk]: https://newprojectstarterkit.com/
[node-download]: https://nodejs.org/en/download/
[docs]: https://docs.newprojectstarterkit.com/
[code-of-conduct]: blob/master/CODE_OF_CONDUCT.md
[contributing]: blob/master/CONTRIBUTING.md