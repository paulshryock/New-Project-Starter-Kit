---
title: 'Portfolio'
slug: portfolio
description: Check out our projects
date: 2019-01-03T00:00:00-5
---
{%- if collections.projects %}
<ul class="projects">
  {%- for post in collections.projects %}
  <li class="project">
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li><!-- .project -->
  {%- endfor %}
</ul><!-- .projects -->
{%- endif %}