/* ============================================================
   AFRA BOUZEHAR — PORTFOLIO v2 · script.js
   Features: Custom cursor, theme toggle, navbar, mobile nav,
   hero reveals, typing effect, scroll animations,
   skill bar fill, scroll-to-top, form validation
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initTheme();
  initNavbar();
  initMobileNav();
  initHeroReveal();
  initTyping();
  initScrollObserver();
  initSkillBars();
  initScrollTop();
  initForm();
});

/* ── CUSTOM CURSOR ── */
function initCursor() {
  const dot = document.getElementById('cursorDot');
  if (!dot || window.matchMedia('(hover: none)').matches) return;

  let mx = -100, my = -100;
  let cx = -100, cy = -100;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  // Smooth lag follow
  function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    dot.style.left = cx + 'px';
    dot.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  // Grow on interactive elements
  document.querySelectorAll('a, button, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.style.transform = 'translate(-50%,-50%) scale(3)'; dot.style.opacity = '.5'; });
    el.addEventListener('mouseleave', () => { dot.style.transform = 'translate(-50%,-50%) scale(1)'; dot.style.opacity = '1'; });
  });
}

/* ── THEME TOGGLE ── */
function initTheme() {
  const btn  = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('abTheme') || 'light';

  html.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('abTheme', next);
  });
}

/* ── STICKY NAVBAR ── */
function initNavbar() {
  const nav = document.getElementById('navbar');

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Highlight active section in nav
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  const navH      = () => document.getElementById('navbar').offsetHeight;

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - navH() - 60) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

/* ── MOBILE NAVIGATION ── */
function initMobileNav() {
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  ham.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    ham.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      links.classList.remove('open');
      ham.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── HERO REVEAL (load animations) ── */
function initHeroReveal() {
  // Slight delay so fonts load, then kick off reveals
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }, 80);
}

/* ── TYPING EFFECT ── */
function initTyping() {
  const el = document.getElementById('typedText');
  if (!el) return;

  const phrases = [
    'Aspiring Full-Stack Developer',
    'Software Design & Dev Student',
    'Frontend Craft Enthusiast',
    'Builder of Things on the Web',
  ];

  let pi = 0, ci = 0, deleting = false;

  const TYPE_SPEED   = 60;
  const DELETE_SPEED = 32;
  const PAUSE_AFTER  = 2200;
  const PAUSE_BEFORE = 350;

  function tick() {
    const phrase = phrases[pi];

    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
    }

    setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
  }

  // Start after hero reveals settle
  setTimeout(tick, 1100);
}

/* ── SCROLL OBSERVER (fade-up elements) ── */
function initScrollObserver() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  els.forEach(el => obs.observe(el));
}

/* ── SKILL BAR FILL ANIMATION ── */
function initSkillBars() {
  const fills = document.querySelectorAll('.sk-fill');
  if (!fills.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.getAttribute('data-w');
        setTimeout(() => { e.target.style.width = w + '%'; }, 150);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });

  fills.forEach(f => obs.observe(f));
}

/* ── SCROLL TO TOP ── */
function initScrollTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── CONTACT FORM VALIDATION ── */
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fn   = document.getElementById('fn');
  const fe   = document.getElementById('fe');
  const fm   = document.getElementById('fm');
  const fnE  = document.getElementById('fnErr');
  const feE  = document.getElementById('feErr');
  const fmE  = document.getElementById('fmErr');
  const btn  = document.getElementById('fBtn');
  const btxt = document.getElementById('fBtnTxt');
  const ok   = document.getElementById('fOk');

  // Clear error on input
  const clearErr = (input, errEl) => {
    input.addEventListener('input', () => {
      input.classList.remove('err');
      errEl.textContent = '';
    });
  };
  clearErr(fn, fnE); clearErr(fe, feE); clearErr(fm, fmE);

  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const setErr = (input, errEl, msg) => {
    errEl.textContent = msg;
    input.classList.toggle('err', !!msg);
    return !msg;
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = fn.value.trim();
    const mail = fe.value.trim();
    const msg  = fm.value.trim();

    let valid = true;

    // Validate each field
    if (name.length < 2) { setErr(fn, fnE, 'Please enter your name (min. 2 characters).'); valid = false; }
    else setErr(fn, fnE, '');

    if (!mail)           { setErr(fe, feE, 'Email is required.'); valid = false; }
    else if (!emailOk(mail)) { setErr(fe, feE, 'Enter a valid email address.'); valid = false; }
    else setErr(fe, feE, '');

    if (msg.length < 10) { setErr(fm, fmE, 'Message must be at least 10 characters.'); valid = false; }
    else setErr(fm, fmE, '');

    if (!valid) return;

    // Simulate sending
    btxt.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btxt.textContent = 'Send Message';
      ok.classList.add('show');
      setTimeout(() => ok.classList.remove('show'), 5000);
    }, 1100);
  });
}

/* ── SMOOTH ANCHOR SCROLL (offset for sticky nav) ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = document.getElementById('navbar').offsetHeight;
    window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
  });
});
