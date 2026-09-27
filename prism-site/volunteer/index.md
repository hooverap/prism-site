---
title: Volunteer
permalink: /volunteer/
description: Ways to get involved beyond membership.
---

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Get involved</p>
      <h1>Volunteer</h1>
      <p class="lede">{{ site.title }} runs entirely on volunteer time. Here are a few ways to pitch in, from a single afternoon to an ongoing role.</p>
    </div>

    <div class="grid grid--3">
      <div class="card">
        <h3>Event organizing</h3>
        <p>Help plan the social at your local or national meeting &mdash; booking a room, spreading the word, and welcoming people on the night.</p>
      </div>
      <div class="card">
        <h3>Mentorship</h3>
        <p>Offer occasional office hours to a student or early-career mathematician navigating advising, job searches, or coming out at work.</p>
      </div>
      <div class="card">
        <h3>Board service</h3>
        <p>Join the board for a term and help set direction, manage finances, or lead a specific initiative. See the current <a class="text-link" href="{{ '/board/' | relative_url }}">Board</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Say hello</p>
      <h2>Tell us how you'd like to help</h2>
    </div>
    <form class="form-row">
      <div class="form-row">
        <label for="v-name">Name</label>
        <input type="text" id="v-name" name="name">
      </div>
      <div class="form-row">
        <label for="v-email">Email</label>
        <input type="email" id="v-email" name="email">
      </div>
      <div class="form-row">
        <label for="v-interest">What are you interested in?</label>
        <select id="v-interest" name="interest">
          <option>Event organizing</option>
          <option>Mentorship</option>
          <option>Board service</option>
          <option>Something else</option>
        </select>
      </div>
      <button class="btn" type="submit">Send</button>
      <p class="fineprint" style="margin-top:.8rem;">This form is a placeholder &mdash; connect it to a form service (like Formspree or a Google Form) or a backend of your choice.</p>
    </form>
  </div>
</section>
