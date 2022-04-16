function fetchData(){
  fetch(base_url).then(response => response.json()).then(res => {
    //console.log(res);
      document.getElementById("activity_heading").style.visibility='visible';
  document.getElementById("type_heading").style.visibility='visible';
  document.getElementsByClassName("participants_text")[0].style.visibility='visible';
      document.getElementById("activity_text").innerHTML = res.activity;
      document.getElementById("type_text").innerHTML = res.type;
      document.getElementsByClassName("participants_text")[1].innerHTML = res.participants;
  });
  };


  const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/drivia.github.io/index.html",
        "/drivia.github.io/style.css",
        "/drivia.github.io/script.js",
        "/drivia.github.io/images/drivia-192.png",
        "/drivia.github.io/images/drivia-512.png",
        "/drivia.github.io/images/drivia-favicon.png",
        "/drivia.github.io/images/drivia.png",
        "/drivia.github.io/images/icons/icon-72x72.png",
        "/drivia.github.io/images/icons/icon-96x96.png",
        "/drivia.github.io/images/icons/icon-128x128.png",
        "/drivia.github.io/images/icons/icon-144x144.png",
        "/drivia.github.io/images/icons/icon-152x152.png",
        "/drivia.github.io/images/icons/icon-192x192.png",
        "/drivia.github.io/images/icons/icon-384x384.png",
        "/drivia.github.io/images/icons/icon-512x512.png"

      ])
    );
  });
  
  self.addEventListener('fetch', (event) => {
    console.log(event.request);
    event.respondWith(
      fetch(event.request)
      .catch(error => {
        console.log(error);
        return error;
      })
    );
  });
  

