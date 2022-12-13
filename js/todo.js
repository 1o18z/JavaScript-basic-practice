const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
const DeleteList = document.getElementById("delete-list")

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleToDoSubit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //newTodo에 복사하는 거여서
    toDoInput.value = "";              // 여기서 toDoInput.value 비우도 newTodo에는 남아있읃ㅁ
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();

}
toDoForm.addEventListener("submit", handleToDoSubit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos.parseToDos;
    parseToDos.forEach(paintToDo);
       //forEach는 함수를 실행하게 해줌 (배열의 아이템에 대해 각각의 함수)
} 


//paredToDos.forEach((item) => { console.log(item);}
// 위랑 아래 똑같은 말임
// paredToDos.forEach(hello(""));
// function hello (item){ console.log(item)};