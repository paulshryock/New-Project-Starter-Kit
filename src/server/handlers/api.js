const config = require('config')

module.exports = {
  // Get home page index
  getApi: (req, res, next) => {
    res.render('index', {
      title: config.get('app.title'),
      routes: [
        'articles',
        'projects',
        'testimonials',
        'users',
      ]
    })
  }
}
