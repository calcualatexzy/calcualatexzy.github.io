---
layout: default
title: "Your Name - Personal Website"
---


<!-- Include Hero Section -->
<div class="container">
  <div class="hero">
    <div class="hero-content">
      <div class="hero-image">
        <img src="/assets/img/hero.jpg" alt="Ziyi Xu"/>
      </div>
      <div class="hero-text" markdown="1">
        {% include hero.md %}
      </div>
    </div>
  </div>
</div>
<!-- Biography Section -->

<div class="container" markdown="1">
{% include biography.md %}
</div>
<!-- Publications Section -->

<div class="container" markdown="1">
{% include publications.md %}
</div>

<!-- News Section -->
<div class="container" markdown="1">
{% include news.md %}
</div>
