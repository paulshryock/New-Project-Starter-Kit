---
title: Sitemap
slug: sitemap
date: 2019-01-01T00:00:00-5
---

**Everything**

{% for content in collections.everything %}
- [{{ content.data.title }}]({{ content.url }})
{% endfor %}

**All**

{% for content in collections.all %}
- [{{ content.data.title }}]({{ content.url }})
{% endfor %}

**Archives**

{% for archive in collections.archives %}
- [{{ archive.data.title }}]({{ archive.url }})
{% endfor %}

**Pages**

{% for page in collections.pages %}
- [{{ page.data.title }}]({{ page.url }})
{% endfor %}

**Articles**

{% for article in collections.articles %}
- [{{ article.data.title }}]({{ article.url }})
{% endfor %}