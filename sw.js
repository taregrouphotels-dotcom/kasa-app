// Yükleme (Ana ekrana ekle) için gereken en küçük service worker. Önbellek tutmaz.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
