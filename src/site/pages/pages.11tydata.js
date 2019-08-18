module.exports = () => {
  return {
    contentType: 'page',
    layout: 'site/page',
    permalink: './site/{{ slug }}/index.html',
    url: './{{ slug }}/index.html'
  }
}
