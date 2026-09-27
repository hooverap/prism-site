---
title: Join
permalink: /join/
description: How to join the community, mailing list, and Out List.
---

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Membership is free</p>
      <h1>Join {{ site.title }}</h1>
      <p class="lede">There's no fee and no formal application &mdash; anyone who is LGBTQ+ and connected to mathematics, or an ally who supports that community, is welcome.</p>
    </div>

    <div class="grid grid--3">
      <div class="card">
        <h3>1. Join the mailing list</h3>
        <p>The easiest first step. You'll hear about events, the Out List, and volunteer opportunities.</p>
        <p style="margin-top:1rem;"><a class="text-link" href="{{ site.mailing_list_url }}">Sign up &rarr;</a></p>
      </div>
      <div class="card">
        <h3>2. Add yourself to the Out List</h3>
        <p>Optional, and fully within your control &mdash; choose exactly what's shown about you.</p>
        <p style="margin-top:1rem;"><a class="text-link" href="{{ '/outlist/' | relative_url }}">View the Out List &rarr;</a></p>
      </div>
      <div class="card">
        <h3>3. Come to an event</h3>
        <p>Meet people in person at a national meeting, or virtually from wherever you are.</p>
        <p style="margin-top:1rem;"><a class="text-link" href="{{ '/events/' | relative_url }}">See what's coming up &rarr;</a></p>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Sign up</p>
      <h2>Get on the mailing list</h2>
    </div>
    <form class="form-row" action="{{ site.mailing_list_url }}" target="_blank" rel="noopener">
      <label for="join-email">Email address</label>
      <input type="email" id="join-email" name="email" placeholder="you@example.com" required>
      <button class="btn" type="submit" style="margin-top:.9rem;">Join the list</button>
    </form>
  </div>
</section>
