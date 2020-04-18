const BASE_CACHE_FILES = [
  '/',
  'index.html',
  'style.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://code.jquery.com/jquery-3.3.1.slim.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
  '/manifest.webmanifest',
  '/images/drivia.png',
  '/images/drivia-favicon.png',
  '/images/drivia-192.png',
  '/images/drivia-512.png',
  '/images/icons/icon-72x72.png',
  '/images/icons/icon-96x96.png',
  '/images/icons/icon-128x128.png',
  '/images/icons/icon-144x144.png',
  '/images/icons/icon-152x152.png',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-384x384.png',
  '/images/icons/icon-512x512.png',
  'script.js'
];

const boredCache = 'static-cache-v1';

self.addEventListener('install', event => {
 console.log("Installed",event);
  event.waitUntil(
    caches.open(boredCache).then(function(cache) {
      return cache.addAll(BASE_CACHE_FILES);
    })
  );
  });


self.addEventListener('activate', event => {
  console.log("Activated",event);
  
  });

  self.addEventListener('fetch', function(event) {
    console.log("Fetch call",event);
   
   });

