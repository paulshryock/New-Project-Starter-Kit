const site = require('../../_data/site.js')

class Home {
  // or `async data() {`
  // or `get data() {`
  data () {
    return {
      title: 'Home',
      seoTitle: 'New Project Starter Kit | JAMstack Site & Express API',
      description: 'This is the description.',
      slug: '.',
      date: new Date('2020-01-01T00:00:00-5'),
      layout: 'home',
      hero: {
        content: `<h2>JAMstack Site &amp; Express API</h2>
    <p>Get a head start on new projects</p>
    <a class="button button_ko" href="/github">Get Started</a>`
      },
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    return `[![Netlify Status][netlify-deploy-badge]][netlify-deploys] [![JavaScript Style Guide][standard-badge]][standard]

[![JWT Compatible][jwt-compatible-badge]][jwt]

This starter kit consists of an Express REST API with CRUD capabilities, powered by a Node server, connected to a MongoDB database with Mongoose, and configured for Heroku deployment. This powers a client-side JAMstack static website built with Eleventy, Gulp, PostCSS, and Webpack, and configured for deployment to a CDN via Netlify. The full stack has CI/CD setup - deploy both server and client by merging a pull request into the master branch on GitHub.

Sass is linted, transpiled into CSS, post-processed with PostCSS, beautified in development, and minified in production, with source maps. JavaScript is linted, transpiled with Babel, bundled with Webpack, concatenated, and minified in production, with source maps.

This is an open source project which uses [The Hippocratic License][license].

[netlify-deploy-badge]: https://api.netlify.com/api/v1/badges/4a56c891-9260-44a1-a4b6-6e9522bc37a8/deploy-status
[netlify-deploys]: https://app.netlify.com/sites/newprojectstarterkit/deploys
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard]: https://standardjs.com
[jwt-compatible-badge]: https://jwt.io/img/badge-compatible.svg
[jwt]: https://jwt.io/
[license]: https://firstdonoharm.dev/`
  }
}

module.exports = Home
