# New Project Starter Kit

> This repository is deprecated and archived.

This starter kit consists of an Express REST API with CRUD capabilities, powered by a Node server, connected to a MongoDB database with Mongoose, and configured for Heroku deployment. This powers a client-side JAMstack static website built with Eleventy, Gulp, PostCSS, and Webpack, and configured for deployment to a CDN via Netlify. The full stack has CI/CD setup - deploy both server and client by merging a pull request into the master branch on GitHub.

Sass is linted, transpiled into CSS, post-processed with PostCSS, beautified in development, and minified in production, with source maps. JavaScript is linted, transpiled with Babel, bundled with Webpack, concatenated, and minified in production, with source maps.

This is an open source project which uses [The Hippocratic License][license].

[NewProjectStarterKit.com][npsk]

## Quick Start

### Requirements

1. Node
  - Check if Node is installed: `node --version`
  - If you see a version number, such as `v14.2.0`, proceed to [Get Started](#get-started)
  - If Node isn't installed, [download][node-download] and install it (or use [nvm][nvm]), then proceed to [Get Started](#get-started)

### Get Started

Fork or clone this repo, install dependencies, add environment variables, and start:

```bash
# Clone the repo
git clone https://github.com/paulshryock/New-Project-Starter-Kit.git
cd New-Project-Starter-Kit

# Install dependencies
npm install

# Add environment variables:
# See ./config/custom-environment-variables.json
# and ./_docs/environment-variables.md
touch ./.env

npm start
```

Then find and replace the package name (`New-Project-Starter-Kit`) and author name (`Paul Shryock`) in [`LICENSE`][license], [`package.json`][pkg], and `README.md`.

## Documentation

[Project documentation][docs] files are in the `_docs` directory.

## Contributing

If you'd like to contribute, please read the [Code of Conduct][code-of-conduct] and [Contributing instructions][contributing], then fork the repository and use a feature branch. Pull requests are welcome.

[netlify-deploy-badge]: https://api.netlify.com/api/v1/badges/4a56c891-9260-44a1-a4b6-6e9522bc37a8/deploy-status
[netlify-deploys]: https://app.netlify.com/sites/newprojectstarterkit/deploys
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard]: https://standardjs.com
[jwt-compatible-badge]: https://jwt.io/img/badge-compatible.svg
[jwt]: https://jwt.io/
[npsk]: https://newprojectstarterkit.com/
[license]: https://firstdonoharm.dev/
[node-download]: https://nodejs.org/en/download/
[nvm]: https://github.com/nvm-sh/nvm
[pkg]: package.json
[docs]: https://docs.newprojectstarterkit.com/
[code-of-conduct]: blob/master/CODE_OF_CONDUCT.md
[contributing]: blob/master/CONTRIBUTING.md
