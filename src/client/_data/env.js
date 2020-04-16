const config = require('config')

const env = {
  node_env: config.get('node.environment'),
  polyfill_js: config.get('node.environment') === 'production' ? true : false
}

module.exports = env
