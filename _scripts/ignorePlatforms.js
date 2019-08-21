const fs = require('fs')
const EventEmitter = require('events')
require('dotenv').config()

class IgnoreEmitter extends EventEmitter {}
const ignoreEmitter = new IgnoreEmitter()

/**
  * Adds new content type
  */
const ignorePlatforms = {}

// Configure ignorePlatforms
ignorePlatforms.file = './.eleventyignore'
ignorePlatforms.platform = process.env.PLATFORM
ignorePlatforms.platforms = ['api', 'app', 'cms', 'email', 'site']
ignorePlatforms.filteredPlatforms = ignorePlatforms.platforms.filter(platform => platform !== ignorePlatforms.platform)

/**
  * Initializes ignorePlatforms
  */
ignorePlatforms.init = () => {
  ignorePlatforms.updatePlatforms(false)

  ignoreEmitter.once('platformsRemoved', () => {
    ignorePlatforms.updatePlatforms(true)
  })
}

/**
  * Updates platforms
  *
  * param {boolean} add - If true, platforms are added. If false, platforms are removed. Default: true
  */
ignorePlatforms.updatePlatforms = (add = true) => {
  const file = ignorePlatforms.file
  const platforms = add ? ignorePlatforms.filteredPlatforms : ignorePlatforms.platforms
  let splitter = ''

  // Get file content
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      return false
    }

    let content = data
    const message = add ? `Ignoring all platforms except ${ignorePlatforms.platform}` : 'Removed all ignored platforms...'

    platforms.map(platform => {
      splitter = `src/${platform}/\n`

      const checkSplitter = add ? !content.includes(splitter) : content.includes(splitter)

      if (checkSplitter) {
        content = content.split(splitter)
        if (add) content = [content[0], splitter, content[1]]
        content = content.join('')
      }
    })

    fs.writeFile(file, content, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log(message)
        ignoreEmitter.emit('platformsRemoved')
      }
    })
  })
}

/**
  * Initialize ignorePlatforms
  */
ignorePlatforms.init()

module.exports = ignorePlatforms
