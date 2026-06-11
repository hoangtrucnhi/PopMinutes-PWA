const CACHE_NAME = 'popminutes-v1';
const urlsToCache = [
  '/',
  'https://script.google.com/macros/s/AKfycbxQ8HeKwVuV4g1yMDFgAkkStAOW2nuN0VwSk2WJiZ75FcXGXvlayQmHeH8O0Bq2ZH42/exec'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
