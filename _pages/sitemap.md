---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of all the posts and pages found on the site. For search engines, there’s also an [XML version]({{ base_path }}/sitemap.xml) available.

<h2>Pages</h2>
<ul>
  {% assign pagesList = site.pages | where:"layout", "page" %}
  {% for page in pagesList %}
    <li>
      <a href="{{ page.url }}">
        {{ page.title | default: page.basename }}
      </a>
    </li>
  {% endfor %}
</ul>

<h2>Posts</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </li>
  {% endfor %}
</ul>

{% assign rendered_labels = "" %}
{% for collection in site.collections %}
  {% unless collection.output == false or collection.label == "posts" or collection.label == "pages" %}
    {% unless rendered_labels contains collection.label %}
      <h2>{{ collection.label }}</h2>
      <ul>
        {% for doc in collection.docs %}
          <li>
            <a href="{{ doc.url }}">
              {{ doc.title | default: doc.basename }}
            </a>
          </li>
        {% endfor %}
      </ul>
      {% capture rendered_labels %}{{ rendered_labels }} {{ collection.label }}{% endcapture %}
    {% endunless %}
  {% endunless %}
{% endfor %}
