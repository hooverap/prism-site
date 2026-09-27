---
title: Home
permalink: /
---

<section class="hero">
  <div class="wrap">
    <div>
      <p class="hero__eyebrow">A community for LGBTQ+ mathematicians</p>
      <h1>Mathematics has always had room for more than one kind of mind.</h1>
      <p class="lede">{{ site.title }} connects LGBTQ+ mathematicians, their students, and their allies with each other &mdash; through an out list, events, mentorship, and a growing set of resources for departments that want to do better.</p>
      <div class="hero__actions">
        <a class="btn" href="{{ '/join/' | relative_url }}">Join the community</a>
        <a class="btn btn--ghost" href="{{ '/outlist/' | relative_url }}">See the Out List</a>
      </div>
    </div>
    <div>
      <svg class="hero__plot" viewBox="0 0 420 320" role="img" aria-labelledby="plotTitle plotDesc">
        <title id="plotTitle">A scatter of points along two axes</title>
        <desc id="plotDesc">Decorative chart motif representing a spectrum of individuals plotted across two axes, echoing the organization's name.</desc>
        <line x1="40" y1="20" x2="40" y2="280" stroke="#DBD6CB" stroke-width="1.5"/>
        <line x1="40" y1="280" x2="400" y2="280" stroke="#DBD6CB" stroke-width="1.5"/>
        <path d="M40 260 C120 240, 160 120, 230 100 S 340 40, 395 30" fill="none" stroke="#14182B" stroke-width="2" opacity=".35"/>
        <circle cx="70" cy="230" r="6" fill="#6C5CE7"/>
        <circle cx="118" cy="190" r="6" fill="#128F82"/>
        <circle cx="150" cy="235" r="6" fill="#C98A2C"/>
        <circle cx="195" cy="140" r="6" fill="#6C5CE7"/>
        <circle cx="240" cy="175" r="6" fill="#C98A2C"/>
        <circle cx="275" cy="95" r="6" fill="#128F82"/>
        <circle cx="320" cy="130" r="6" fill="#6C5CE7"/>
        <circle cx="360" cy="60" r="6" fill="#C98A2C"/>
        <circle cx="330" cy="200" r="6" fill="#128F82"/>
      </svg>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">What we do</p>
      <h2>Three ways we show up for the field</h2>
    </div>
    <div class="grid grid--3">
      <div>
        <h3>Visibility</h3>
        <p>Our Out List gathers mathematicians who are open about being LGBTQ+, so students and job&nbsp;seekers can find people like them in the field.</p>
      </div>
      <div>
        <h3>Community</h3>
        <p>Socials at national meetings, a mailing list, and informal mentorship connect people across career stages and subfields.</p>
      </div>
      <div>
        <h3>Advocacy</h3>
        <p>Resources and talks help departments build hiring practices, climate surveys, and policies that support LGBTQ+ mathematicians.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="grid grid--3">
      <div class="stat">
        <span class="stat__num">500+</span>
        <p>mathematicians on the Out List, from undergraduates to emeritus faculty.</p>
      </div>
      <div class="stat">
        <span class="stat__num">15</span>
        <p>years connecting LGBTQ+ mathematicians at national meetings and beyond.</p>
      </div>
      <div class="stat">
        <span class="stat__num">501(c)(3)</span>
        <p>nonprofit, run by volunteers and funded by people like you.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Stay in the loop</p>
      <h2>Join the mailing list</h2>
      <p>Hear about upcoming events, the Out List, and ways to get involved.</p>
    </div>
    <form class="form-row" action="{{ site.mailing_list_url }}" target="_blank" rel="noopener">
      <label for="email">Email address</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required>
      <p class="fineprint" style="margin-top:.6rem;">Replace this form's action with your Google Group or list-manager signup link.</p>
      <button class="btn" type="submit" style="margin-top:.9rem;">Subscribe</button>
    </form>
  </div>
</section>
