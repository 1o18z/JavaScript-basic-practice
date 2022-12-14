const API = "aba019b457a4e1ded01627deba9d45fa";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=&{API}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}'C`;
    });
    // json은 콘솔창에 네트워크의 미리보기 들어가면 나오는 정보들 말함
    //fetch는 promise임. promise : 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것

}
function onGeoError(){
    alert("No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// https://api.openweathermap.org/data/2.5/weather?lat=37.59871406153743&lon=127.15875367738732&appid=aba019b457a4e1ded01627deba9d45fa
// aba019b457a4e1ded01627deba9d45fa

//url 주소 맨 뒤에 &units=metric 하면 화씨온도에서 섭씨온도로 나옴
