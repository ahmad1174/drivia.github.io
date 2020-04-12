self.addEventListener('install', event => {

    function onInstall () {
      return caches.open('static')
        .then(cache => cache.addAll([
          '/images/drivia-192.png',
          '/images/drivia-512.png',
          '/images/drivia.png',
          '/images/drivia-favicon.png',
          '/script.js',
          '/styles.css',
          '/index.html',
          '/'
        ])
      );
    }
  
    event.waitUntil(onInstall(event));
  });

  self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });