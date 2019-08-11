const data = {}

data.platform = 'site'
data.title = 'Site title'
data.shortName = 'Short name'
data.description = 'Site description'
data.year = new Date().getFullYear()
data.copyright = `&copy; ${data.year} ${data.title}. All rights reserved.`

module.exports = data
