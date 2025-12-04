// Service Worker for {{PRODUCT_NAME}}
// Strategy: Stale-While-Revalidate (instant load, background update)

const CACHE_NAME = '{{PRODUCT_SLUG}}-v1';
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/images/product/product-01-800.avif',
  '/images/product/product-01-800.webp',
  '/fonts/cormorant-garamond-700.woff2',
  '/fonts/montserrat-600.woff2',
  '/fonts/montserrat-400.woff2'
];

// Install: Cache critical assets immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching critical assets');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch: Stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.match(event.request)
          .then(cachedResponse => {
            // Fetch fresh copy in background
            const fetchPromise = fetch(event.request)
              .then(networkResponse => {
                // Update cache with fresh copy
                if (networkResponse && networkResponse.status === 200) {
                  cache.put(event.request, networkResponse.clone());
                }
                return networkResponse;
              })
              .catch(err => {
                console.log('[SW] Fetch failed; returning cached:', event.request.url);
                return cachedResponse;
              });

            // Return cached immediately if available, otherwise wait for network
            return cachedResponse || fetchPromise;
          });
      })
  );
});

// Handle service worker updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
