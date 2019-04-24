'use strict'

module.exports = function () {
  return {
    'permalink': './{{ title | slug }}/index.html',
    'content_type': 'article',
    'layout': 'article',
    'topics': [
      'General'
    ]
  }
}
