const data = {}

data.platform = 'email'
data.title = 'Email title'
data.description = 'Email description'
data.year = new Date().getFullYear()
data.copyright = `&copy; ${data.year} ${data.title}. All rights reserved.`

module.exports = data
