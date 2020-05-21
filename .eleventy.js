const config = require('config')
const SRC = config.get('paths.src.client')
const BUILD = config.get('paths.build.client')
const yaml = require("js-yaml")
const api = require('./modules/api.js')
const debug = require('debug')('npsk:eleventy')

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
if (api) {
  // Async IIFE in order to use await
  (async function () {
    await api.login()
  })()
}

module.exports = function (eleventyConfig) {

  // TODO: Add Eleventy filter(s) for customized sorting
  // https://github.com/11ty/eleventy/issues/898#issuecomment-617628635

  // Create collections
  collections.map(type => {
    eleventyConfig.addCollection(type.plural, async collection => {
      // Add API collections
      if (api && type.location === 'api') {
        const response = await api.addCollection(type)
        // If collection exists, return it, else return an empty array
        if (response) {
          const pluralize = response.length > 1 ? type.plural : type.single
          debug(type.plural + ' collection was added with ' + response.length + ' ' + pluralize + '!')
          debug(type.plural + ' collection: ' + collection)
          return response
        }
        debug(type.plural + ' collection was not added!')
        return []
      }
      // Add local collections
      debug(type.plural + ' collection was added!')
      return collection.getAll().filter(post => post.data.contentType === type.single)
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
