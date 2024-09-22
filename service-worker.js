self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('activities-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/style.css',
                '/script.js',
                's1.jpg',
                's1.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
