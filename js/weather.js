function onGeoOk(position) {
    const API_KEY = "aba019b457a4e1ded01627deba9d45fa";
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        // const city = document.querySelector("#weather span:last-child");
            // city.innerT = data.name;
            // let koweather = data.cod;
            changeKorean(data.cod);
            console.log(data.cod);


       

    // json은 콘솔창에 네트워크의 미리보기 들어가면 나오는 정보들 말함
    //fetch는 promise임. promise : 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것



    function changeKorean(w_id) {
        var w_id_arr = [201, 200, 202, 210, 211, 212, 221, 230, 231, 232,
            300, 301, 302, 310, 311, 312, 313, 314, 321, 500,
            501, 502, 503, 504, 511, 520, 521, 522, 531, 600,
            601, 602, 611, 612, 615, 616, 620, 621, 622, 701,
            711, 721, 731, 741, 751, 761, 762, 771, 781, 800,
            801, 802, 803, 804, 900, 901, 902, 903, 904, 905,
            906, 951, 952, 953, 954, 955, 956, 957, 958, 959,
            960, 961, 962];
        var w_kor_arr = ["가벼운 비를 동반한 천둥구름", "비를 동반한 천둥구름", "폭우를 동반한 천둥구름", "약한 천둥구름",
            "천둥구름", "강한 천둥구름", "불규칙적 천둥구름", "약한 연무를 동반한 천둥구름", "연무를 동반한 천둥구름",
            "강한 안개비를 동반한 천둥구름", "가벼운 안개비", "안개비", "강한 안개비", "가벼운 적은비", "적은비",
            "강한 적은비", "소나기와 안개비", "강한 소나기와 안개비", "소나기", "악한 비", "중간 비", "강한 비",
            "매우 강한 비", "극심한 비", "우박", "약한 소나기 비", "소나기 비", "강한 소나기 비", "불규칙적 소나기 비",
            "가벼운 눈", "눈", "강한 눈", "진눈깨비", "소나기 진눈깨비", "약한 비와 눈", "비와 눈", "약한 소나기 눈",
            "소나기 눈", "강한 소나기 눈", "박무", "연기", "연무", "모래 먼지", "안개", "모래", "먼지", "화산재", "돌풍",
            "토네이도", "구름 한 점 없는 맑은 하늘", "약간의 구름이 낀 하늘", "드문드문 구름이 낀 하늘", "구름이 거의 없는 하늘",
            "구름으로 뒤덮인 흐린 하늘", "토네이도", "태풍", "허리케인", "한랭", "고온", "바람부는", "우박", "바람이 거의 없는",
            "약한 바람", "부드러운 바람", "중간 세기 바람", "신선한 바람", "센 바람", "돌풍에 가까운 센 바람", "돌풍",
            "심각한 돌풍", "폭풍", "강한 폭풍", "허리케인"];
        var w_icon_arr = ["⛈", "⛈", "☔️⛈", "🌩",
            "🌩", "🌩", "🌩", "🌫🌩", "🌫🌩",
            "🌫⛈", "🌫💧", "🌫☔️", "🌫☔️", "💧", "💧",
            "💦", "🌫🌧", "🌫☔️", "🌧", "💧", "💦", "☔️",
            "☔️", "☔️", "☔️❄️", "💧", "💦", "☔️", "🌧",
            "🌨", "❄️", "❄️", "🌨", "☔️🌨", "💧❄️", "☔️❄️", "💧❄️",
            "💧❄️", "☔️❄️", "🌫", "🌫", "🌫", "💨", "🌫", "💨", "💨", "💥", "💨",
            "🌪", "☀️", "🌤", "🌤", "🌤",
            "☁️", "🌪", "🌪", "🌪", "🌪", "🔥", "🌬", "🌨", "☁️",
            "🌬", "🌬", "🌬", "🌬", "💨", "💨", "🌪",
            "🌪", "🌪", "🌪", "🌪"];
        for (var i = 0; i < w_id_arr.length; i++) {
            if (w_id_arr[i] == w_id) {
                console.log(w_kor_arr[i]);
                console.log(w_icon_arr[i]);
                weathericon.innerText= w_icon_arr[i];
                weather.innerText = `${data.weather[0].main} \n ${data.main.temp}°C \n ${w_kor_arr[i]}`;
            
            }
            
            
        }
        
    }
   
});
}

function onGeoError() {
    alert("날씨 정보를 가져오지 못했어요🤔");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// https://api.openweathermap.org/data/2.5/weather?lat=37.59871406153743&lon=127.15875367738732&appid=aba019b457a4e1ded01627deba9d45fa
// aba019b457a4e1ded01627deba9d45fa
// 133ebf3046058ae065badc77059977c
// https://api.openweathermap.org/data/2.5/weather?lat=37.59871406153743&lon=127.15875367738732&appid=133ebf3046058ae065badc77059977cf

