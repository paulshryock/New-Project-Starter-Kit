const fs = require('fs')
const path = require('path')

const readme = fs.readFileSync(path.join(__dirname, '../../../../', 'README.md'))

class Page {
  data () {
    return {
      title: 'Home',
      seoTitle: 'New Project Starter Kit | JAMstack Site & Express API',
      slug: '.',
      date: new Date('2020-01-01T00:00:00-5'),
      layout: 'home',
      hero: {
        content: `<h2>JAMstack Site &amp; Express API</h2>
    <p>Get a head start on new projects</p>
    <a class="button button_ko" href="/github">Get Started</a>`
      },
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    return readme
  }
}

module.exports = Page
