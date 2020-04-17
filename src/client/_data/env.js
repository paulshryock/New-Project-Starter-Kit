const config = require('config')

const env = {
  node_env: config.get('node.environment'),
  eleventy_env: config.get('eleventy.environment'),
  polyfill_js: config.get('eleventy.environment') === 'production' ? true : false
}

module.exports = env
