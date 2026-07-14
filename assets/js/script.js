// === Mobile navigation ===
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// === Back to top button ===
const backTop = document.querySelector('.back-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('show', window.scrollY > 400);
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// === Category filter (Ekosistem / Berita) ===
function initFilter(filterSelector, itemSelector) {
  const buttons = document.querySelectorAll(filterSelector);
  const items = document.querySelectorAll(itemSelector);
  if (!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.category === cat) ? '' : 'none';
      });
    });
  });
}
initFilter('.filter-brand', '.brand-item');
initFilter('.filter-berita', '.berita-item');

// === WhatsApp contact form -> opens WhatsApp with prefilled message ===
const waForm = document.getElementById('wa-form');
if (waForm) {
  waForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('wa-nama').value.trim();
    const pesan = document.getElementById('wa-pesan').value.trim();
    const nomor = '6281234567890'; // TODO: ganti dengan nomor WhatsApp resmi PT KAR
    const text = encodeURIComponent(`Halo PT KAR, saya ${nama}. ${pesan}`);
    window.open(`https://wa.me/${nomor}?text=${text}`, '_blank');
  });
}

// === Simple animated counters for stats ===
function animateCounters() {
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current.toLocaleString('id-ID') + (el.dataset.suffix || '');
    }, 20);
  });
}
if ('IntersectionObserver' in window) {
  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { animateCounters(); obs.disconnect(); }
      });
    }, { threshold: 0.3 });
    obs.observe(statsSection);
  }
}
