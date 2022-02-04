

document.getElementById("activity_heading").style.visibility='hidden';
document.getElementById("type_heading").style.visibility='hidden';
document.getElementsByClassName("participants_text")[0].style.visibility='hidden';
const base_url = 'https://www.boredapi.com/api/activity/';
console.log(base_url);

const offline_response = [];

for (let i=0; i<1; i++){
console.log('runing');
  fetch(base_url).then(resi => resi.json).then(resp => {
    console.log(resp);
   offline_response.push(resp);
    console.log(offline_response[i]);
  })
  }

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };
function fetchData(){
fetch(base_url).then(response => response.json()).then(res => {
  console.log(res);
    document.getElementById("activity_heading").style.visibility='visible';
document.getElementById("type_heading").style.visibility='visible';
document.getElementsByClassName("participants_text")[0].style.visibility='visible';
    document.getElementById("activity_text").innerHTML = res.activity;
    document.getElementById("type_text").innerHTML = res.type;
    document.getElementsByClassName("participants_text")[1].innerHTML = res.participants;
});
};

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/drivia.github.io/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  };
  window.addEventListener('beforepromptinstall', e =>{

    console.log("Prompt event called!",e);
    
    });



