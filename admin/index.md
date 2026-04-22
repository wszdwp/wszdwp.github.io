---
layout: page
title: AI News Daily · Admin
permalink: /admin/
published: false
---

# AI News Daily 播客 / Admin

Personal control panel for the daily-news-to-podcast pipeline.

## Podcast feed

Subscribe in any podcast app:

<p><a href="/podcast.xml"><code>https://codingpan.com/podcast.xml</code></a></p>

### Apple Podcasts / Overcast / Pocket Casts / AntennaPod

Paste the feed URL above into *Add podcast by URL*. Episodes auto-download when a new one lands, so you get offline playback on the commute for free.

### YouTube Music (Android + web)

YouTube Music surfaces podcasts from YouTube channels that are enrolled as podcasts and point at an RSS feed.

One-time setup:

1. Open [YouTube Studio](https://studio.youtube.com) on your channel
2. Left nav → **Content** → **Podcasts** tab → **Create a podcast**
3. Choose **Import an existing podcast** (if the UI offers that option) and paste `https://codingpan.com/podcast.xml`. If it only offers manual setup, enter the channel metadata from the RSS (title *AI News Daily 播客*, description, cover art), then under *RSS feed* paste the URL
4. YouTube verifies ownership (either via a one-time code in the feed's `<itunes:new-feed-url>` field, or via Search Console on `codingpan.com`)
5. Once enrolled, YouTube crawls the feed every ~24h. New episodes appear automatically in YouTube Music under your channel's podcast

Once approved, the same RSS feed drives Apple Podcasts *and* YouTube Music — no per-platform publishing step needed.

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
