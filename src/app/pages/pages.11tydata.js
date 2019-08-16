module.exports = function () {
  return {
    contentType: 'page',
    layout: 'app/page',
    permalink: './app/{{ slug }}/index.html',
    url: './{{ slug }}/index.html'
  }
}
