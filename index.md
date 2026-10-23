---
title: Home
permalink: /
---

<section class="hero">
  <div class="wrap">
    <div>
      <p class="hero__eyebrow">Welcome to Spectra</p>
      <h1>Spectra, the Association for LGBTQ+ Mathematicians.</h1>
      <p class="lede">Welcome to the website for LGBTQ+ mathematicians and their allies. This arose from a need for recognition and community for Gender and Sexual Minority mathematicians, and we hope that this will be a resource for our community. Check back as our organization grows and evolves!</p>
      <div class="hero__actions">
        <a class="btn" href="{{ '/join/' | relative_url }}">Join Spectra</a>
        <a class="btn btn--ghost" href="{{ '/outlist/' | relative_url }}">See the Out List</a>
      </div>
    </div>
    <div>
      <svg class="hero__plot" viewBox="100 -20 1930 1370" role="img" aria-labelledby="plotTitle plotDesc">
        <title id="plotTitle">The Spectra logo's graph of colored points</title>
        <desc id="plotDesc">Eight rainbow-colored points joined by lines, with arrows leaving the last points like light split by a prism, echoing the Spectra logo.</desc>
        <defs>
          <marker id="spectra-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#14182B"/>
          </marker>
        </defs>
        <g stroke="#14182B" stroke-width="6" opacity=".75">
    <line x1="1455" y1="628" x2="1940" y2="452" marker-end="url(#spectra-arrow)"/>
    <line x1="1455" y1="912" x2="1985" y2="722" marker-end="url(#spectra-arrow)"/>
    <line x1="1788" y1="918" x2="1998" y2="842" marker-end="url(#spectra-arrow)"/>
    <line x1="1788" y1="1208" x2="1998" y2="1132" marker-end="url(#spectra-arrow)"/>
        </g>
        <g stroke="#14182B" stroke-width="22">
    <line x1="280" y1="596" x2="716" y2="162"/>
    <line x1="788" y1="192" x2="788" y2="566"/>
    <line x1="879" y1="622" x2="1277" y2="424"/>
    <line x1="1368" y1="480" x2="1368" y2="566"/>
    <line x1="1368" y1="770" x2="1368" y2="856"/>
    <line x1="1419" y1="467" x2="1649" y2="869"/>
    <line x1="1419" y1="757" x2="1649" y2="1159"/>
    <line x1="1700" y1="1060" x2="1700" y2="1146"/>
        </g>
        <g stroke="#14182B" stroke-opacity=".18" stroke-width="3">
    <circle cx="208" cy="668" r="90" fill="#FF6663"/>
    <circle cx="788" cy="90" r="90" fill="#FEB144"/>
    <circle cx="788" cy="668" r="90" fill="#FDFD97"/>
    <circle cx="1368" cy="378" r="90" fill="#9EE09E"/>
    <circle cx="1368" cy="668" r="90" fill="#9EC1CF"/>
    <circle cx="1368" cy="958" r="90" fill="#996633"/>
    <circle cx="1700" cy="958" r="90" fill="#CC99C9"/>
    <circle cx="1700" cy="1248" r="90" fill="#14182B"/>
        </g>
      </svg>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">What we do</p>
      <h2>How Spectra shows up for the field</h2>
    </div>
    <div class="grid grid--3">
      <div>
        <h3>Visibility</h3>
        <p>The <a class="text-link" href="{{ '/outlist/' | relative_url }}">Out List</a> and <a class="text-link" href="{{ '/allyship/' | relative_url }}">Ally List</a> show that LGBTQ+ mathematicians are everywhere, and help people learn about the climate at universities.</p>
      </div>
      <div>
        <h3>Community</h3>
        <p>Receptions, special sessions, and the Lavender Lecture at the JMM, MathFest, and SIAM meetings, plus Spectra conferences and <a class="text-link" href="{{ '/join/#student-chapters' | relative_url }}">student chapters</a>.</p>
      </div>
      <div>
        <h3>Advocacy</h3>
        <p>Our <a class="text-link" href="{{ '/resources/' | relative_url }}">Advocacy Committee</a> works toward a more just and inclusive community for LGBTQ+ mathematicians, tracking issues and working with partners.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="grid grid--3">
      <div class="stat">
        <span class="stat__num">{{ site.data.outlist | size }}</span>
        <p>mathematicians on the Out List.</p>
      </div>
      <div class="stat">
        <span class="stat__num">{{ site.data.allylist | size }}</span>
        <p>mathematicians on the Ally List.</p>
      </div>
      <div class="stat">
        <span class="stat__num">1995</span>
        <p>the first reception for LGBT mathematicians at the Joint Mathematics Meetings. <a class="text-link" href="{{ '/history/' | relative_url }}">Our history</a></p>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="grid grid--2">
      <div>
        <p class="section__kicker">Stay in the loop</p>
        <h2>Mailing list</h2>
        <p>Join the Spectra Google Group to hear about upcoming events. If you aren't signed in to a Google account you will get an error message about not being able to access this &mdash; just sign in to fix it.</p>
        <form class="form-row" action="{{ site.mailing_list_subscribe_url }}" target="_blank" rel="noopener">
          <label for="email">Email address</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required>
          <button class="btn" type="submit" name="sub" value="Subscribe!" style="margin-top:.9rem;">Subscribe</button>
        </form>
      </div>
      <div>
        <p class="section__kicker">Support the work</p>
        <h2>Donate to Spectra</h2>
        <p>Spectra: the Association for LGBTQ+ Mathematicians is a registered 501(c)(3) nonprofit (EIN: {{ site.ein }}). We are working with Give Lively to process donations.</p>
        <div class="hero__actions">
          <a class="btn" href="{{ site.donate_url }}">Donate on Give Lively</a>
          <a class="btn btn--ghost" href="{{ '/donate/' | relative_url }}">Our fundraising goals</a>
        </div>
      </div>
    </div>
  </div>
</section>
