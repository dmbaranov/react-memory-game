importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js'
);

const CACHES = {
  ...workbox.core.cacheNames,
  js: 'memory-game-js-v1'
};

// workbox.core.setCacheNameDetails({
//   prefix: 'memory-game',
//   suffix: 'v6'
// });

// Probably not working...
workbox.precaching.precacheAndRoute([]);

/* custom cache rules*/

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keylist => {
      return Promise.all(
        keylist.map(cache => {
          if (!CACHES[cache]) {
            console.log('Cache to delete...', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// workbox.precaching.cleanupOutdatedCaches();
workbox.routing.registerNavigationRoute('/index.html', {
  blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
});

workbox.routing.registerRoute(
  /\.(?:js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHES.js,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);
