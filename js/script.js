 /* ── CURSOR ── */
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function animCursor() {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();
    document.querySelectorAll('a,button,.project-card,.service-card,.skill-tag').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.style.width='20px'; cursor.style.height='20px'; ring.style.width='56px'; ring.style.height='56px'; });
      el.addEventListener('mouseleave', () => { cursor.style.width='12px'; cursor.style.height='12px'; ring.style.width='36px'; ring.style.height='36px'; });
    });

    /* ── SCROLL REVEAL ── */
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    /* ── COUNT UP ── */
    function countUp(el, target, duration = 1800) {
      let start = 0, step = target / (duration / 16);
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = Math.floor(start) + (el.dataset.suffix || '');
        if (start >= target) clearInterval(timer);
      }, 16);
    }
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('[data-count]').forEach(el => {
            countUp(el, parseInt(el.dataset.count));
          });
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });
    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) statsObserver.observe(statsEl);

    /* ── NAVBAR SHRINK ── */
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      nav.style.padding = window.scrollY > 60 ? '14px 60px' : '22px 60px';
    });

    /* ── ACTIVE NAV LINK ── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
      });
    });