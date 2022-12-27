
const tab1 = document.getElementById("tab1");
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

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let dayy = today.getDate();


function goWeather(){
    let day = document.getElementById("todaydate");

    day.innerText = `${year}년 ${month}월 ${dayy}일`;
    weatherw.style.display="block";
    weathericonw.style.display="block";
    quotew.style.display = "none";
    todoListw.style.display = "none";
    greetingw.style.display = "none";
    loginFormw.style.display = "none";
    todoFormw.style.display = "none";
    todaydate.style.display="block";

}


tab1.addEventListener('click', goWeather);

