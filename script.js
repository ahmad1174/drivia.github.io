
// ahmad1174.github.io/drivia.github.io/
document.getElementById("activity_heading").style.visibility='hidden';
document.getElementById("type_heading").style.visibility='hidden';
document.getElementsByClassName("participants_text")[0].style.visibility='hidden';
const base_url = 'https://www.boredapi.com/api/activity/';
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          'sw.js',
        );
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
  
  registerServiceWorker();
  

