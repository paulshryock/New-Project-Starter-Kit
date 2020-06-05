const config = require('config')

module.exports = {
  // Get home page index
  getApi: (req, res, next) => {
    res.render('index', {
      title: config.get('api.title'),
      routes: [
        'articles',
        'projects',
        'testimonials',
        'users',
      ]
    })
  }
}
