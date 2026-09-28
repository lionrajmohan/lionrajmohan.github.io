```markdown
---
layout: default
title: "Prof. K. S. Rajmohan"
description: "Green Research on Energy and Environment Nexus (GREEN Lab) — research, innovation, mentoring, teaching and academic collaboration"
---

<!--
============================================================
HOMEPAGE — index.md
============================================================
PURPOSE:
Main homepage for Prof. K. S. Rajmohan Research Group /
GREEN Lab.

EDIT HERE:
Homepage text, buttons, section descriptions and featured
content can be edited in this file.

DATA SOURCE:
Research themes are loaded from data/research.yml.
Images are stored in assets/images/.

IMPORTANT:
Keep only ONE hero section on this page.
============================================================
-->

<!--
============================================================
HERO — GREEN LAB IDENTITY
============================================================
PURPOSE:
Displays the main GREEN Lab image in full width followed
by the research-group identity.

EDIT HERE:
Change image2.jpg only if the main GREEN Lab image changes.

DATA SOURCE:
assets/images/image2.jpg
assets/images/image1.jpg

DO NOT CHANGE:
The image paths unless the files are moved or renamed.
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


<!--
============================================================
RUNNING RESEARCH TICKER
============================================================
PURPOSE:
Provides a visual research
```
