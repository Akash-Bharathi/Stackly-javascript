
const inputField = document.querySelector("#taskInput");
const addButton = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


 // EVENT HANDLING - BUTTON CLICK
 
addButton.addEventListener("click", function () {

  // Get user input value
  const taskText = inputField.value;

  // Prevent adding empty tasks
  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }

   // DYNAMIC ELEMENT CREATION
 
  // Create a new <li> element
  const newTask = document.createElement("li");

  // Set innerText based on user input
  newTask.innerText = taskText;

  // Apply styling using style.property
  newTask.style.fontSize = "20px";
  newTask.style.color = "#b40808";

  // Add class using setAttribute()
  newTask.setAttribute("class", "task-item");


   // REMOVE TASK ON CLICK

  newTask.addEventListener("click", function () {
    // Remove the clicked task
    newTask.remove();
  });


   // APPEND TO ORDERED LIST
 
  taskList.append(newTask);


   // CLEAR INPUT FIELD
 
  inputField.value = "";
});



