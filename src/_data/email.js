const email = {
  platform: 'email',
  title: 'Email title',
  description: 'Email description',
  year: new Date().getFullYear(),
  copyright: `&copy; ${this.year} ${this.title}. All rights reserved.`
}

module.exports = email
