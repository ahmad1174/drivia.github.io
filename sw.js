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




