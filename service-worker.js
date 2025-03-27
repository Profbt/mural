self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('mural-cache').then((cache) => {
        return cache.addAll([
          '/',
          'https://sites.google.com/escola.pr.gov.br/muraldoprofessorvicenterijo',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png',
          '/manifest.json',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  