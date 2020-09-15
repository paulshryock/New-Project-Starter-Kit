const config = require('config')
const SRC = config.get('paths.src.client')
const BUILD = config.get('paths.build.client')
const url = config.get('api.url')
const debug = require('debug')('build:eleventy')
const Api = require('./modules/api.js')
const yaml = require("js-yaml")
const axios = require('axios')

// Define collections
const collections = [
  {
    plural: 'articles',
    single: 'article',
    location: 'api'
  },
  {
    plural: 'projects',
    single: 'project',
    location: 'api'
  },
  {
    plural: 'testimonials',
    single: 'testimonial',
    location: 'api'
  },
  {
    plural: 'pages',
    single: 'page',
    location: 'local'
  }
]

// Get API token
const api = new Api()

if (api) {
  (async function () {
    await api.login()
  })()
}

module.exports = function (eleventyConfig) {

  // TODO: Add Eleventy filter(s) for customized sorting
  // https://github.com/11ty/eleventy/issues/898#issuecomment-617628635

  // Create collections
  collections.map(c => {
    eleventyConfig.addCollection(c.plural, async collection => {
      // Add API collections
      if (api && c.location === 'api') {
        const response = await api.addCollection(c)
        return response ? response : []
      }
      // Add local collections
      return collection
        .getAll()
        .filter(post => post.data.contentType === c.single)
    })
  })

  // Add custom data file extension(s)
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents))

  // Deep merge
  eleventyConfig.setDataDeepMerge(true)

  // Support for cooldown period between builds during watch/serve
  eleventyConfig.setWatchThrottleWaitTime(4 * 1000) // 4 seconds

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: SRC,
      layouts: '_layouts',
      output: BUILD
    }
  }
}
