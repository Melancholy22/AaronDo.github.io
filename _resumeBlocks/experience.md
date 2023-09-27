---
layout: post
title: Work Experience
order_number: 2
---

  <!-- begin Experience -->
  <section class="content-section">

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