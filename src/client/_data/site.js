const site = {
  title: 'Site title',
  description: 'Site description',
  lang: 'en-US',
  year: new Date().getFullYear(),
  timestamp: new Date()
}

site.copyright = `&copy; ${site.year} ${site.title}. All rights reserved.`

module.exports = site
