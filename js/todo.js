const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 시작할 때 toDos가 비어있어서 (1)
// 그래서 const를 let으로 바꿔서 업데이트 가능하게 바꿔줌 (3)

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

  function deleteToDo(event) {
    const li = event.target.parentElement; // 화면에서 li 삭제하기 전에 li를 얻음
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo의 id와 li의 id가 다른걸 남김 (같은게 삭제 버튼 눌린 거)
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //toDo들 입력했는데 자꾸 [object]라고 출력돼서 뒤에 .text 붙이니 입력값 제대로 출력됨
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //newTodo에 복사하는 거여서
    toDoInput.value = "";             // 여기서 toDoInput.value 비우도 newTodo에는 남아있읃ㅁ
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // 데이터베이스에도 입력받은 toDo들 저장하려는데 만약 a 두 개면 어떤 걸 선택해야하고 이런 거 모르니까 각각 다른 랜덤아이디도 같이 출력해서 구분
    
    };
    

    //toDos.push(newTodo); // newToDo 작성하고 form을 submit할 때마다 newToDo를 toDos array(빈array)에 그냥 push 하게 됨(2)
    // 즉 새로운 array들만 저장하고 이전의 toDo들을 안 가짐
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); // paintToDo에 string으로 된 text말고 newTodoObj 줌
    saveToDos();

}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { // localStorage에 toDo들이 있으면 (4) 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원함 (5)
    parsedToDos.forEach(paintToDo); // paintToDo({text:"a", id:121221}) 같음
       //forEach가 paintToDo를 parsedToDos 배열의 요소마다 실행
       // forEach는 paintToDo 기본적으로 실행함
       // forEach는 각각의 item을 줌. 이젠 item이 object가 되는거

} 


// function FilterPractice(){
    // FilterPractice는 반드시 true를 리턴해야 함. 새 array에도 1,2,3,4를 포함하고 싶으면.
    // false를 리턴하면 그 item은 새 array에 포함되지 않을 거임
// }
// [1, 2, 3, 4].filter(FilterPractice)
// FilterPractice(4)

// arr.filter(item => item > 2) //item 받을 건데 item>인 것만 출력
// const newArr = arr.filter(item => item > 2) // 따로 함수 쓸 필요 없이 이렇게도 가능

//paredToDos.forEach((item) => { console.log(item);}
// 위랑 아래 똑같은 말임
// paredToDos.forEach(hello(""));
// function hello (item){ console.log(item)};

