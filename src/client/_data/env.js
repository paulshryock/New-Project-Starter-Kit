const config = require('config')

const env = {
  node_env: config.get('node.environment'),
  build_env: config.get('build.environment')
}

module.exports = env
