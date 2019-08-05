const email = {}

email.title = 'Email title',
email.description = 'Email description',
email.year = new Date().getFullYear()
email.copyright = `&copy; ${email.year} ${email.title}. All rights reserved.`

module.exports = email