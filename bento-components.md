---
layout: page
title: Bento Components
permalink: /components/bento/
product: bento
---

{% include product-nav.html %}

<ul class="post-list">
  {% for component in site.components %}
  {% if component.products contains 'bento' %}
    {% include post-li.html %}
  {% endif %}
  {% endfor %}
</ul>

