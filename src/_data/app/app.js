const app = {}

app.title = 'App title',
app.description = 'App description',
app.year = new Date().getFullYear()
app.copyright = `&copy; ${app.year} ${app.title}. All rights reserved.`

module.exports = app