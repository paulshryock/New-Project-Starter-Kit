class Page {
  data () {
    return {
      title: 'Offline',
      slug: 'offline',
      date: new Date('2020-01-01T00:00:00-5'),
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    return `The Internet is down. Here's the offline page. Use this if we're not caching the whole site with a service worker. But probably just cache the whole site with a service worker and skip this page, eh?`
  }
}

module.exports = Page
