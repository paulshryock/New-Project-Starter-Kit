const fs = require('fs')

const file = './.eleventy.js'

// Get file content
fs.readFile(file, 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return false
  }

  const splitter = '  /**\n' +
    '    * Add collections\n' +
    '    */\n'

  const collection = `
  // Return videos
  eleventyConfig.addCollection('videos', function (collection) {
    return collection.getAll().filter(function (post) {
      return post.data.contentType === 'video'
    })
  })
    `

  // Split data into array
  const dataArray = data.split(splitter)

  // Add collection and convert back to a string
  const content = [dataArray[0], splitter, collection, dataArray[1]].join('')

  // Write file content
  fs.writeFile(file, content, (err) => {
    if (err) throw err
  })
})