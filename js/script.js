/* ================================================================
   AFRA BOUZEHAR — Portfolio v4 · script.js
   ================================================================ */

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
  const btn  = document.getElementById('themeToggle');
  const html = document.documentElement;
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
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Active link highlight
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 90) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

/* ── MOBILE NAV ── */
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

/* ── HERO REVEAL ── */
function initHeroReveal() {
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }, 60);
}

/* ── TYPING EFFECT ── */
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
    el.textContent = deleting ? phrase.slice(0, --ci) : phrase.slice(0, ++ci);

    if (!deleting && ci === phrase.length) {
      deleting = true; setTimeout(tick, 2000); return;
    }
    if (deleting && ci === 0) {
      deleting = false; pi = (pi + 1) % phrases.length;
      setTimeout(tick, 400); return;
    }
    setTimeout(tick, deleting ? 30 : 55);
  }
  setTimeout(tick, 1000);
}

/* ── SCROLL FADE-UP ── */
function initScrollObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ── SKILL BARS ── */
function initSkillBars() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => { e.target.style.width = e.target.dataset.w + '%'; }, 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.skill-fill').forEach(el => obs.observe(el));
}

/* ── LANGUAGE BARS ── */
function initLangBars() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => { e.target.style.width = e.target.dataset.w + '%'; }, 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.lang-bar-fill').forEach(el => obs.observe(el));
}

/* ── SCROLL TO TOP ── */
function initScrollTop() {
  const btn = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── CONTACT FORM ── */
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fn = document.getElementById('fn'), fnE = document.getElementById('fnErr');
  const fe = document.getElementById('fe'), feE = document.getElementById('feErr');
  const fm = document.getElementById('fm'), fmE = document.getElementById('fmErr');
  const btn = document.getElementById('fBtn'), btxt = document.getElementById('fBtnTxt');
  const ok  = document.getElementById('fOk');

  const clearErr = (i, e) => i.addEventListener('input', () => { i.classList.remove('err'); e.textContent = ''; });
  clearErr(fn, fnE); clearErr(fe, feE); clearErr(fm, fmE);

  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    if (fn.value.trim().length < 2) { fnE.textContent = 'Please enter your name.'; fn.classList.add('err'); valid = false; }
    if (!fe.value.trim())            { feE.textContent = 'Email is required.';       fe.classList.add('err'); valid = false; }
    else if (!emailOk(fe.value))     { feE.textContent = 'Enter a valid email.';     fe.classList.add('err'); valid = false; }
    if (fm.value.trim().length < 10) { fmE.textContent = 'Message too short (min 10 chars).'; fm.classList.add('err'); valid = false; }

    if (!valid) return;

   btxt.textContent = 'Sending...';
   btn.disabled = true;
   fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: fn.value,
    email: fe.value,
    message: fm.value
  })
})
.then(res => res.json())
.then(data => {
  form.reset();
  btn.disabled = false;
  btxt.textContent = 'Send Message';
  ok.classList.add('show');
  setTimeout(() => ok.classList.remove('show'), 5000);
})
.catch(() => {
  btxt.textContent = 'Error';
  btn.disabled = false;
});


  });
}

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = document.getElementById('navbar').offsetHeight;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});
