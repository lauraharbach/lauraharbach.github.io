/**
 * main.js — lauraharbach.github.io
 * Starfield, navigation, scroll reveals, mobile menu
 */
(function () {
  'use strict';

  // ===========================================================================
  // Star Field Canvas
  // ===========================================================================
  var canvas = document.getElementById('hero-canvas');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var stars = [];
    var raf;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function mkStar() {
      return {
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        r:       Math.random() * 1.4 + 0.15,
        alpha:   Math.random() * 0.7 + 0.3,
        drift:   Math.random() * 0.18 + 0.04,
        phase:   Math.random() * Math.PI * 2,
        speed:   Math.random() * 0.012 + 0.003,
        // Occasional colour tint
        hue:     Math.random() > 0.85
                   ? (Math.random() > 0.5 ? '200,210,255' : '255,200,220')
                   : '230,237,243'
      };
    }

    function initStars() {
      stars = [];
      var count = Math.floor((canvas.width * canvas.height) / 6000);
      count = Math.max(80, Math.min(count, 260));
      for (var i = 0; i < count; i++) stars.push(mkStar());
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var now = Date.now() * 0.001;

      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.phase += s.speed;
        var tw = (Math.sin(s.phase) * 0.25 + 0.75) * s.alpha;

        ctx.beginPath();
        ctx.arc(s.x, s.y - now * s.drift % canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + s.hue + ',' + tw + ')';
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    function boot() {
      resize();
      initStars();
      cancelAnimationFrame(raf);
      draw();
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(boot, 220);
    });

    boot();
  }


  // ===========================================================================
  // Navigation — glass effect on scroll + scrolled class
  // ===========================================================================
  var nav  = document.getElementById('site-nav');
  var hero = document.querySelector('.hero');

  if (nav) {
    if (hero && 'IntersectionObserver' in window) {
      var heroObs = new IntersectionObserver(function (entries) {
        nav.classList.toggle('scrolled', !entries[0].isIntersecting);
      }, { rootMargin: '-' + (64) + 'px 0px 0px 0px' });
      heroObs.observe(hero);
    } else {
      // No hero on page (inner pages) — always show glass nav
      nav.classList.add('scrolled');
    }
  }


  // ===========================================================================
  // Mobile Nav Toggle
  // ===========================================================================
  var toggle   = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (nav && !nav.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  // ===========================================================================
  // Scroll Reveal — IntersectionObserver fade-in
  // ===========================================================================
  var reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

      reveals.forEach(function (el, i) {
        // Stagger siblings in the same grid/list
        el.style.transitionDelay = ((i % 5) * 70) + 'ms';
        revealObs.observe(el);
      });
    } else {
      // Fallback: show everything immediately
      reveals.forEach(function (el) { el.classList.add('revealed'); });
    }
  }

}());
