const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
  * Adds new content type
  */
const addContent = {}

/**
  * Initializes addContent
  */
addContent.init = () => {
  addContent.getParameters()
}

/**
  * Get parameters
  */
addContent.getParameters = () => {
  rl.question('Create content type for which platform? ', (platform) => {
    rl.question(`What kind of ${platform} content? `, (type) => {
      rl.question(`What is the plural form of ${type}? `, (typePlural) => {
        rl.question(`Should ${platform} ${typePlural} live in a subdirectory? (true/false) `, (hasSubdirectory) => {
          // TODO: Restrict hasSubdirectory input to a true boolean instead of a string,
          //        or restrict input to 'true' or 'false' strings
          let bool = false
          if (hasSubdirectory === 'true') {
            bool = true
          }
          addContent.folder(platform, type, typePlural, bool)
          rl.close()
        })
      })
    })
  })
}

/**
  * Add content folder: (/src/${platform}/${type})
  *
  * param {string} platform
  * param {string} type
  * param {string} typePlural
  * param {boolean} hasSubdirectory
  */
addContent.folder = (platform, type, typePlural, hasSubdirectory) => {
  const path = `./src/${platform}/${typePlural}`
  const mask = 484

  fs.mkdir(path, mask, function (err) {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error(`${platform} ${typePlural} already exists: ${path}`)
      } else {
        console.error(err)
      }
      return false
    } else {
      console.log(`Adding content folder: ${path}`)
      addContent.data(path, platform, type, hasSubdirectory, typePlural)
    }
  })
}

/**
  * Add content directory data file: (/src/${platform}/${type}/${type}.11tydata.js)
  *
  * param {string} path
  * param {string} platform
  * param {string} type
  * param {boolean} hasSubdirectory
  * param {string} typePlural
  */
addContent.data = (path, platform, type, hasSubdirectory, typePlural) => {
  const file = `${path}/${typePlural}.11tydata.js`
  const subdirectory = hasSubdirectory === true ? `${typePlural}/` : ''
  const data = `module.exports = function () {
  return {
    contentType: '${type}',
    layout: '${platform}/${type}',
    permalink: './${platform}/${subdirectory}{{ slug }}/index.html'
  }
}
`
  const flag = 'ax'

  fs.writeFile(file, data, { flag: flag }, function (err) {
    if (err) {
      console.error(err)
      return false
    } else {
      console.log(`Added ${platform} ${typePlural} data file: ${file}`)
      addContent.layout(platform, type, typePlural)
    }
  })
}

/**
  * Add layout: (/src/_layouts/${platform}/${type}.liquid)
  *
  * param {string} platform
  * param {string} type
  * param {string} typePlural
  */
addContent.layout = (platform, type, typePlural) => {
  const file = `./src/_layouts/${platform}/${type}.liquid`
  const data = `---
layout: ${platform}/global
---`
  const options = { flag: 'ax' }

  fs.writeFile(file, data, options, (err) => {
    if (err) {
      console.error(err)
      return false
    } else {
      console.log(`Added ${platform} ${type} layout: ${file}`)
      addContent.collection(type, typePlural)
    }
  })
}

/**
  * Add content collection: (.eleventy.js)
  *
  * param {string} type
  */
addContent.collection = (type, typePlural) => {
  const file = './.eleventy.js'

  // Get file content
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
    }
    console.log(data)
  })
  // Split into array
  // Add content
  // Convert back to a string
  // Write file content
}

/**
  * Initialize addContent
  */
addContent.init()

module.exports = addContent
