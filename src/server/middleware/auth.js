const { log } = require('../modules/logger')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {

  /**
   * TODO: Most of CSRF attacks have a different origin
   * or referrer header with your original host in their requests.
   * So check if you have any of them in the header,
   * are they coming from your domain or not! If not reject them.
   */

  // Get a header
  // const token = req.header('x-auth-token')

  // Get a cookie
  const token = req.cookies['x-auth-token']

  if (!token) {
    log.error('Access denied. No token provided.', { status: 401 })
    return res
      .status(401)
      .send('Access denied. No token provided.')
      // TODO: Should we redirect to the login page?
      // .redirect(401, '/login')
      // Or let the client handle this?
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
    req.user = decoded
    next()
  }

  catch (ex) {
    log.error('Invalid token.', { status: 400 })
    return res.status(400).send('Invalid token.')
  }
}