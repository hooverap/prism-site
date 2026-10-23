---
title: Allyship
permalink: /allyship/
redirect_from:
  - /Allyship.html
description: Spectra's institutional members and the Ally List.
---

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">For allies and institutions</p>
      <h1>Allyship</h1>
      <p class="lede">Institutions and individual mathematicians can publicly commit to supporting LGBTQ+ people in mathematics.</p>
    </div>

    <div class="grid grid--2" id="institutional-members">
      <div class="card">
        <h3>Institutional membership</h3>
        <p>Institutional members affirm the following statement:</p>
        <blockquote>As an institutional/corporate member of Spectra, we pledge to support and encourage LGBTQ+ individuals in mathematics, by working to create an inclusive and affirming environment that supports the well-being and professional development of LGBTQ+ mathematicians. We join the work creating a time when LGBTQ+ mathematicians are able to bring their whole selves to the mathematical community.</blockquote>
        <p>We invite Institutional Members to list their institutional membership on their websites, to reach out to Spectra about co-sponsoring their events and Spectra events, and to share Spectra information at their own departments and events.</p>
      </div>
      <div class="card">
        <h3>Academic institution members</h3>
        <ul>
          <li><a href="https://www.slmath.org">SLMath</a></li>
        </ul>
        <p>Interested in joining? See <a href="{{ '/join/#affiliates' | relative_url }}">Affiliate membership</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised" id="ally-list">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Ally List</p>
      <h2>Mathematicians who self-identify as allies</h2>
      <p>We invite individuals to self-identify as allies to the LGBTQ+ community by filling out <a class="text-link" href="{{ site.list_signup_url }}">this form</a>.</p>
    </div>

    {% include list-legend.html %}

    <div class="list-tools" style="margin-top:2rem;">
      <div class="form-row">
        <label for="allylist-search">Search the Ally List</label>
        <input type="text" id="allylist-search" placeholder="Name, institution…" data-filter-list="allylist" data-filter-count="allylist-count">
      </div>
      <p class="list-count" id="allylist-count" aria-live="polite">{{ site.data.allylist | size }} allies</p>
    </div>

    <div class="people-list people-list--cols" id="allylist">
      {% for p in site.data.allylist %}{% include person.html p=p %}{% endfor %}
    </div>
  </div>
</section>
