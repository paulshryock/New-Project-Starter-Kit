var fs = require('fs');

/**
  * Adds new content type
  */
const addContent = {}

/**
  * Grab cli parameters
  */
const platform = process.argv[2]
const type = process.argv[3]

/**
  * Initializes addContent
  *
  * param {string} platform
  * param {string} type
  */
addContent.init = async (platform, type) => {

  await addContent.folder(platform, type)
  await addContent.data(platform, type)
  await addContent.collection(platform, type)
  await addContent.layout(platform, type)
}

/**
  * Add content folder: (/src/${platform}/${type})
  *
  * param {string} platform
  * param {string} type
  */
addContent.folder = async (platform, type) => {
  console.log('Ran addContent.folder()')
  const path = `./src/${platform}/${type}`

  fs.mkdir(path, mask = 484, function(err) {
    if (err) {
      if (err.code == 'EEXIST') {
        console.error(`${path} already exists`)
      } else {
        console.error(err)
      }
    } else {
      console.log(`Add content folder: ${path}`)
    }
  })
}

/**
  * Add content directory data file: (/src/${platform}/${type}/${type}.11tydata.js)
  *
  * param {string} platform
  * param {string} type
  */
addContent.data = async (platform, type) => {
  console.log('Ran addContent.data()')
}

/**
  * Add content collection: (.eleventy.js)
  *
  * param {string} platform
  * param {string} type
  */
addContent.collection = async (platform, type) => {
  console.log('Ran addContent.collection()')
  
}

/**
  * Add layout: (/src/_layouts/${platform}/${type}.liquid)
  *
  * param {string} platform
  * param {string} type
  */
addContent.layout = async (platform, type) => {
  console.log('Ran addContent.layout()')
  
}

/**
  * Initialize addContent
  */
addContent.init(platform, type)

module.exports = addContent