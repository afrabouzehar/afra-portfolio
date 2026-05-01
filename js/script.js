
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMobileNav();
  initHeroReveal();
  initTyping();
  initScrollObserver();
  initSkillBars();
  initLangBars();
  initScrollTop();
  initForm();
});

/* ── THEME ── */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const html = document.documentElement;

  if (!btn) return;

  const saved = localStorage.getItem('afra-theme') || 'dark';
  html.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('afra-theme', next);
  });
}

/* ── NAVBAR ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');

  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);

    let current = '';

    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 90) current = s.id;
    });

    links.forEach(l => {
      l.classList.toggle(
        'active',
        l.getAttribute('href') === `#${current}`
      );
    });
  }, { passive: true });
}

/* ── MOBILE NAV ── */
function initMobileNav() {
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  if (!ham || !links) return;

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

/* ── HERO ── */
function initHeroReveal() {
  setTimeout(() => {
    document.querySelectorAll('.reveal')
      .forEach(el => el.classList.add('in'));
  }, 60);
}

/* ── TYPING ── */
function initTyping() {
  const el = document.getElementById('typedText');
  if (!el) return;

  const phrases = [
    'Aspiring Full-Stack Developer',
    'Software Design & Dev Student',
    'Frontend Craft Enthusiast',
    'Builder of Web Experiences',
  ];

  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = phrases[pi];

    el.textContent = deleting
      ? phrase.slice(0, --ci)
      : phrase.slice(0, ++ci);

    if (!deleting && ci === phrase.length) {
      deleting = true;
      return setTimeout(tick, 2000);
    }

    if (deleting && ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      return setTimeout(tick, 400);
    }

    setTimeout(tick, deleting ? 30 : 55);
  }

  setTimeout(tick, 800);
}

/* ── SCROLL OBSERVER ── */
function initScrollObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up')
    .forEach(el => obs.observe(el));
}

/* ── SKILLS ── */
function initSkillBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.width = e.target.dataset.w + '%';
        }, 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-fill')
    .forEach(el => obs.observe(el));
}

/* ── LANGUAGES ── */
function initLangBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.width = e.target.dataset.w + '%';
        }, 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.lang-bar-fill')
    .forEach(el => obs.observe(el));
}

/* ── SCROLL TOP ── */
function initScrollTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    const offset = document.getElementById('navbar')?.offsetHeight || 0;

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});