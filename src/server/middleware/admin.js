const { log } = require('../modules/logger')

module.exports = function (req, res, next) {
  if (req.user.role !== 'admin') {
    log.error('Access denied.', { status: 403 })
    return res.status(403).send('Access denied.')
  }
  next()
}
