const config = require('config')

module.exports = {
  // Redirects to /api route
  redirectToApi: (req, res, next) => {
    res.redirect('/api')
  }
}
