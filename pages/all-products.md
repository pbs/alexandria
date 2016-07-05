---
layout: page
title: All Products
permalink: /all-products/
---

## All Product Components

<ul class="category-list category-list--all">
  {% assign compnum = 0 %}
  {% for component in site.components %}
    {% assign compnum = compnum | plus:1%}
  {% endfor %}
  <li class="component-nav--item">
    <a href="/components/">All Components ({{compnum}})</a>
  </li>
  {% for category in site.data.categories  %}
    {% assign catnum = 0 %}
    {% for component in site.components %}
      {% assign categorylc = category.name | downcase %}
      {% if component.category contains categorylc %}
          {% assign catnum = catnum | plus:1%}
      {% endif %}
    {% endfor %}
  {% if catnum > 0 %}
  <li class="component-nav--item">
    <a href="/components/{{ category.slug }}">{{ category.name }} ({{catnum}})</a>
  </li>
  {% endif %}
  {% endfor %}
</ul>

{% for product in site.data.products  %}
<h2>{{ product.name }}</h2>
<ul class="category-list category-list--pbs-org">
  <li class="component-nav--item">
    {% assign prodnum = 0 %}
    {% for component in site.components %}
      {% if component.products contains product.slug %}
        {% assign prodnum = prodnum | plus:1%}
      {% endif %}
    {% endfor %}
    <a href="/components/{{ product.slug }}/">All {{ product.name }} Components ({{prodnum}})</a>
  </li>

  {% for category in site.data.categories  %}
    {% assign print = false %}
    {% assign num = 0 %}

    {% for component in site.components %}
      {% assign categorylc = category.name | downcase %}
      {% if component.products contains product.slug and component.category contains categorylc %}
          {% assign print = true %}
          {% assign num = num | plus:1 %}
      {% endif %}
    {% endfor %}

    {% if print %}
      <li class="component-nav--item">
        <a href="/components/{{ product.slug }}/{{ category.slug }}">{{ category.name }} ({{num}})</a>
      </li>
    {% endif %}

  {% endfor %}
</ul>
{% endfor %}
