self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sw-energy-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/imagens/logo-sw-energy.png',
        '/imagens/logo-serena.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
