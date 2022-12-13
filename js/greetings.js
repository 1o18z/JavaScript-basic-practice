const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 동작 막음 (=여기서는 submit하는 동작 막음)
    loginForm.classList.add(HIDDEN_CLASSNAME); //class="hidden"을 넣어줌
    const username = loginInput.value;
    localStorage.setItem("USERNAME", username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    greeting.innerText = `Hello ${savedUsername}`;
}


loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("USERNAME");
if (savedUsername === null) { //username 정보 없으면 form의 hiddne 클래스 지워줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}