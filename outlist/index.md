---
title: Out List
permalink: /outlist/
redirect_from:
  - /People.html
description: LGBTQ+ mathematicians who have chosen to be listed publicly.
---

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Visibility</p>
      <h1>The Out List</h1>
      <p class="lede">Visibility is important! LGBTQ+ mathematicians are everywhere, and we hope this list can serve as support for mathematicians at various places on their own LGBTQ+ journeys and also as a resource for people looking to learn more about the climate at various universities.</p>
      <p>For each mathematician, any identity words and pronouns listed were given by the respondent.</p>
    </div>

    <div class="callout" style="margin-bottom:2rem;">
      <p><strong>Want to be listed?</strong> You can sign up to be on the Out List or the <a class="text-link" href="{{ '/allyship/#ally-list' | relative_url }}">Ally List</a>, or update your listing, by filling out <a class="text-link" href="{{ site.list_signup_url }}">this form</a>.</p>
    </div>

    <h2 style="font-size:1.2rem;">Legend</h2>
    {% include list-legend.html %}

    <div class="list-tools" style="margin-top:2rem;">
      <div class="form-row">
        <label for="outlist-search">Search the Out List</label>
        <input type="text" id="outlist-search" placeholder="Name, institution, pronouns…" data-filter-list="outlist" data-filter-count="outlist-count">
      </div>
      <p class="list-count" id="outlist-count" aria-live="polite">{{ site.data.outlist | size }} mathematicians</p>
    </div>

    <div class="people-list people-list--cols" id="outlist">
      {% for p in site.data.outlist %}{% include person.html p=p %}{% endfor %}
    </div>
  </div>
</section>
