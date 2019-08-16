module.exports = function () {
  return {
    contentType: 'article',
    layout: 'app/article',
    permalink: './app/articles/{{ slug }}/index.html',
    url: './articles/{{ slug }}/index.html'
  }
}
