

const base_url = 'https://www.boredapi.com/api/activity/';
console.log(base_url);




fetch(base_url).then(response => response.json()).then(res => {
    console.log(res);
    console.log(res.activity);
    console.log(res.type);
    console.log(res.participants);
    document.getElementById("activity_text").innerHTML = res.activity;
    document.getElementById("type_text").innerHTML = res.type;
    document.getElementById("participants_text").innerHTML = res.participants;
});








