---
layout: post
title: Education
num: A2
order_number: 3
---
  <!-- begin Education -->
  <section class="content-section">
    {% for education in site.data.education %}
    <div class="resume-item" itemscope itemprop="alumniOf" itemtype="http://schema.org/CollegeOrUniversity">
      <h3 class="resume-item-title" itemprop="name">{{ education.uni }}</h3>
      <p class="resume-item-details group" itemprop="description"><b>{{ education.degree }} &bull; {{ education.year }}</b></p>
      <p class="resume-item-summary"> <b>Major:</b> {{ education.summary }}</p>
      <p class="resume-item-copy"> <b>Awards/Honors: </b>{{ education.awards }}</p>
    <!-- </div> -->
    {% endfor %}
  <!-- </section> -->
  <!-- end Education -->