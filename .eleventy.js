const config = require('config')
const debug = require('debug')('build:eleventy')
const Api = require('./modules/api.js')
const { getToken, getCollection } = new Api()
const yaml = require("js-yaml")
const axios = require('axios')

// Define collections
const collections = [
  { plural: 'articles', single: 'article', source: 'api' },
  { plural: 'projects', single: 'project', source: 'api' },
  { plural: 'testimonials', single: 'testimonial', source: 'api' },
  { plural: 'pages', single: 'page', source: 'local' }
]

{
  (async function () {
    await getToken()
  })()
}

module.exports = function (eleventyConfig) {

  // TODO: Add Eleventy filter(s) for customized sorting
  // https://github.com/11ty/eleventy/issues/898#issuecomment-617628635

  // Create collections
  collections.map(c => {
    eleventyConfig.addCollection(c.plural, async collection => {
      switch (c.source) {
        case 'api':
          const response = await getCollection(c)
          return response ? response : []
          break;
        default:
          return collection
            .getAll()
            .filter(post => post.data.contentType === c.single)
          break;
      }
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
      input: config.get('paths.src.client'),
      layouts: '_layouts',
      output: config.get('paths.build.client')
    }
  }
}
