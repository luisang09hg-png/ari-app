// router.js - Simple Hash Router

const router = {
  routes: {
    '/': Screens.welcome,
    '/cuestionario': Screens.questionnaire,
    '/escaneo': Screens.scanner,
    '/procesando': Screens.processing,
    '/resultados': Screens.results,
    '/finalizar': Screens.checkout,
    '/gracias': Screens.thanks,
    '/login': Screens.auth,
    '/perfil': Screens.profile
  },

  navigate(path) {
    window.location.hash = '#' + path;
  },

  parseUrl() {
    const hash = window.location.hash.slice(1) || '/';
    // Match dynamic routes like /producto/:id
    const parts = hash.split('/');
    if (parts.length === 3 && parts[1] === 'producto') {
      return { route: Screens.productDetail, params: { id: parts[2] } };
    }
    return { route: this.routes[hash] || this.routes['/'], params: {} };
  },

  currentRoute: null,

  handleHashChange() {
    const root = document.getElementById('app-root');
    const { route, params } = this.parseUrl();
    
    // Call destroy on previous route if it exists
    if (this.currentRoute && typeof this.currentRoute.destroy === 'function') {
      try { this.currentRoute.destroy(); } catch (e) { console.error('Error destroying route:', e); }
    }
    this.currentRoute = route;

    // Unmount previous if needed, then render new
    root.innerHTML = route.render(params);
    window.scrollTo(0, 0);
    
    // Init controllers for the new view
    if (route.init) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => route.init(params), 0);
    }
  },

  init() {
    window.addEventListener('hashchange', () => this.handleHashChange());
    // Initial load
    this.handleHashChange();
  }
};
