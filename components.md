---
layout: page
title: Components
permalink: /components/
---

Example typography, etc goes here

## Components

<ul class="post-list">
  {% for component in site.components %}
    <li>
      <h2>
        <a class="component-link" href="{{ component.url | prepend: site.baseurl }}"><small>{{component.id}}</small> {{ component.title }}</a>
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

