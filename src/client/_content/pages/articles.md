---
title: 'Articles'
slug: articles
description: Check out our articles.
date: 2020-01-01T00:00:00-5
---
<!--
permalink: ./{{ slug }}/{{ pagination.pageNumber }}/index.html
pagination:
  data: collections.articles
  size: 2
  alias: articles
-->
{%- if collections.articles %}
<ul class="articles">
  {%- for article in collections.articles %}
  <li class="article">
    <a href="/articles/{{ article.slug }}">{{ article.title }}</a>
  </li><!-- .article -->
  {%- endfor %}
</ul><!-- .articles -->
{%- endif %}

<!-- include components/pagination, pages: articles -->