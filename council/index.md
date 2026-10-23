---
title: Council
permalink: /council/
redirect_from:
  - /Council.html
description: Spectra's Council, which runs the organization day to day.
---

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Who runs Spectra</p>
      <h1>Spectra Council</h1>
      <p class="lede">Spectra's Council supervises all of its operations, directs its day-to-day activities, and implements its policies. It consists of its Officers, a President-elect (if applicable), the Chairs of Spectra's five Standing Committees, and two at-large Councilors.</p>
    </div>

    <div class="callout" style="margin-bottom:2.5rem;">
      <p><strong>Contact us!</strong> If you have any questions about Spectra, ideas for events or programs, or co-sponsorship opportunities, feel free to <a class="text-link" href="mailto:{{ site.council_email }}">email the Council</a>.</p>
    </div>

    <div class="grid grid--3">
      {% for m in site.data.council %}
      <div class="card council-card">
        {% if m.photo %}
        <img class="council-card__photo" src="{{ '/assets/img/council/' | append: m.photo | relative_url }}" alt="{{ m.name }} headshot" loading="lazy">
        {% else %}
        <div class="council-card__placeholder" aria-hidden="true">{{ m.name | slice: 0 }}</div>
        {% endif %}
        <p class="meta">{{ m.role }}</p>
        <h3>{{ m.name }}</h3>
        {% if m.email %}<p class="fineprint"><a href="mailto:{{ m.email }}">{{ m.email }}</a></p>{% endif %}
        {% if m.bio contains '<p>' %}{{ m.bio }}{% else %}<p>{{ m.bio }}</p>{% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <p>Spectra's governing body is its <a class="text-link" href="{{ '/board/' | relative_url }}">Board</a>.</p>
  </div>
</section>
