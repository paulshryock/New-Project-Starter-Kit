const htmlmin = require('html-minifier')
require('dotenv').config()

module.exports = function (eleventyConfig) {
  const eleventyEnv = process.env.ELVENTY_ENV

  if (eleventyEnv !== 'production') {
    // Configure BrowserSync
    eleventyConfig.setBrowserSyncConfig({
      port: process.env.PORT || 8080,
      server: `build/${process.env.PLATFORM || 'site'}`
    })
  }

  // Add Liquid filter: timePosted
  eleventyConfig.addLiquidFilter('timePosted', date => {
    const numDays = ((Date.now() - date) / (1000 * 60 * 60 * 24))
    const daysPosted = Math.round(parseFloat(numDays))
    const weeksPosted = parseFloat((numDays / 7).toFixed(0))
    const monthsPosted = parseFloat((numDays / 30).toFixed(0))
    const yearsPosted = parseFloat((numDays / 365).toFixed(1))

    if (daysPosted < 7) {
      return daysPosted + ' day' + (daysPosted !== 1 ? 's' : '') + ' ago'
    } else if (daysPosted < 30) {
      return weeksPosted + ' week' + (daysPosted !== 1 ? 's' : '') + ' ago'
    } if (daysPosted < 365) {
      return monthsPosted + ' month' + (daysPosted !== 1 ? 's' : '') + ' ago'
    } else {
      return yearsPosted + ' year' + (yearsPosted !== 1 ? 's' : '') + ' ago'
    }
  })

  if (eleventyEnv === 'production') {
    // Minify HTML output
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        })
        return minified
      }

      return content
    })
  }

  /**
    * Add content collections
    */
  const types = [
    { plural: 'pages', single: 'page' },
    { plural: 'articles', single: 'article' },
    { plural: 'projects', single: 'project' },
    { plural: 'testimonials', single: 'testimonial' }
  ]

  types.map(type => {
    eleventyConfig.addCollection(type.plural, collection => collection.getAll().filter(post => post.data.contentType === type.single))
  })

  // Add API collection
  eleventyConfig.addCollection('api', collection => {
    const posts = collection.getAll()
      .filter(post => !['api', 'cms', 'file'].includes(post.data.contentType))

    return posts.map(post => {
      return {
        title: post.data.title,
        slug: post.data.slug,
        url: post.url,
        contentType: post.data.contentType,
        date: post.data.date,
        excerpt: post.data.excerpt,
        tags: post.data.tags,
        content: post.template.frontMatter.content
      }
    })
  })

  // Passthrough file copy
  eleventyConfig.addPassthroughCopy({ 'src/app/favicon.ico': 'app/favicon.ico' })
  eleventyConfig.addPassthroughCopy({ 'src/app/serviceworker.js': 'app/serviceworker.js' })
  eleventyConfig.addPassthroughCopy({ 'src/site/favicon.ico': 'site/favicon.ico' })
  eleventyConfig.addPassthroughCopy({ 'src/site/serviceworker.js': 'site/serviceworker.js' })

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      layouts: '_layouts',
      output: 'build'
    }
  }
}
