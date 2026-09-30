document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.menu-toggle'),n=document.querySelector('.nav');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));});
```javascript id="q8m1kp"
/* ============================================================
   ACHIEVEMENT BANNER CAROUSEL
   ============================================================
   PURPOSE:
   Automatically rotates achievement banners.

   TIMING:
   One slide every 10 seconds.

   FEATURES:
   - Automatic rotation
   - Smooth fade
   - Previous / Next controls
   - Slide indicators
   - Manual navigation restarts the 10-second timer

   MAINTENANCE:
   No JavaScript editing is required when adding posters.
   Simply upload new images to:
   assets/images/achievements/
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".achievement-slide");
  const dots = document.querySelectorAll(".achievement-dot");
  const previous = document.querySelector(".achievement-prev");
  const next = document.querySelector(".achievement-next");

  /* Do nothing if the carousel is not present */
  if (slides.length === 0) {
    return;
  }

  let currentSlide = 0;
  let timer;

  /* ----------------------------------------------------------
     SHOW SELECTED SLIDE
     ---------------------------------------------------------- */

  function showSlide(index) {

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  /* ----------------------------------------------------------
     START 10-SECOND AUTOMATIC ROTATION
     ---------------------------------------------------------- */

  function startAutoPlay() {

    clearInterval(timer);

    if (slides.length > 1) {

      timer = setInterval(function () {
        showSlide(currentSlide + 1);
      }, 10000);

    }
  }

  /* ----------------------------------------------------------
     INITIALISE
     ---------------------------------------------------------- */

  showSlide(0);
  startAutoPlay();

  /* ----------------------------------------------------------
     NEXT BUTTON
     ---------------------------------------------------------- */

  if (next) {

    next.addEventListener("click", function () {

      showSlide(currentSlide + 1);
      startAutoPlay();

    });

  }

  /* ----------------------------------------------------------
     PREVIOUS BUTTON
     ---------------------------------------------------------- */

  if (previous) {

    previous.addEventListener("click", function () {

      showSlide(currentSlide - 1);
      startAutoPlay();

    });

  }

  /* ----------------------------------------------------------
     DOT CONTROLS
     ---------------------------------------------------------- */

  dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

      showSlide(index);
      startAutoPlay();

    });

  });

});
```
