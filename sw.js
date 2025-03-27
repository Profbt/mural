// Cache simples da página shell
const CACHE_NAME = 'ponto-shell-v1';
const SHELL_URLS = ['/index.html'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(SHELL_URLS))
});

// Intercepta todas as navegações
self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        // Redireciona para o site oficial SEM alterar a URL
        event.respondWith(Response.redirect(
            'https://www.registropontoseed.pr.gov.br', 
            307 // Status de redirecionamento temporário
        ));
    }
});