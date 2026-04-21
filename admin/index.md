---
layout: page
title: AI News Daily · Admin
permalink: /admin/
---

# AI News Daily 播客 / Admin

Personal control panel for the daily-news-to-podcast pipeline.

## Podcast feed

Subscribe in any podcast app:

<p><a href="/podcast.xml"><code>https://codingpan.com/podcast.xml</code></a></p>

Apple Podcasts / Overcast / Pocket Casts all accept this URL directly. Episodes auto-download when a new one lands, so you get offline playback on the commute for free.

## Per-day picker (full-article audio)

Every daily run opens a GitHub Issue on [wszdwp/agentfeeds](https://github.com/wszdwp/agentfeeds/issues?q=label%3Apodcast) with a checkbox for each item in that day's brief. Tick the boxes next to items whose **full article** should be narrated (instead of just the summary + opinion).

Workflow:

1. Daily render runs → Issue is opened with label `podcast:YYYY-MM-DD`
2. You browse the Issue and tick the handful of items worth hearing in full
3. Evening run calls `read-selections`, `extract-article`, `build-script`, `synthesize`, and `publish-feed`
4. New episode appears in your podcast app within minutes

Unticked items still ship as summary + opinion audio — no action means "normal episode."

## Recent episodes

<ul>
{% for post in site.posts %}
  {% if post.title contains '第' %}
  <li>
    <strong>{{ post.date | date: '%Y-%m-%d' }}</strong> —
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

## Pipeline status

For operators: see [agentfeeds/GENERATION_RULES.md](https://github.com/wszdwp/agentfeeds/blob/main/GENERATION_RULES.md) and [agentfeeds/ARCHITECTURE.md](https://github.com/wszdwp/agentfeeds/blob/main/ARCHITECTURE.md).
