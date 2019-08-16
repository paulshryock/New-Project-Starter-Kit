var fs = require('fs')

/**
  * Adds new content type
  */
const addContent = {}

/**
  * Grab cli parameters
  */
const platform = process.argv[2]
const type = process.argv[3]

console.log(process.argv)

/**
  * Initializes addContent
  *
  * param {string} platform
  * param {string} type
  */
addContent.init = (platform, type) => {
  addContent.folder(platform, type)
}

/**
  * Add content folder: (/src/${platform}/${type})
  *
  * param {string} platform
  * param {string} type
  */
addContent.folder = (platform, type) => {
  const path = `./src/${platform}/${type}`
  const mask = 484

  fs.mkdir(path, mask, function (err) {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error(`${path} already exists`)
      } else {
        console.error(err)
      }
    } else {
      console.log(`Add content folder: ${path}`)
      addContent.data(type, path)
      addContent.collection(type)
      addContent.layout(platform, type)
    }
  })
}

/**
  * Add content directory data file: (/src/${platform}/${type}/${type}.11tydata.js)
  *
  * param {string} type
  * param {string} path
  */
addContent.data = (type, path) => {
  const file = `${path}/${type}.11tydata.js`
  const data = `module.exports = function () {
  return {
    contentType: '${type}',
    layout: 'site/${type}',
    permalink: './site/{{ slug }}/index.html'
  }
}
`
  const flag = 'ax'

  fs.writeFile(file, data, { flag: flag }, function (err) {
    if (err) {
      console.error(err)
    } else {
      console.log(`Add content directory data file: ${file}`)
    }
  })
}

/**
  * Add content collection: (.eleventy.js)
  *
  * param {string} type
  */
addContent.collection = (type) => {
  console.log('Ran addContent.collection()')
}

/**
  * Add layout: (/src/_layouts/${platform}/${type}.liquid)
  *
  * param {string} platform
  * param {string} type
  */
addContent.layout = (platform, type) => {
  console.log('Ran addContent.layout()')
}

/**
  * Initialize addContent
  */
addContent.init(platform, type)

module.exports = addContent
