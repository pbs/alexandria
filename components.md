---
layout: page
title: Components
permalink: /components/
---


<ul class="post-list">
  {% for component in site.components %}
    <li>
      <h2>
      <small>{{component.id}}</small>
        <a class="component-link" href="{{ component.url | prepend: site.baseurl }}">{{ component.title }}</a>
      </h2>
      {% if component.products %}
        <p>
          Product{% if component.products.size > 1 %}s{% endif %}:
          {{ component.products | join: ', ' }}
        </p>
      {% endif %}
      <p>Category: {{component.categories}}</p>
      <p>Status: {{component.status}}</p>

      <span class="post-meta">Updated: {{ component.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>

