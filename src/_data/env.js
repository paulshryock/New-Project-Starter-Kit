const config = require('config')

const env = {
  auth: {
    username: config.get('auth.username'),
    password: config.get('auth.password')
  },
  node_env: config.get('node.environment'),
  polyfill_js: config.get('polyfill_js')
}

module.exports = env
