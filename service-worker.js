const CACHE_NAME = 'ari-v3-cache';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/data.js',
  '/engine.js',
  '/store.js',
  '/screens.js',
  '/router.js',
  '/app.js',
  '/supabaseClient.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Solo interceptar peticiones GET
  if (event.request.method !== 'GET') return;

  // Ignorar peticiones a Supabase o Anthropic
  if (event.request.url.includes('supabase.co') || event.request.url.includes('api.anthropic.com')) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Estrategia Stale-While-Revalidate para HTML/JS/CSS, Cache-first para imágenes
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        });

        // Si es una imagen local, priorizamos la caché
        if (event.request.url.includes('assets/products/')) {
          return cachedResponse || fetchPromise;
        }

        // Para el resto (código), retornamos red si está disponible (pero con caché como fallback rápido)
        return cachedResponse ? (fetchPromise.catch(() => cachedResponse)) : fetchPromise;
      })
  );
});
