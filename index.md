---

layout: default
title: "Prof. K. S. Rajmohan"
description: "Materials, Energy, Electrochemistry, Water and Environmental Technologies"
---
<!-- EDIT PAGE TITLE NAMES HERE IF REQUIRED --> 
<!--
============================================================
HERO IMAGE + GREEN LAB IDENTITY
============================================================
PURPOSE:
Displays the GREEN Lab image in full before the main
identity and navigation content.

EDIT HERE:
Change image2.jpg only if the main GREEN Lab image changes.

DATA SOURCE:
assets/images/image2.jpg

DO NOT CHANGE:
The image path unless the file is moved or renamed.
============================================================
-->

<section class="hero">

  <!-- FULL GREEN LAB IMAGE -->
  <div class="hero-image-full">
    <img src="{{ '/assets/images/image2.jpg' | relative_url }}"
         alt="Green Research on Energy and Environment Nexus (GREEN Lab)">
  </div>

  <!-- GREEN LAB IDENTITY BELOW IMAGE -->
  <div class="hero-content">

    <!--
============================================================
HERO IMAGE + GREEN LAB IDENTITY
============================================================
PURPOSE:
Displays the GREEN Lab image in full before the main identity.

EDIT HERE:
Change image2.jpg only if the main GREEN Lab image changes.

DATA SOURCE:
assets/images/image2.jpg

DO NOT CHANGE:
The image path unless the file is moved or renamed.
============================================================
-->

<section class="hero">

  <div class="hero-image-full">
    <img src="{{ '/assets/images/image2.jpg' | relative_url }}"
         alt="Green Research on Energy and Environment Nexus (GREEN Lab)">
  </div>

  <div class="hero-content">

    <p class="eyebrow">COOL PROFESSOR</p>

    <h1>
      <a href="{{ '/research/' | relative_url }}">GREEN LAB</a>
    </h1>

    <p class="hero-lab-name">
      Green Research on Energy and Environment Nexus
    </p>

    <h2>Prof. K. S. Rajmohan Research Group</h2>

    <p class="role">
      Associate Professor · Department of Chemical Engineering · NIT Warangal
    </p>

    <p class="tagline">
      Research • Innovation • Research Mentoring • Outreach & Collaboration
    </p>

    <p class="identity">
      Materials • Energy • Electrochemistry • Water • Environmental Technologies
      • Coatings • Corrosion • Surface Engineering
    </p>

    <div class="hero-actions">

      <a class="btn primary"
         href="{{ '/research/' | relative_url }}">
        Explore Research
      </a>

      <a class="btn"
         href="{{ '/opportunities/' | relative_url }}">
        Research Opportunities
      </a>

      <a class="btn"
         href="{{ '/contact/' | relative_url }}">
        Collaborate
      </a>

    </div>

  </div>

  <div class="profile-badge">
    <img src="{{ '/assets/images/image1.jpg' | relative_url }}"
         alt="Prof. K. S. Rajmohan">
  </div>

</section>
<div class="ticker"><div class="ticker-track">Research • Innovation • Research Mentoring • Academic Collaboration • Materials • Energy • Electrochemistry • Water • Environmental Technologies •</div></div>

<section class="stats">
<div><strong>25+</strong><span>Years of academic & research experience</span></div>
<div><strong>10</strong><span>Interdisciplinary research themes</span></div>
<div><strong>8</strong><span>Doctoral scholars: current + awarded</span></div>
<div><strong>Research Portfolio</strong><span>Journals • Conferences • Book Chapters • Projects</span></div>
</section>

<section class="section">
<div class="section-heading">
<p class="eyebrow">ACADEMIC PROFILE</p>
<h2>Research, teaching and academic engagement</h2>
<p>A long-term academic portal connecting research, mentoring, teaching, scholarly service, professional activities and collaboration.</p>
</div>

<div class="grid cards">
<a class="card" href="{{ '/research/' | relative_url }}"><span>01</span><h3>Research</h3><p>Materials, energy, electrochemistry, water, environmental technologies, process intensification and AI-enabled materials research.</p></a>

<a class="card" href="{{ '/experience/' | relative_url }}"><span>02</span><h3>Experience</h3><p>Academic and professional journey spanning CECRI, SASTRA, NIT Jamshedpur, UPES, IIT Madras and NIT Warangal.</p></a>

<a class="card" href="{{ '/teaching/' | relative_url }}"><span>03</span><h3>Teaching</h3><p>Courses, lecture videos, laboratory demonstrations and learning resources.</p></a>

<a class="card" href="{{ '/academic-service/' | relative_url }}"><span>04</span><h3>Academic Service</h3><p>Thesis evaluation, viva-voce, peer review, editorial engagement and academic committees.</p></a>

<a class="card" href="{{ '/opportunities/' | relative_url }}"><span>05</span><h3>Research Mentoring</h3><p>B.Tech., M.Tech., Ph.D., postdoctoral and summer/winter research engagement.</p></a>

<a class="card" href="{{ '/invite-me/' | relative_url }}"><span>06</span><h3>Invite Me</h3><p>Keynotes, invited talks, Faculty Development Programmes (FDPs), resource-person programmes, research methodology and professional development.</p></a>

</div>
</section>

<section class="section dark-section">
<div class="section-heading">
<p class="eyebrow">RESEARCH THEMES</p>
<h2>Interdisciplinary research portfolio</h2>
</div>
<div class="theme-grid">
{% for item in site.data.research %}
<a class="theme-card" href="{{ '/research/' | relative_url }}"><span>{{ forloop.index }}</span><h3>{{ item.name }}</h3><p>{{ item.group }}</p></a>
{% endfor %}
</div>
</section>

<section class="section">
<div class="section-heading">
<p class="eyebrow">SCHOLARLY OUTPUT</p>
<h2>Publications</h2>
<p>Publication records are being structured by year, type, research theme and DOI/publisher information. The database will be progressively cleaned and verified.</p>
</div>
<a class="btn dark" href="{{ '/research/publications/' | relative_url }}">View Publications</a>
</section>

<section class="section split">
<div>
<p class="eyebrow">MEDIA & TEACHING</p>
<h2>Learn beyond the classroom</h2>
<p>Lecture videos, laboratory demonstrations, academic programmes and selected media are connected through the teaching and media sections.</p>
<a class="btn dark" href="{{ '/media/' | relative_url }}">View Media</a>
</div>

<div class="quote-box">
<p>Research becomes meaningful when knowledge is connected to people, problems and possibilities.</p>
</div>
</section>
