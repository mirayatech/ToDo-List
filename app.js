// Selectors
const headerInfo = document.querySelector(".header__info");
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

// Event
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkAndDelete);

// Fucntions
function addTodo(e) {
  e.preventDefault();

  // Create Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo__div");

  // Create Li
  const todoItem = document.createElement("li");
  todoItem.innerHTML = todoInput.value;
  todoItem.classList.add("todo__item");
  todoDiv.appendChild(todoItem);

  // Create Edit Button
  const checkButton = document.createElement("button");
  checkButton.classList.add("check__button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  todoDiv.appendChild(checkButton);

  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete__button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  todoDiv.appendChild(deleteButton);

  // Append to TodoList
  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

// Function - Edit Todo
function checkAndDelete(event) {
  const item = event.target;

  const checkButton = document.querySelector(".edit__button");

  //Delete Todo
  if (item.classList[0] === "delete__button") {
    const todo = item.parentElement;
    todo.remove();
  }

  // Check Todo
    //Check mark
    if(item.classList[0] === 'check__button'){
      const todo = item.parentElement;
      todo.classList.toggle('checked');
    }
}
