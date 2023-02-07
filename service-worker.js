var cacheName = 'petstore-v1';
var cacheFiles = [
    'checkout.html',
    'products.js',
    'pestore.webmanifest',
    'images',
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});