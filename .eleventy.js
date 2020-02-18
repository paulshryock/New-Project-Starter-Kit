module.exports = function (eleventyConfig) {

  // Add content collections
  const types = [
    { plural: 'pages', single: 'page' }
  ]

  types.map(type => {
    eleventyConfig.addCollection(type.plural, collection => collection.getAll().filter(post => post.data.contentType === type.single))
  })

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
