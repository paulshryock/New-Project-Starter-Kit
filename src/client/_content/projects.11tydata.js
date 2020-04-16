const projects = {
  contentType: 'project',
  layout: 'project',
  permalink: './portfolio/{{ project.slug }}/index.html',
  pagination: {
    data: 'collections.projects',
    alias: 'project',
    size: 1
  }
}

module.exports = projects
