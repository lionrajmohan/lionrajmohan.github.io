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
```html
<!--
============================================================
RUNNING RESEARCH TICKER
============================================================
PURPOSE:
Provides a visual research identity ribbon below the hero.

EDIT HERE:
Research keywords can be updated as the portfolio evolves.
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
Update numbers when verified profile data changes.

DO NOT CHANGE:
The HTML structure unless the CSS is also updated.
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

HOW TO ADD:
Copy an existing card and change the number, title,
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

    <a class="card" href="{{ '/research/' | relative_url }}">
      <span>01</span>
      <h3>Research</h3>
      <p>
        Materials, energy, electrochemistry, water, environmental
        technologies, process intensification and AI-enabled materials research.
      </p>
    </a>

    <a class="card" href="{{ '/experience/' | relative_url }}">
      <span>02</span>
      <h3>Experience</h3>
      <p>
        Academic and professional journey spanning CECRI, SASTRA,
        NIT Jamshedpur, UPES, IIT Madras and NIT Warangal.
      </p>
    </a>

    <a class="card" href="{{ '/teaching/' | relative_url }}">
      <span>03</span>
      <h3>Teaching</h3>
      <p>
        Courses, lecture videos, laboratory demonstrations and
        learning resources.
      </p>
    </a>

    <a class="card" href="{{ '/academic-service/' | relative_url }}">
      <span>04</span>
      <h3>Academic Service</h3>
      <p>
        Thesis evaluation, viva-voce, peer review, editorial
        engagement and academic committees.
      </p>
    </a>

    <a class="card" href="{{ '/opportunities/' | relative_url }}">
      <span>05</span>
      <h3>Research Mentoring</h3>
      <p>
        B.Tech., M.Tech., Ph.D., postdoctoral and summer/winter
        research engagement.
      </p>
    </a>

    <a class="card" href="{{ '/invite-me/' | relative_url }}">
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
Displays the interdisciplinary research portfolio.

DATA SOURCE:
data/research.yml

HOW TO ADD / EDIT:
Modify data/research.yml rather than editing individual
theme cards here.
============================================================
-->

<section class="section dark-section">

  <div class="section-heading">

    <p class="eyebrow">RESEARCH THEMES</p>

    <h2>Interdisciplinary research portfolio</h2>

    <p>
      Research spans advanced energy materials, electrochemistry,
      nanomaterials, coatings, corrosion, water and environmental
      technologies, sustainable materials, process intensification
      and AI-enabled materials discovery.
    </p>

  </div>

  <div class="theme-grid">

    {% for item in site.data.research %}

    <a class="theme-card" href="{{ '/research/' | relative_url }}">

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
      Research becomes meaningful when knowledge is connected
      to people, problems and possibilities.
    </p>

  </div>

</section>


<!--
============================================================
LEARNING RESOURCES
============================================================
PURPOSE:
Provides direct access to selected YouTube teaching playlists.

DATA SOURCE:
Official Lion Rajmohan YouTube channel.

HOW TO ADD:
Copy an existing resource card and replace the title,
description and YouTube playlist URL.
============================================================
-->

<section class="section">

  <div class="section-heading">

    <p class="eyebrow">LEARNING RESOURCES</p>

    <h2>Teaching videos and laboratory learning</h2>

    <p>
      Selected lecture and laboratory resources are available
      through the Lion Rajmohan YouTube channel.
    </p>

  </div>

  <div class="grid cards">

    <a class="card"
       href="https://www.youtube.com/playlist?list=PL23LJMmRTn8css5FKqJ1RkzVDb3pLDJGt"
       target="_blank"
       rel="noopener">
      <span>01</span>
      <h3>Fluid Mechanics Laboratory</h3>
      <p>
        Laboratory experiments and demonstrations in fluid mechanics.
      </p>
    </a>

    <a class="card"
       href="https://www.youtube.com/playlist?list=PL23LJMmRTn8f5vHxbaFWwR_cKUuQAmXft"
       target="_blank"
       rel="noopener">
      <span>02</span>
      <h3>Chemical Reaction Engineering Laboratory</h3>
      <p>
        Laboratory experiments and demonstrations in reaction engineering.
      </p>
    </a>

    <a class="card"
       href="https://www.youtube.com/playlist?list=PL23LJMmRTn8ds1rekMjTxHARlnKrPcPch"
       target="_blank"
       rel="noopener">
      <span>03</span>
      <h3>Mass Transfer-I</h3>
      <p>
        Lecture and learning resources for Mass Transfer-I.
      </p>
    </a>

    <a class="card"
       href="https://www.youtube.com/playlist?list=PL23LJMmRTn8fwtijrPEgIbqZAaKCc3oEg"
       target="_blank"
       rel="noopener">
      <span>04</span>
      <h3>Chemical Process Calculations</h3>
      <p>
        Teaching resources for chemical process calculations. </p> </a> <a class="card" href="https://www.youtube.com/playlist?list=PL23LJMmRTn8dZ9iFJiAm7JZZ5VJAwJYh5" target="_blank" rel="noopener"> <span>05</span> <h3>Fuel Cells and Batteries</h3> <p> Learning resources covering fuel cells and battery technologies. </p> </a> <a class="card" href="https://www.youtube.com/playlist?list=PL23LJMmRTn8cnMOjWTnVa6v01gnNbhtmL" target="_blank" rel="noopener"> <span>06</span> <h3>Biochemical Engineering</h3> <p> Lecture and learning resources in biochemical engineering. </p> </a> </div> <div style="margin-top: 24px;"> <a class="btn dark" href="https://www.youtube.com/@LionRajmohan" target="_blank" rel="noopener"> Visit YouTube Channel </a> </div> </section>
