---
layout: page
title: Bento Components
permalink: /components/bento/
---


<ul class="post-list">
  {% for component in site.components %}
  {% if component.products contains 'bento' %}
    {% include post-li.html %}
  {% endif %}
  {% endfor %}
</ul>

