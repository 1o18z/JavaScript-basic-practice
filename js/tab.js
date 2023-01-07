
const tab1 = document.getElementById("tab1"),
    tab2 = document.getElementById("tab2"),
    tab3 = document.getElementById("tab3"),
    tab4 = document.getElementById("tab4"),
    img1 = document.getElementById("img1"),
    img2 = document.getElementById("img2"),
    img3 = document.getElementById("img3"),
    realborder = document.getElementById("realborder"),
    weatherw = document.getElementById("weather"),
    weathericonw = document.getElementById("weathericon"),
    clockw = document.getElementById("clock"),
    loginFormw = document.getElementById("login-form"),
    greetingw = document.getElementById("greeting"),
    todoFormw = document.getElementById("todo-form"),
    todoListw = document.getElementById("todo-list"),
    quotew = document.getElementById("quote"),
    todaydate = document.getElementById("todaydate"),
    mainimg = document.getElementById("mainimg"),
    my = document.getElementById("my"),
    myh2 = document.querySelector("#my h2");

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let dayy = today.getDate();


function goWeather() {
    let day = document.getElementById("todaydate");

    day.innerText = `${year}년 ${month}월 ${dayy}일`;
    realborder.style.display = "block";
    weatherw.style.display = "block";
    weathericonw.style.display = "block";
    todaydate.style.display = "block";
    todoListw.style.display = "none";
    greetingw.style.display = "none";
    loginFormw.style.display = "none";
    todoFormw.style.display = "none";
    mainimg.style.display = "none";
    my.style.display = "none";
    myh2.style.display = "none";

}

function goToDo() {
    weatherw.style.display = "none";
    weathericonw.style.display = "none";
    todaydate.style.display = "none";
    todoListw.style.display = "block";
    greetingw.style.display = "none";
    loginFormw.style.display = "none";
    todoFormw.style.display = "block";
    mainimg.style.display = "none";
    myh2.style.display = "none";
}

function goMe() {
    my.style.display = "block";
    myh2.style.display = "block";
    weatherw.style.display = "none";
    weathericonw.style.display = "none";
    todaydate.style.display = "none";
    todoListw.style.display = "none";
    greetingw.style.display = "none";
    loginFormw.style.display = "none";
    todoFormw.style.display = "none";
    mainimg.style.display = "none";
}

function goHome(){
    my.style.display = "none";
    myh2.style.display = "none";
    weatherw.style.display = "none";
    weathericonw.style.display = "none";
    greetingw.style.display = "block";
    loginFormw.style.display = "block";
    todoFormw.style.display = "none";
    todoListw.style.display = "none";
    mainimg.style.display = "block";
    todaydate.style.display="none";
}
tab1.addEventListener('click', goWeather);
tab2.addEventListener('click', goToDo);
tab3.addEventListener('click', goMe);
tab4.addEventListener('click', goHome);

img1.addEventListener('click', () => {
    window.location = 'https://github.com/1o18z';
});
img2.addEventListener('click', () => {
    window.location = 'https://www.instagram.com/1o18z/';
});
img3.addEventListener('click', () => {
    window.location = 'mailto:qkrdmswl2179@gmail.com';
});
