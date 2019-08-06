const site = {}

site.title = 'Site title',
site.description = 'Site description',
site.year = new Date().getFullYear()
site.copyright = `&copy; ${site.year} ${site.title}. All rights reserved.`

module.exports = site
