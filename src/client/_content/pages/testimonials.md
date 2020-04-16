---
title: 'Testimonials'
slug: testimonials
description: Check out our testimonials.
date: 2019-01-04T00:00:00-5
---
{%- if collections.testimonials %}
<ul class="testimonials">
  {%- for post in collections.testimonials %}
  <li class="testimonial">
    <a href="/testimonials/{{ post.slug }}">{{ post.name.first }} {{ post.name.last }}</a>
  </li><!-- .testimonial -->
  {%- endfor %}
</ul><!-- .testimonials -->
{%- endif %}