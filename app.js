const headerInfo = document.querySelector(".header__info");
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkAndDelete);

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function addTodo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo__div");

  const todoItem = document.createElement("li");
  todoItem.innerHTML = todoInput.value;
  todoItem.classList.add("todo__item");
  todoDiv.appendChild(todoItem);

  const checkButton = document.createElement("button");
  checkButton.classList.add("check__button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  todoDiv.appendChild(checkButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete__button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function checkAndDelete(event) {
  const item = event.target;

  const checkButton = document.querySelector(".edit__button");

  if (item.classList[0] === "delete__button") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "check__button") {
    const todo = item.parentElement;
    todo.classList.toggle("checked");
  }
}
