/* ============================================================
   AFRA BOUZEHAR — PORTFOLIO JAVASCRIPT
   Features:
   - Hero typing animation
   - Scroll-triggered fade animations
   - Skill bar fill animation
   - Sticky navbar + scroll-to-top
   - Dark / Light mode toggle
   - Mobile navigation toggle
   - Contact form validation
   ============================================================ */

/* ─── 1. DOM READY ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMobileNav();
  initHeroReveal();
  initTypingEffect();
  initScrollAnimations();
  initSkillBars();
  initScrollToTop();
  initContactForm();
});

/* ─── 2. THEME (DARK / LIGHT MODE) ─────────────────────────── */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html   = document.documentElement;

  // Load saved preference or default to dark
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/* ─── 3. STICKY NAVBAR ──────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');

  // Add/remove 'scrolled' class for frosted glass effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Highlight active nav link based on scroll position
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ─── 4. MOBILE NAVIGATION ─────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Toggle menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ─── 5. HERO REVEAL ANIMATION ─────────────────────────────── */
function initHeroReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  // Stagger each element in as page loads
  revealEls.forEach(el => {
    el.classList.add('active');
  });
}

/* ─── 6. TYPING EFFECT ──────────────────────────────────────── */
function initTypingEffect() {
  const el       = document.getElementById('typedText');
  if (!el) return;

  // Phrases to cycle through
  const phrases  = [
    'Software Design & Development Student',
    'Aspiring Full-Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver & Code Lover',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let pauseTimer  = null;

  const TYPING_SPEED  = 65;   // ms per character when typing
  const DELETING_SPEED = 35;  // ms per character when deleting
  const PAUSE_END     = 2000; // pause after full phrase
  const PAUSE_START   = 400;  // pause before typing next phrase

  function type() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      // Add a character
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        // Reached end — pause, then start deleting
        isDeleting = true;
        pauseTimer = setTimeout(type, PAUSE_END);
        return;
      }
    } else {
      // Remove a character
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        // All deleted — move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        pauseTimer = setTimeout(type, PAUSE_START);
        return;
      }
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    setTimeout(type, speed);
  }

  // Small initial delay so hero animations settle first
  setTimeout(type, 1200);
}

/* ─── 7. SCROLL-TRIGGERED ANIMATIONS ───────────────────────── */
function initScrollAnimations() {
  const fadeEls = document.querySelectorAll('.fade-up');

  if (!fadeEls.length) return;

  // Use IntersectionObserver for performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing after animating (one-time)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,      // Trigger when 10% visible
    rootMargin: '0px 0px -40px 0px' // Slightly before bottom of viewport
  });

  fadeEls.forEach(el => observer.observe(el));
}

/* ─── 8. SKILL BAR ANIMATION ────────────────────────────────── */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');

  if (!fills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill    = entry.target;
        const percent = fill.getAttribute('data-fill');

        // Small delay for a staggered feel
        setTimeout(() => {
          fill.style.width = percent + '%';
        }, 200);

        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  fills.forEach(fill => observer.observe(fill));
}

/* ─── 9. SCROLL TO TOP BUTTON ───────────────────────────────── */
function initScrollToTop() {
  const btn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── 10. CONTACT FORM VALIDATION ───────────────────────────── */
function initContactForm() {
  const form         = document.getElementById('contactForm');
  if (!form) return;

  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError    = document.getElementById('nameError');
  const emailError   = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMsg   = document.getElementById('formSuccess');

  // ── Helper: show/clear error ──
  function setError(input, errorEl, message) {
    errorEl.textContent = message;
    if (message) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  }

  // ── Validate email format ──
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ── Live validation: clear error as user types ──
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length >= 2) setError(nameInput, nameError, '');
  });

  emailInput.addEventListener('input', () => {
    if (isValidEmail(emailInput.value.trim())) setError(emailInput, emailError, '');
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim().length >= 10) setError(messageInput, messageError, '');
  });

  // ── Form submit ──
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual submission (demo only)

    const name    = nameInput.value.trim();
    const email   = emailInput.value.trim();
    const message = messageInput.value.trim();
    let valid     = true;

    // Validate name
    if (name.length < 2) {
      setError(nameInput, nameError, 'Please enter your full name (at least 2 characters).');
      valid = false;
    } else {
      setError(nameInput, nameError, '');
    }

    // Validate email
    if (!email) {
      setError(emailInput, emailError, 'Email address is required.');
      valid = false;
    } else if (!isValidEmail(email)) {
      setError(emailInput, emailError, 'Please enter a valid email address.');
      valid = false;
    } else {
      setError(emailInput, emailError, '');
    }

    // Validate message
    if (message.length < 10) {
      setError(messageInput, messageError, 'Message must be at least 10 characters long.');
      valid = false;
    } else {
      setError(messageInput, messageError, '');
    }

    if (!valid) return;

    // ── All valid: simulate sending ──
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText   = submitBtn.querySelector('.btn-text');

    // Loading state
    btnText.textContent = 'Sending...';
    submitBtn.disabled  = true;

    // Simulate async (e.g., API call)
    setTimeout(() => {
      form.reset();
      submitBtn.disabled  = false;
      btnText.textContent = 'Send Message';

      // Show success message
      successMsg.classList.add('visible');

      // Auto-hide after 5s
      setTimeout(() => successMsg.classList.remove('visible'), 5000);
    }, 1200);
  });
}

/* ─── 11. SMOOTH ANCHOR SCROLLING ───────────────────────────── */
// Enhance all anchor links with smooth scroll + offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    const navHeight = document.getElementById('navbar').offsetHeight;
    const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
      top: targetPos,
      behavior: 'smooth'
    });
  });
});
