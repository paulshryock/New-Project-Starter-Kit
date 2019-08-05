---
title: 'Testimonials'
slug: testimonials
description: Check out our testimonials
date: 2019-01-04T00:00:00-5
---
{%- for post in collections.testimonials %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}