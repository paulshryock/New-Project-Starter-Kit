class Page {
  data () {
    return {
      title: '404 Error',
      seoTitle: 'Content Not Found | 404 Error',
      excerpt: 'It seems like the content you\'re looking for is gone. It may have been moved without a redirect, or maybe the link you clicked has a typo.',
      slug: '404',
      date: new Date('2020-01-01T00:00:00-5'),
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    return `It seems like the content you're looking for is gone. It may have been moved without a redirect, or maybe the link you clicked has a typo.

1. Is the link you're trying to access spelled correctly?
2. Do you want to [go back to where you were](js:back) before this? (Click the "Back" button)
3. Could you try searching for the content by name?

[search_form]

4. Would you like to [start over on the home page](/) and try again?

5. Are you looking for something related to any of these topics?

[topics_list]

6. If all else fails and you still can't find what you're looking for, could you send a note about the missing content?

[404_report_form]`
  }
}

module.exports = Page
