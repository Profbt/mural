// Service Worker mínimo (não faz cache)
self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('ponto-shell-v1')
          .then(cache => cache.add('index.html'))
  );
});