class Post {
  data () {
    return {
      contentType: 'project',
      layout: 'project',
      permalink: './portfolio/{{ project.slug }}/index.html',
      pagination: {
        data: 'collections.projects',
        alias: 'project',
        size: 1
      },
      templateEngineOverride: "11ty.js,md"
    }
  }

  render (data) {
    // TODO: Fix this
    return data.project.content ? data.project.content : 'no content'
  }
}

module.exports = Post
