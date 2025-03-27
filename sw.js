// Apenas para habilitar instalação como PWA
self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('ponto-shell').then(cache => cache.add('/index.html'))
  );
});