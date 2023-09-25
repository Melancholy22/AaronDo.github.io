---
layout: post
title: Projects
order_number: 3
---

{% for projects in site.data.project %}
  <div class="resume-item" itemscope itemprop="alumniOf" itemtype="http://schema.org/CollegeOrUniversity">
    <h3 class="resume-item-title" itemprop="name">{{ projects.name }}</h3>
    <p class="resume-item-duration"> <b>Duration:</b> {{ projects.timeframe }}</p>
    <p class="resume-item-summary"> <b>Description:</b> {{ projects.description }}</p>
    <p class="resume-item-role">{{ projects.role }}</p>
    {% if projects.urls != null %}
      <header class="section-header">
        <h4>Related Links</h4>
      </header>
      <p class="resume-item-urls">{{ projects.urls }}</p>
    {% endif %}
    {% if projects.youtube != null %}
      {% include youtube.html id=projects.youtube %}
    {% endif %}
  <!-- </div> -->
{% endfor %}