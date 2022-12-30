
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const realborder = document.getElementById("realborder");
const weatherw = document.getElementById("weather");
const weathericonw = document.getElementById("weathericon");
const clockw = document.getElementById("clock");
const loginFormw = document.getElementById("login-form");
const greetingw = document.getElementById("greeting");
const todoFormw = document.getElementById("todo-form");
const todoListw = document.getElementById("todo-list");
const quotew = document.getElementById("quote");
const todaydate = document.getElementById("todaydate");
const mainimg = document.getElementById("mainimg");
const my = document.getElementById("my");
const myh2 = document.querySelector("#my h2");

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let dayy = today.getDate();


function goWeather(){
    let day = document.getElementById("todaydate");

    day.innerText = `${year}년 ${month}월 ${dayy}일`;
    realborder.style.display="block";
    weatherw.style.display="block";
    weathericonw.style.display="block";
    todaydate.style.display="block";
    quotew.style.display = "none";
    todoListw.style.display = "none";
    greetingw.style.display = "none";
    loginFormw.style.display = "none";
    todoFormw.style.display = "none";
    mainimg.style.display="none";
    my.style.display="none";
    myh2.style.display="none";

}

function goToDo(){
    weatherw.style.display="none";
    weathericonw.style.display="none";
    todaydate.style.display="none";
    quotew.style.display = "none";
    todoListw.style.display = "block";
    greetingw.style.display = "none";
    loginFormw.style.display = "none";
    todoFormw.style.display = "block";
    mainimg.style.display="none";
    myh2.style.display="none";
}

function goMe(){
    my.style.display="block";
    myh2.style.display="block";
    weatherw.style.display="none";
    weathericonw.style.display="none";
    todaydate.style.display="none";
    quotew.style.display = "none";
    todoListw.style.display = "none";
    greetingw.style.display = "none";
    loginFormw.style.display = "none";
    todoFormw.style.display = "none";
    mainimg.style.display="none";
}

tab1.addEventListener('click', goWeather);
tab2.addEventListener('click', goToDo);
tab3.addEventListener('click', goMe);

img1.addEventListener('click', ()=>{
    window.location = 'https://github.com/1o18z';
});
img2.addEventListener('click', ()=> {
    window.location = 'https://www.instagram.com/1o18z/';
});
img3.addEventListener('click', ()=> {
    window.location = 'mailto:qkrdmswl2179@gmail.com';
});
