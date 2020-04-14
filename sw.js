self.addEventListener('install', event => {
  console.log("Installed",event);

  });

self.addEventListener('activate', event => {
  console.log("Activated",event);
  
  });

  self.addEventListener('fetch', function(event) {
    console.log("Fetch call",event);
   
   });