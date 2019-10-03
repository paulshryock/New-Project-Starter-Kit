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
  rl.question(`What kind of content would you like to create? (singular, lowercase) `, (type) => {
    rl.question(`What is the plural form of ${type}? `, (typePlural) => {
      rl.question(`Should ${typePlural} live in a subdirectory? (true/false) `, (hasSubdirectory) => {
        rl.question(`Do you want to create a new ${type} layout? (true/false) `, (addLayout) => {
          // TODO: Restrict hasSubdirectory input to a true boolean instead of a string,
          //        or restrict input to 'true' or 'false' strings
          let hasSubdirectoryBool = false
          if (hasSubdirectory === 'true') {
            hasSubdirectoryBool = true
          }
          // TODO: Restrict addLayout input to a true boolean instead of a string,
          //        or restrict input to 'true' or 'false' strings
          let addLayoutBool = false
          if (addLayout === 'true') {
            addLayoutBool = true
          }
          addContent.folder(type, typePlural, hasSubdirectoryBool, addLayoutBool)
          rl.close()
        })
      })
    })
  })
}

/**
  * Add content folder: (/src/${typePlural})
  *
  * param {string} type
  * param {string} typePlural
  * param {boolean} hasSubdirectory
  * param {boolean} addLayout
  */
addContent.folder = (type, typePlural, hasSubdirectory, addLayout) => {
  const path = `./src/${typePlural}`
  const mask = 484

  fs.mkdir(path, mask, function (err) {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error(`${typePlural} already exists: ${path}`)
      } else {
        console.error(err)
      }
      return false
    } else {
      console.log(`Adding content folder: ${path}`)
      addContent.data(path, type, hasSubdirectory, typePlural, addLayout)
    }
  })
}

/**
  * Add content directory data file: (/src/${typePlural}/${typePlural}.11tydata.js)
  *
  * param {string} path
  * param {string} type
  * param {boolean} hasSubdirectory
  * param {string} typePlural
  * param {boolean} addLayout
  */
addContent.data = (path, type, hasSubdirectory, typePlural, addLayout) => {
  const file = `${path}/${typePlural}.11tydata.js`
  const subdirectory = hasSubdirectory === true ? `${typePlural}/` : ''
  const data = `module.exports = function () {
  return {
    contentType: '${type}',
    layout: '${type}',
    permalink: './${subdirectory}{{ slug }}/index.html'
  }
}
`
  const options = { flag: 'ax' }

  fs.writeFile(file, data, options, function (err) {
    if (err) {
      console.error(err)
      return false
    } else {
      console.log(`Added ${typePlural} data file: ${file}`)
      addContent.layout(type, typePlural, addLayout)
    }
  })
}

/**
  * Add layout file: (/src/_layouts/${type}.liquid)
  *
  * param {string} type
  * param {string} typePlural
  * param {boolean} addLayout
  */
addContent.layout = (type, typePlural, addLayout) => {
  const file = `./src/_layouts/${type}.liquid`
  const data = `---
layout: global
---`
  const options = { flag: 'ax' }

  if (addLayout) {
    fs.writeFile(file, data, options, (err) => {
      if (err) {
        console.error(err)
        return false
      } else {
        console.log(`Added ${type} layout file: ${file}`)
      }
    })
  }

  addContent.collection(type, typePlural)
}

/**
  * Add content collection: (.eleventy.js)
  *
  * param {string} type
  */
addContent.collection = (type, typePlural) => {
  const file = './.eleventy.js'

  // Get file content
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      return false
    }

    const splitter = '  /**\n' +
      '    * Add content collections\n' +
      '    */\n' +
      '  const types = [\n'

    const collection = `    { plural: '${typePlural}', single: '${type}' },\n`

    // Split data into array
    const dataArray = data.split(splitter)

    // Add collection and convert back to a string
    const content = [dataArray[0], splitter, collection, dataArray[1]].join('')

    // Write file content
    fs.writeFile(file, content, (err) => {
      if (err) {
        console.error(err)
        return false
      } else {
        console.log(`Added ${type} content collection: (.eleventy.js)`)
      }
    })
  })
}

/**
  * Initialize addContent
  */
addContent.init()

module.exports = addContent
