const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "aba019b457a4e1ded01627deba9d45fa";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // city.innerText = data.name;
            weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C / ${data.sys.country}`;
        });
        
    // json은 콘솔창에 네트워크의 미리보기 들어가면 나오는 정보들 말함
    //fetch는 promise임. promise : 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것

}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// https://api.openweathermap.org/data/2.5/weather?lat=37.59871406153743&lon=127.15875367738732&appid=aba019b457a4e1ded01627deba9d45fa
// aba019b457a4e1ded01627deba9d45fa

