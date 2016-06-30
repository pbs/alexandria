---
layout: page
title: Bento Components
permalink: /components/bento/
product: bento
---

{% include product-nav.html %}

<ul class="post-list">
  {% assign components = site.components | sort: 'code' %}
  {% for component in components %}
  {% if component.products contains 'bento' %}
    {% include post-li.html %}
  {% endif %}
  {% endfor %}
</ul>

