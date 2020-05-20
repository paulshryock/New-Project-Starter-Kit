class Projects {
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
    return 'data.project.content'
  }
}

module.exports = Projects
