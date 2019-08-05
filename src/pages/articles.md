---
title: 'Articles'
slug: articles
description: Check out our articles
date: 2019-01-02T00:00:00-5
---
{%- for post in collections.articles %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}