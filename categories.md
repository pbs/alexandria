---
layout: page
title: Components Categories
permalink: /component-categories/
---

<ul class="post-list">
  {% for category in site.data.categories  %}
  <li class="component-nav--item">
    <a href="/components/{{ category.slug }}">{{ category.name }}</a>
  </li>
  {% endfor %}
</ul>

