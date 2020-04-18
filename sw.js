const BASE_CACHE_FILES = [
  '/drivia.github.io',
  '/drivia.github.io/index.html',
  '/drivia.github.io/style.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  //'https://code.jquery.com/jquery-3.3.1.slim.min.js',
  //'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
  //'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
  '/drivia.github.io/manifest.webmanifest',
  '/drivia.github.io/images/drivia.png',
  '/drivia.github.io/images/drivia-favicon.png',
  '/drivia.github.io/images/drivia-192.png',
  '/drivia.github.io/images/drivia-512.png',
  '/drivia.github.io/images/icons/icon-72x72.png',
  '/drivia.github.io/images/icons/icon-96x96.png',
  '/drivia.github.io/images/icons/icon-128x128.png',
  '/drivia.github.io/images/icons/icon-144x144.png',
  '/drivia.github.io/images/icons/icon-152x152.png',
  '/drivia.github.io/images/icons/icon-192x192.png',
  '/drivia.github.io/images/icons/icon-384x384.png',
  '/drivia.github.io/images/icons/icon-512x512.png',
  '/drivia.github.io/script.js'
];

const boredCache = 'static-cache-v1';

self.addEventListener('install', event => {
 console.log("Installed",event);
  event.waitUntil(
    caches.open(boredCache).then(function(cache) {
      return cache.addAll(BASE_CACHE_FILES);
    })
  );
  console.log("Static Content Cached!");
  });

self.addEventListener('activate', event => {
  console.log("Activated",event);
  
  });

  self.addEventListener('fetch', function(event) {
    console.log("Fetch call",event.request.url);
    event.respondWith(
      caches.open(boredCache).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
    
   });

