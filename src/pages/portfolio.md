---
title: 'Portfolio'
slug: portfolio
description: Check out our projects
date: 2019-01-03T00:00:00-5
---
{%- for post in collections.projects %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}