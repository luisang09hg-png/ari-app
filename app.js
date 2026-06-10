// app.js - Main Application Entry

document.addEventListener('DOMContentLoaded', () => {

  // ── Lucide Icons
  if (window.lucide) lucide.createIcons();

  // ── Header: Dark Mode & A11Y & Navigation
  document.getElementById('toggle-dark')?.addEventListener('click', () => store.toggleDarkMode());
  document.getElementById('toggle-a11y')?.addEventListener('click', () => store.toggleA11y());
  document.getElementById('btn-catalogo')?.addEventListener('click', () => router.navigate('/catalogo'));
  document.getElementById('btn-home')?.addEventListener('click', () => window.location.hash='#/');
  document.getElementById('cart-btn')?.addEventListener('click', () => router.navigate('/finalizar'));

  // ── Store subscription: update cart badge
  store.subscribe((state) => {
    // Cart counter
    const count  = state.carrito.reduce((s, i) => s + i.cantidad, 0);
    const badge  = document.getElementById('cart-count');
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('visible', count > 0);
    }
  });


  // ── Iniciar Router
  router.init();

  // ── Init Supabase Auth state
  if (typeof initAuth === 'function') initAuth();

  // ── Register Service Worker
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').catch(console.error);
  }
});
