/**
 * BAYAN ART - Vanilla JS
 * All interactivity: scroll, mobile menu, gallery filter,
 * testimonials carousel, FAQ accordion, lightbox, counters
 */

(function () {
  'use strict';

  // ===== Header Scroll Effect =====
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  function handleScroll() {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('scrolled', scrolled);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ===== Mobile Menu =====
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const iconMenu = mobileMenuBtn.querySelector('.icon-menu');
  const iconClose = mobileMenuBtn.querySelector('.icon-close');
  let menuOpen = false;

  mobileMenuBtn.addEventListener('click', function () {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    iconMenu.classList.toggle('hidden', menuOpen);
    iconClose.classList.toggle('hidden', !menuOpen);
  });

  // ===== Smooth Scroll =====
  window.scrollToSection = function (id) {
    var el = document.getElementById(id);
    if (el) {
      var offset = 80;
      var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
    // Close mobile menu
    if (menuOpen) {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      iconMenu.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  };

  // ===== Gallery Filter =====
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Filter items
      galleryItems.forEach(function (item) {
        var cat = item.getAttribute('data-category');
        if (filter === 'الكل' || cat === filter) {
          item.classList.remove('hidden-item');
        } else {
          item.classList.add('hidden-item');
        }
      });
    });
  });

  // ===== Testimonials Carousel =====
  var currentTestimonial = 0;
  var totalTestimonials = 5;
  var track = document.getElementById('testimonialTrack');
  var dots = document.querySelectorAll('#testimonialDots .dot');

  function goToTestimonial(index) {
    currentTestimonial = index;
    track.style.transform = 'translateX(' + (index * 100) + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === index);
    });
  }

  window.goToTestimonial = goToTestimonial;

  // Auto-advance
  var testimonialInterval = setInterval(function () {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    goToTestimonial(currentTestimonial);
  }, 5000);

  // ===== FAQ Accordion =====
  var openFaq = 0; // First one open by default

  function updateFaqUI() {
    var questions = document.querySelectorAll('.faq-question');
    var answers = document.querySelectorAll('.faq-answer');

    questions.forEach(function (q, i) {
      if (i === openFaq) {
        q.classList.add('active');
        answers[i].classList.add('open');
      } else {
        q.classList.remove('active');
        answers[i].classList.remove('open');
      }
    });
  }

  window.toggleFaq = function (index) {
    openFaq = openFaq === index ? -1 : index;
    updateFaqUI();
  };

  // Init FAQ
  updateFaqUI();

  // ===== Lightbox =====
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');

  window.openLightbox = function (src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function () {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  // ===== Counter Animation =====
  var counterItems = document.querySelectorAll('.counter-item');
  var countersStarted = {};

  function animateCounter(el, target, duration) {
    var startTime = null;
    var valueEl = el.querySelector('.counter-value');

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      var progress = Math.min((currentTime - startTime) / duration, 1);
      valueEl.textContent = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          if (!countersStarted[el.dataset.target]) {
            countersStarted[el.dataset.target] = true;
            animateCounter(el, parseInt(el.dataset.target), 2000);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  counterItems.forEach(function (item) {
    counterObserver.observe(item);
  });

  // ===== Footer Year =====
  document.getElementById('currentYear').textContent = new Date().getFullYear();

})();
