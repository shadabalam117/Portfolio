// js/script.js - mobile nav, smooth scroll, simple form helper
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');
    });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form fallback: if action not configured, open mailto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const action = contactForm.getAttribute('action') || '';
      if (!action || action.includes('your-form-endpoint')) {
        e.preventDefault();
        // Compose mailto with basic info
        const name = encodeURIComponent(contactForm.querySelector('[name="name"]').value || 'No name');
        const email = encodeURIComponent(contactForm.querySelector('[name="email"]').value || 'no-reply@example.com');
        const message = encodeURIComponent(contactForm.querySelector('[name="message"]').value || '');
        const subject = encodeURIComponent('Portfolio contact from ' + name);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:kirito@example.com?subject=${subject}&body=${body}`;
      }
    });
  }
});
