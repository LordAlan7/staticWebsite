/**
 * ============================================================
 *  MAIN.JS — Core site functionality
 * ============================================================
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Inject theme colors from config ── */
  const root = document.documentElement;
  if (CONFIG.theme) {
    root.style.setProperty('--primary', CONFIG.theme.primaryColor);
    root.style.setProperty('--primary-light', CONFIG.theme.primaryLight);
    root.style.setProperty('--primary-dark', CONFIG.theme.primaryDark);
    root.style.setProperty('--accent', CONFIG.theme.accentColor);
    root.style.setProperty('--gradient', `linear-gradient(135deg, ${CONFIG.theme.gradientStart}, ${CONFIG.theme.gradientEnd})`);
    root.style.setProperty('--gradient-hero', `linear-gradient(160deg, ${CONFIG.theme.gradientStart} 0%, ${CONFIG.theme.gradientEnd} 50%, ${CONFIG.theme.primaryDark} 100%)`);
  }

  /* ── Build navigation ── */
  buildNavigation();

  /* ── Build footer ── */
  buildFooter();

  /* ── Sticky Navbar ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  /* ── Mobile Menu Toggle ── */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  /* ── Scroll Reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* ── Back to Top ── */
  const backTop = document.querySelector('.back-to-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 600);
    });
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Cookie Banner ── */
  const cookieBanner = document.querySelector('.cookie-banner');
  if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => cookieBanner.classList.add('visible'), 2000);
    cookieBanner.querySelector('.cookie-accept')?.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.classList.remove('visible');
    });
    cookieBanner.querySelector('.cookie-reject')?.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'false');
      cookieBanner.classList.remove('visible');
    });
  }

  /* ── Lightbox ── */
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightbox.querySelector('img').src = img.src;
          lightbox.querySelector('img').alt = img.alt;
          lightbox.classList.add('active');
        }
      });
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('.lightbox-close')) {
        lightbox.classList.remove('active');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('active');
    });
  }

  /* ── Service Detail Toggle ── */
  document.querySelectorAll('.service-detail-card').forEach(card => {
    card.addEventListener('click', () => {
      const details = card.querySelector('.details');
      if (details) details.classList.toggle('open');
    });
  });

  /* ── Contact Form ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const msgEl = contactForm.querySelector('.form-message');
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      // Basic validation
      const email = contactForm.querySelector('[name="email"]');
      if (email && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        msgEl.className = 'form-message error';
        msgEl.textContent = 'Por favor ingresa un correo electrónico válido.';
        msgEl.style.display = 'block';
        return;
      }
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(`https://formspree.io/f/${CONFIG.contact.formspreeId}`, {
          method: 'POST', body: formData, headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          msgEl.className = 'form-message success';
          msgEl.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
          msgEl.style.display = 'block';
          contactForm.reset();
        } else {
          throw new Error('Error en el servidor');
        }
      } catch {
        msgEl.className = 'form-message error';
        msgEl.textContent = 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.';
        msgEl.style.display = 'block';
      }
      btn.textContent = originalText;
      btn.disabled = false;
    });
  }

  /* ── Populate dynamic content from CONFIG ── */
  populatePageContent();
});

/* ── Build Navigation ── */
function buildNavigation() {
  const navContainer = document.getElementById('main-nav');
  if (!navContainer) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const linksHTML = CONFIG.navigation.map(item =>
    `<a href="${item.href}" id="${item.id}" ${item.href === currentPage ? 'class="active"' : ''}>${item.label}</a>`
  ).join('');

  navContainer.innerHTML = `
    <div class="container">
      <a href="index.html" class="nav-logo" aria-label="${CONFIG.business.name}">
        <img src="assets/images/logoHowl.png" alt="${CONFIG.business.name} logo" class="nav-logo-img">
      </a>
      <nav class="nav-links" id="nav-links" aria-label="Navegación principal">
        ${linksHTML}
        <a href="contacto.html" class="nav-cta">Contáctanos</a>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>`;

  // Re-bind toggle after injection
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('active');
      toggle.setAttribute('aria-expanded', links.classList.contains('active'));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
    }));
  }
}

/* ── Build Footer ── */
function buildFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;

  const socialHTML = Object.entries(CONFIG.social)
    .filter(([, url]) => url)
    .map(([platform, url]) => {
      const icons = { facebook: 'f', instagram: '📷', tiktok: '♪', twitter: '𝕏', linkedin: 'in', youtube: '▶' };
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${platform}">${icons[platform] || platform[0]}</a>`;
    }).join('');

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo"><img src="assets/images/logoHowl.png" alt="${CONFIG.business.name} logo" class="footer-logo-img"></div>
          <p class="footer-desc">${CONFIG.business.description}</p>
          <div class="footer-social">${socialHTML}</div>
        </div>
        <div>
          <h4>Enlaces</h4>
          <ul class="footer-links">
            ${CONFIG.navigation.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul class="footer-links">
            ${CONFIG.services.slice(0, 4).map(s => `<li><a href="servicios.html">${s.title}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul class="footer-contact">
            <li><span class="icon-contact">📍</span><span>${CONFIG.contact.address}</span></li>
            <li><span class="icon-contact">📞</span><span>${CONFIG.contact.phone}</span></li>
            <li><span class="icon-contact">✉️</span><span>${CONFIG.contact.email}</span></li>
            <li><span class="icon-contact">🕐</span><span>${CONFIG.contact.hours}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${CONFIG.business.year} ${CONFIG.business.name}. Todos los derechos reservados.</p>
        <p>Diseñado con ❤️ para tu negocio</p>
      </div>
    </div>`;
}

/* ── Populate page‑specific content ── */
function populatePageContent() {
  // Stats
  const statsContainer = document.getElementById('stats-items');
  if (statsContainer) {
    statsContainer.innerHTML = CONFIG.stats.map((s, i) => `
      ${i > 0 ? '<div class="stats-divider"></div>' : ''}
      <div class="stat-item"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>
    `).join('');
  }

  // Services preview
  const servPrev = document.getElementById('services-preview-grid');
  if (servPrev) {
    servPrev.innerHTML = CONFIG.services.map((s, i) => `
      <div class="card service-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        ${s.price ? `<span class="price">${s.price}</span>` : ''}
      </div>
    `).join('');
  }

  // Why us
  const whyGrid = document.getElementById('why-grid');
  if (whyGrid) {
    whyGrid.innerHTML = CONFIG.whyUs.map((w, i) => `
      <div class="card why-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="icon">${w.icon}</div><h3>${w.title}</h3><p>${w.description}</p>
      </div>
    `).join('');
  }

  // Testimonials
  const testGrid = document.getElementById('testimonials-grid');
  if (testGrid) {
    testGrid.innerHTML = CONFIG.testimonials.map((t, i) => `
      <div class="testimonial-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.name[0]}</div>
          <div><div class="testimonial-name">${t.name}</div><div class="testimonial-role">${t.role}</div></div>
        </div>
      </div>
    `).join('');
  }

  // Gallery
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = CONFIG.gallery.map(g => `
      <div class="gallery-item reveal">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" onerror="this.style.background='var(--surface)'; this.alt='Imagen no disponible';">
      </div>
    `).join('');
  }

  // Services page
  const servPage = document.getElementById('services-page-grid');
  if (servPage) {
    servPage.innerHTML = CONFIG.services.map((s, i) => `
      <div class="card service-detail-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="card-header"><div class="icon">${s.icon}</div><div><h3>${s.title}</h3>${s.price ? `<span class="price">${s.price}</span>` : ''}</div></div>
        <p>${s.description}</p>
        <div class="details"><p>${s.details}</p></div>
      </div>
    `).join('');
    // Re-bind toggles
    document.querySelectorAll('.service-detail-card').forEach(card => {
      card.addEventListener('click', () => card.querySelector('.details')?.classList.toggle('open'));
    });
  }

  // About page
  const aboutText = document.getElementById('about-text');
  if (aboutText) {
    aboutText.innerHTML = `
      <h2 class="reveal">Nuestra <span class="text-gradient">Historia</span></h2>
      <p class="reveal">${CONFIG.about.history}</p>
      <p class="reveal"><strong>Misión:</strong> ${CONFIG.about.mission}</p>
      <p class="reveal"><strong>Visión:</strong> ${CONFIG.about.vision}</p>
      <div class="values-list reveal">${CONFIG.about.values.map(v => `<span>${v}</span>`).join('')}</div>`;
  }
  const teamGrid = document.getElementById('team-grid');
  if (teamGrid) {
    teamGrid.innerHTML = CONFIG.about.team.map((m, i) => `
      <div class="team-card reveal reveal-delay-${i + 1}">
        <div class="photo team-photo-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="30" r="18" fill="rgba(255,255,255,0.85)"/>
            <ellipse cx="40" cy="72" rx="28" ry="18" fill="rgba(255,255,255,0.85)"/>
          </svg>
        </div>
        <h3>${m.name}</h3><p>${m.role}</p>
      </div>
    `).join('');
  }

  // Re-observe new reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
}
