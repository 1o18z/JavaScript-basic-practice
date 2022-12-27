const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.style.fontSize = "50px";
}

// setInterval(sayHello, 5000); // 함수이름, 시간. 5초마다 반복
// setTimeout(sayHello, 5000); //이런 5초 뒤에 시작

getClock();
setInterval(getClock, 1000);

// "1".paddStart(2, "0"); //1을 출력할건데 2글자로 출력할거고 만약 2글자가 아니면 앞에 0을 추가
