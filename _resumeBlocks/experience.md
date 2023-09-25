---
layout: post
title: Work Experience
order_number: 2
---

  <!-- begin Experience -->
  <section class="content-section">

    <header class="section-header">
      <h2>Experience</h2>
    </header>

    {% for job in site.data.experience %}
    <div class="resume-item" itemscope itemprop="worksFor" itemtype="http://schema.org/Organization">
      <h3 class="resume-item-title" itemprop="name">{{ job.company }}</h3>
      <h4 class="resume-item-details" itemprop="description">{{ job.position }} &bull; {{ job.duration }}</h4>
      <p class="resume-item-copy">{{ job.summary }}</p>
      <p class="resume-item-ref"> <b>References: </b> {{ job.references }}</p>
    </div><!-- end of resume-item -->
    {% endfor %}

  </section>
  <!-- end Experience -->

  <!-- begin Education -->
  <section class="content-section">
    <header class="section-header">
      <h2>Education</h2>
    </header>

    {% for education in site.data.education %}
    <div class="resume-item" itemscope itemprop="alumniOf" itemtype="http://schema.org/CollegeOrUniversity">
      <h3 class="resume-item-title" itemprop="name">{{ education.uni }}</h3>
      <h4 class="resume-item-details group" itemprop="description">{{ education.degree }} &bull; {{ education.year }}</h4>
      <p class="resume-item-summary"> <b>Major:</b> {{ education.summary }}</p>
      <p class="resume-item-copy"> <b>Awards/Honors: </b>{{ education.awards }}</p>
    <!-- </div> -->
    {% endfor %}
  <!-- </section> -->
  <!-- end Education -->
