// 1. init() :: Add an event listener to the "addButton" button to call the "addTask" function when clicked.
function init() {
    // Get the addButton element by its id
    let addButton = document.getElementById("addButton");
    // Add a click event listener to the addButton element
    addButton.addEventListener("click", addTask);
  }
  
  // 2. addTask() ::
  function addTask() {
    // 2.1 Create a <li> tag and set its textContent to the value from the <input type="text" id="todoInput" placeholder="Enter a new task"> field.
    // Get the todoInput element by its id
    let todoInput = document.getElementById("todoInput");
    // Get the value of the todoInput element
    let todoValue = todoInput.value;
    // Check if the todoValue is not empty
    if (todoValue) {
      // Create a new <li> element
      let newTodo = document.createElement("li");
      // Set the textContent of the newTodo element to the todoValue
      newTodo.textContent = todoValue;
      // 2.2 Add a <li> tag to the <ul id="todoList"></ul>
      // Get the todoList element by its id
      let todoList = document.getElementById("todoList");
      // Append the newTodo element to the todoList element
      todoList.appendChild(newTodo);
      // 2.3 After adding the item, clear the <input type="text" id="todoInput" placeholder="Enter a new task"> field to prepare for the next task.
      // Clear the value of the todoInput element
      todoInput.value = "";
    }
  }
  
  // Call the init function to start the app
  init();
  