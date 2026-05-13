  function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.background = window.scrollY > 50
      ? 'rgba(13,27,42,0.98)' : 'rgba(13,27,42,0.85)';
  });

  function handleSubmit(btn) {
    btn.textContent = 'Message Sent! ✓';
    btn.style.background = '#1D9E75';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
    }, 3000);
  }
