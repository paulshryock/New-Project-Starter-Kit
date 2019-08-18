module.exports = () => {
  return {
    contentType: 'article',
    layout: 'site/article',
    permalink: './site/articles/{{ slug }}/index.html',
    url: './articles/{{ slug }}/index.html'
  }
}
