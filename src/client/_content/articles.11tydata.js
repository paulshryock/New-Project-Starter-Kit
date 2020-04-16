const articles = {
  contentType: 'article',
  layout: 'article',
  permalink: './articles/{{ article.slug }}/index.html',
  pagination: {
    data: 'collections.articles',
    alias: 'article',
    size: 1
  }
}

module.exports = articles
