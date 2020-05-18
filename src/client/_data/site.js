const site = {
  title: 'New Project Starter Kit',
  description: 'JAMstack website built with Eleventy, Gulp, PostCSS, and Webpack. Node/Express REST API with CRUD capabilities, connected to MongoDB with Mongoose.',
  lang: 'en-US',
  year: new Date().getFullYear(),
  timestamp: new Date()
}

site.copyright = `&copy; ${site.year} ${site.title}. All rights reserved.`

module.exports = site
