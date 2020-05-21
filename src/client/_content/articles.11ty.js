class Post {
  data () {
    return {
      contentType: 'article',
      layout: 'article',
      permalink: './articles/{{ article.slug }}/index.html',
      pagination: {
        data: 'collections.articles',
        alias: 'article',
        size: 1
      },
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    return data.article.content
  }
}

module.exports = Post
