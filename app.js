// Selectors
const headerInfo = document.querySelector(".header__info");
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

// Event
todoButton.addEventListener("click", addTodo);

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
  const editButton = document.createElement("button");
  editButton.classList.add("edit__button");
  editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  todoDiv.appendChild(editButton);

  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete__button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  todoDiv.appendChild(deleteButton);

  // Append to TodoList
  todoList.appendChild(todoDiv);

  todoInput.value = '';
}
