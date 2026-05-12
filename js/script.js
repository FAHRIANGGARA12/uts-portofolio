/* ============================================
   PORTFOLIO – script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. ACTIVE NAV LINK saat scroll ── */
  const sections = document.querySelectorAll('section[id], nav');
  const navLinks = document.querySelectorAll('nav a');

  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('section[id]').forEach(function (section) {
    observer.observe(section);
  });


  /* ── 2. SKILL ITEMS – animasi stagger saat masuk viewport ── */
  const skillItems = document.querySelectorAll('.skill-item');

  const skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = (i * 0.08) + 's';
        entry.target.classList.add('visible');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  skillItems.forEach(function (item) {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    skillObserver.observe(item);
  });

  /* Helper: tambahkan class visible */
  document.querySelectorAll('.skill-item').forEach(function (el) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
  });


  /* ── 3. PORTFOLIO ITEMS – fade-in saat scroll ── */
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  const portfolioObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        portfolioObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  portfolioItems.forEach(function (item) {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    portfolioObserver.observe(item);
  });


  /* ── 4. NAVBAR – sembunyikan saat scroll ke bawah, muncul ke atas ── */
  let lastScrollY = window.scrollY;
  const navbar = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
  });

  navbar.style.transition = 'transform 0.3s ease';

});