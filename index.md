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


<!--
============================================================
RUNNING RESEARCH TICKER
============================================================
PURPOSE:
Provides a visual research identity ribbon below the hero.

EDIT HERE:
Change research keywords if the research portfolio evolves.
============================================================
-->

<div class="ticker">
  <div class="ticker-track">
    Research • Innovation • Research Mentoring • Academic Collaboration •
    Materials • Energy • Electrochemistry • Water • Environmental Technologies •
    Coatings • Corrosion • Surface Engineering • AI-Driven Materials •
  </div>
</div>


<!--
============================================================
KEY STATISTICS
============================================================
PURPOSE:
Provides a quick overview of the academic and research profile.

EDIT HERE:
Update numbers when verified institutional/profile data changes.

DO NOT CHANGE:
The structure unless the CSS is also updated.
============================================================
-->

<section class="stats">

  <div>
    <strong>25+</strong>
    <span>Years of academic & research experience</span>
  </div>

  <div>
    <strong>10</strong>
    <span>Interdisciplinary research themes</span>
  </div>

  <div>
    <strong>8</strong>
    <span>Doctoral scholars: current + awarded</span>
  </div>

  <div>
    <strong>Research Portfolio</strong>
    <span>Journals • Conferences • Book Chapters • Projects</span>
  </div>

</section>


<!--
============================================================
ACADEMIC PROFILE
============================================================
PURPOSE:
Gateway to the major sections of the website.

EDIT HERE:
Add or modify homepage cards as the website develops.

HOW TO ADD:
Copy an existing card and change its number, title,
description and link.
============================================================
-->

<section class="section">

  <div class="section-heading">

    <p class="eyebrow">ACADEMIC PROFILE</p>

    <h2>Research, teaching and academic engagement</h2>

    <p>
      A connected profile of research, mentoring, teaching,
      scholarly service, professional activities and collaboration.
    </p>

  </div>

  <div class="grid cards">

    <a class="card"
       href="{{ '/research/' | relative_url }}">
      <span>01</span>
      <h3>Research</h3>
      <p>
        Materials, energy, electrochemistry, water, environmental
        technologies, process intensification and AI-enabled materials research.
      </p>
    </a>

    <a class="card"
       href="{{ '/experience/' | relative_url }}">
      <span>02</span>
      <h3>Experience</h3>
      <p>
        Academic and professional journey spanning CECRI, SASTRA,
        NIT Jamshedpur, UPES, IIT Madras and NIT Warangal.
      </p>
    </a>

    <a class="card"
       href="{{ '/teaching/' | relative_url }}">
      <span>03</span>
      <h3>Teaching</h3>
      <p>
        Courses, lecture videos, laboratory demonstrations and
        learning resources.
      </p>
    </a>

    <a class="card"
       href="{{ '/academic-service/' | relative_url }}">
      <span>04</span>
      <h3>Academic Service</h3>
      <p>
        Thesis evaluation, viva-voce, peer review, editorial
        engagement and academic committees.
      </p>
    </a>

    <a class="card"
       href="{{ '/opportunities/' | relative_url }}">
      <span>05</span>
      <h3>Research Mentoring</h3>
      <p>
        B.Tech., M.Tech., Ph.D., postdoctoral and summer/winter
        research engagement.
      </p>
    </a>

    <a class="card"
       href="{{ '/invite-me/' | relative_url }}">
      <span>06</span>
      <h3>Invite Me</h3>
      <p>
        Keynotes, invited talks, Faculty Development Programmes (FDPs),
        resource-person programmes, research methodology and professional development.
      </p>
    </a>

  </div>

</section>


<!--
============================================================
RESEARCH THEMES
============================================================
PURPOSE:
Displays the 10 interdisciplinary research themes.

DATA SOURCE:
data/research.yml

HOW TO ADD / EDIT:
Modify data/research.yml rather than editing the cards here.

DO NOT CHANGE:
The Liquid loop unless the data structure changes.
============================================================
-->

<section class="section dark-section">

  <div class="section-heading">

    <p class="eyebrow">RESEARCH THEMES</p>

    <h2>Interdisciplinary research portfolio</h2>

  </div>

  <div class="theme-grid">

    {% for item in site.data.research %}

    <a class="theme-card"
       href="{{ '/research/' | relative_url }}">

      <span>{{ forloop.index }}</span>

      <h3>{{ item.name }}</h3>

      <p>{{ item.group }}</p>

    </a>

    {% endfor %}

  </div>

</section>


<!--
============================================================
SCHOLARLY OUTPUT
============================================================
PURPOSE:
Gateway to the publication database.

FUTURE:
Publication records will eventually be structured by year,
type, theme, DOI and publisher.
============================================================
-->

<section class="section">

  <div class="section-heading">

    <p class="eyebrow">SCHOLARLY OUTPUT</p>

    <h2>Publications</h2>

    <p>
      Publication records are being structured by year, type,
      research theme and DOI/publisher information. The database
      will be progressively cleaned and verified.
    </p>

  </div>

  <a class="btn dark"
     href="{{ '/research/publications/' | relative_url }}">
    View Publications
  </a>

</section>


<!--
============================================================
MEDIA & TEACHING
============================================================
PURPOSE:
Connects visitors to lecture videos, laboratory demonstrations
and selected academic media.
============================================================
-->

<section class="section split">

  <div>

    <p class="eyebrow">MEDIA & TEACHING</p>

    <h2>Learn beyond the classroom</h2>

    <p>
      Lecture videos, laboratory demonstrations, academic programmes
      and selected media are connected through the teaching and media sections.
    </p>

    <a class="btn dark"
       href="{{ '/media/' | relative_url }}">
      View Media
    </a>

  </div>

  <div class="quote-box">

    <p>
      Research b
```
