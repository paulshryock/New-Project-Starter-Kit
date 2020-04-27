const config = require('config')

const env = {
  node_env: config.get('node.environment'),
  eleventy_env: config.get('eleventy.environment')
}

module.exports = env
