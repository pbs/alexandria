---
layout: page
title: All Products
permalink: /all-products/
---

<ul class="post-list">
  {% for category in site.data.categories  %}
  <li class="component-nav--item">
    <a href="/components/{{ category.slug }}">{{ category.name }}</a>
    <ul class="component-nav__component-list">
    {% for component in site.components %}
    {% assign categorylc = category.name | downcase %}
    {% if component.category contains categorylc %}
      <li>
        <small>{{component.code}}</small> |
        <a class="component-link" href="{{ component.url | prepend: site.baseurl }}">{{ component.title }}</a>
      </li>
    {% endif %}
    {% endfor %}
    </ul>
  </li>
  {% endfor %}
</ul>

