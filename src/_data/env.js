const config = require('config')

const env = {
  // auth: [
  //   {
  //     username: config.get('auth.username'),
  //     password: config.get('auth.password')
  //   }
  // ],
  // eleventy: {
  //   environment: config.get('eleventy.environment'),
  //   platform: config.get('eleventy.platform')
  // },
  node_env: config.get('node.environment'),
  // server: {
  //   port: config.get('server.port')
  // }
}

module.exports = env
