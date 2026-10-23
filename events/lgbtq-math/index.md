---
title: LGBTQ+ Math Events
permalink: /events/lgbtq-math/
description: Conferences, workshops, and gatherings for LGBTQ+ mathematicians beyond Spectra's own events.
---

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Across the community</p>
      <h1>LGBTQ+ Math Events</h1>
      <p class="lede">Conferences, workshops, and gatherings for LGBTQ+ mathematicians and allies organized across the wider mathematical community. For events Spectra hosts, see <a class="text-link" href="{{ '/events/' | relative_url }}">Spectra Events</a>.</p>
    </div>

    {% assign math_events = site.data.math_events %}
    {% if math_events and math_events.size > 0 %}
    <div class="grid grid--2">
      {% for e in math_events %}
      <div class="card">
        <p class="meta">{{ e.date }}{% if e.location %} &middot; {{ e.location }}{% endif %}</p>
        <h3>{% if e.url %}<a href="{{ e.url }}">{{ e.title }}</a>{% else %}{{ e.title }}{% endif %}</h3>
        {% if e.description %}<p>{{ e.description }}</p>{% endif %}
      </div>
      {% endfor %}
    </div>
    {% else %}
    <div class="callout">
      <p>No upcoming events are listed yet.</p>
    </div>
    {% endif %}

    <div class="callout" style="margin-top:1.5rem;">
      <p><strong>Know of an event?</strong> <a class="text-link" href="{{ '/events/add/' | relative_url }}">Submit it here</a>, or let our Outreach &amp; Development Committee know at <a class="text-link" href="mailto:outreach@lgbtmath.org">outreach@lgbtmath.org</a>.</p>
    </div>
  </div>
</section>
