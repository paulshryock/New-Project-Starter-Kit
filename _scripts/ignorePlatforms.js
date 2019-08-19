const fs = require('fs')

/**
  * Adds new content type
  */
const ignorePlatforms = {}

/**
  * Initializes ignorePlatforms
  */
ignorePlatforms.init = () => {
  ignorePlatforms.updatePlatforms()
}

ignorePlatforms.file = './.eleventyignore'
ignorePlatforms.platforms = ['app','cms','email','site']

/**
  * Writes file content
  */
ignorePlatforms.writeFileContent = (file, content, message) => {
  fs.writeFile(file, content, (err) => {
    if (err) {
      console.error(err)
      return false
    } else {
      console.log(message)
    }
  })
}

/**
  * Updates platforms
  *
  * param {boolean} add - If true, platforms are added. If false, platforms are removed. Default: true
  */
ignorePlatforms.updatePlatforms = (add = true) => {
  const file = ignorePlatforms.file
  const platforms = ignorePlatforms.platforms
  let splitter = ''

  // Get file content
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      return false
    }

    let content = data
    const message = add ? 'Added all platforms' : 'Removed all platforms';

    platforms.map(platform => {
      splitter = `src/${platform}/\n`

      if (add) {
        if (!content.includes(splitter)) {
          content = content.split(splitter)
          content = [content[0], splitter, content[1]]
          content = content.join('')
        }
      } else {
        if (content.includes(splitter)) {
          content = content.split(splitter)
          content = content.join('')
        }
      }
    })

    ignorePlatforms.writeFileContent(file, content, message)

  })
}

/**
  * Initialize ignorePlatforms
  */
ignorePlatforms.init()

module.exports = ignorePlatforms
