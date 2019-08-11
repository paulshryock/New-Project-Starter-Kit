const data = {}

data.platform = 'app'
data.title = 'App title'
data.description = 'App description'
data.year = new Date().getFullYear()
data.copyright = `&copy; ${data.year} ${data.title}. All rights reserved.`

module.exports = data
