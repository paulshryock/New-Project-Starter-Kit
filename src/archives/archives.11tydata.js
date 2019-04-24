module.exports = function () {
  return {
    'permalink': './{{ title | slug }}/index.html',
    'content_type': 'archive',
    'layout': 'archive'
  }
}
