---
layout: page
title: Tags
---

<div class='list-group'>
  {% assign tags_list = site.tags | sort %}

  {% if tags_list.first[0] == null %}
    {% for tag in tags_list %}
      <li><a href="/tags#{{ tag }}-ref" class='list-group-item'>
        {{ tag }} <span class='badge'>{{ site.tags[tag].size }}</span>
      </a><li>
    {% endfor %}
  {% else %}
    {% for tag in tags_list %}
      <li><a href="/tags#{{ tag[0] }}-ref" class='list-group-item'>
        {{ tag[0] }} <span class='custom-badge'>{{ tag[1].size }}</span>
      </a></li>
    {% endfor %}
  {% endif %}

  {% assign tags_list = nil %}
</div>
<br>

{% assign tags_list = site.tags | sort %}

{% for tag in tags_list %}
  <h2 class='tag-header' id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
  <ul>
    {% assign pages_list = tag[1] %}

    {% for node in pages_list %}
      {% if node.title != null %}
        {% if group == null or group == node.group %}
            <li>{{ node.date | date: "%b %d, %Y" }} <a href="{{node.url}}">{{node.title}}</a></li>
        {% endif %}
      {% endif %}
    {% endfor %}

    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
{% endfor %}
