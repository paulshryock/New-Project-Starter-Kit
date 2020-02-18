const config = require('config')

const env = {
  node_env: config.get('node.environment')
}

module.exports = env
