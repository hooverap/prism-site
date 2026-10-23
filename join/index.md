---
title: Join
permalink: /join/
redirect_from:
  - /membership.html
description: Individual, Affiliate, and Student Chapter membership in Spectra, plus the mailing list.
---

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Joining Spectra</p>
      <h1>Ways to get involved</h1>
      <p class="lede">We have established three kinds of member engagement: Individuals, Affiliates, and Student Chapters. You can also always subscribe to <a class="text-link" href="#mailing-list">our mailing list</a>, independent of joining as a member.</p>
    </div>

    <div class="grid grid--3">
      <div class="card" id="individual">
        <p class="meta">Annual cost: $0</p>
        <h3>Individual membership</h3>
        <p>Individual members are able to vote in Spectra elections.</p>
      </div>
      <div class="card" id="affiliates">
        <p class="meta">Institutions &amp; organizations</p>
        <h3>Affiliate membership</h3>
        <p>Academic institutions and other organizations are welcome to join as Affiliates. Members are asked to affirm the following statement:</p>
        <blockquote>As an institutional/corporate member of Spectra, we pledge to support and encourage LGBTQ+ individuals in mathematics, by working to create an inclusive and affirming environment that supports the well-being and professional development of LGBTQ+ mathematicians. We join the work creating a time when LGBTQ+ mathematicians are able to bring their whole selves to the mathematical community.</blockquote>
        <p>See our current <a href="{{ '/allyship/#institutional-members' | relative_url }}">institutional members</a>.</p>
      </div>
      <div class="card">
        <p class="meta">For students</p>
        <h3>Student chapters</h3>
        <p>Spectra is delighted to support students wanting to form Spectra Student Chapters at their home institutions. <a href="#student-chapters">How to form a chapter</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--raised" id="student-chapters">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Student chapters</p>
      <h2>Spectra Student Chapters</h2>
      <p>The set-up is pretty simple, and it is outlined in the <a class="text-link" href="{{ '/StudentChapters/Welcome_Document.docx' | relative_url }}">Welcome Document</a>. If you have any questions, please reach out to the <a class="text-link" href="mailto:membership@lgbtmath.org">Membership Chair</a>.</p>
    </div>

    <div class="grid grid--2">
      <div class="card">
        <h3>Forming a student chapter</h3>
        <p>To form a Spectra chapter, you will need to send the Membership Chair two things:</p>
        <ul>
          <li>the completed <a href="{{ '/StudentChapters/Application_Form.pdf' | relative_url }}">Application Form</a>, and</li>
          <li>your proposed bylaws; here is a <a href="{{ '/StudentChapters/Spectra_Chapter_Bylaws_Template.docx' | relative_url }}">bylaws template</a>.</li>
        </ul>
        <p>After receipt of your application materials, the Membership Chair will bring your application to the next Board Meeting. You should hear shortly thereafter! There is no cost associated with forming or maintaining a Spectra student chapter.</p>
        <p>If you need to update your bylaws, change officers or faculty advisor, or dissolve your chapter, please fill out the <a href="{{ '/StudentChapters/Spectra_Student_Chapter_Update_Form.pdf' | relative_url }}">Update Form</a>.</p>
        <!-- TODO: the Immediate Dissolution Form PDF was missing from lgbtmath.org (404). Add it to /StudentChapters/ and restore this sentence:
        If you need to immediately dissolve your chapter, please fill out the Immediate Dissolution Form. -->
        <p>If you need to immediately dissolve your chapter, please contact the <a href="mailto:membership@lgbtmath.org">Membership Chair</a>.</p>
      </div>
      <div class="card">
        <h3>Supporting student chapters</h3>
        <p>Spectra student chapters in good standing have a few annual membership requirements:</p>
        <ul>
          <li>Submit to the Membership Chair an <a href="{{ '/StudentChapters/End_of_Year_Report_Form.docx' | relative_url }}">annual report form</a> detailing chapter events.</li>
          <li>Share the <a href="{{ '/StudentChapters/Student_Chapter_Spreadsheet_Template.xlsx' | relative_url }}">Student Chapter Membership spreadsheet</a> with the Membership Chair and keep it up-to-date to be sure your members are all included as Spectra Individual Members.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section" id="mailing-list">
  <div class="wrap">
    <div class="section__head">
      <p class="section__kicker">Mailing list</p>
      <h2>Get on the mailing list</h2>
      <p>The Spectra mailing list will always be open to anyone who wishes to join it. You do not have to be a Spectra member, nor will you have to be a member in the future. This is a great way to stay informed about events and information relevant to our community.</p>
    </div>
    <form class="form-row" action="{{ site.mailing_list_subscribe_url }}" target="_blank" rel="noopener">
      <label for="join-email">Email address</label>
      <input type="email" id="join-email" name="email" placeholder="you@example.com" required>
      <button class="btn" type="submit" name="sub" value="Subscribe!" style="margin-top:.9rem;">Join the Google Group</button>
    </form>
    <p class="fineprint">If you aren't signed in to a Google account, then you will get an error message about not being able to access this. Just sign in to fix this.</p>
  </div>
</section>
