//PLANNING

// Problem: user interaction doesn't provide desire results
// Solution: add interactivity so the user can manage daily tasks


//PREPARATION (FIRST PASS)

//Add a new task
//Edit an existing task
//Delete an existing task
//Mark a task as complete 
//Mark a task as incomplete


//PREPARATION (DETAILED PASS)

//Add a new task
  //When button is pressed
  //Create a new list item with the text from the new task
    //Input checkbox
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended

//Edit an existing task
  //When edit button is pressed 
    //if the class of the parent is .editMode
    //Switch from .editMode
    //label text become the input's value
  //else
    //Switch to .editmode
    //input value becomes the label's text

  //toggle .editMode on the parent

//Delete an existing task
  //When delete button is pressed
    //Remove the parent list item from the Ul

//Mark a task as complete 
  //When the checkbox is checked
    //Append the list item to the #completed-tasks


//Mark a task as incomplete
  //When the checkboxis unchecked
    //Append the list item to the #incomplete-tasks


//PERFORM

var taskInput = document.getElementById("new-task");//#new-task
var addButton = document.getElementsByTagName("button")[0]; //first-button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");//<ul> with id #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");; //<ul> with id #completed-tasks

//New Task list item
var createNewTaskElement = function(taskString) {
  //Create list item  
  var listItem = document.createElement("li");//creates a new <li>
  //Input checkbox
  var checkBox = document.createElement("input");//checkbox
  //label
  var label = document.createElement("label");//label
  //input (text)
  var editInput = document.createElement("input");//input field
  //button.edit
  var editButton = document.createElement("button");//label
  //button.delete
  var deleteButton = document.createElement("button");//label
  
  //Each elements, needs modifying 
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  //Mozilla didn't implement innerText but has implemented textContent.
//  if (typeof editButton.innerText === "undefined")  {
//    editButton.textContent = "Edit";
//  } else {
//    editButton.innerText = "Edit";
//  }
  //end shim
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  //Mozilla didn't implement innerText but has implemented textContent.
//  if (typeof deleteButton.innerText === "undefined")  {
//    deleteButton.textContent = "Delete";
//  } else {
//    deleteButton.innerText = "Delete";
//  }
  //end shim
  label.innerText = taskString;
  
  //And each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
 
  return listItem;
}

//Add a new task
var addTask = function() {
  console.log("Add task...");
  
  if (taskInput.value === "") {
  
  } else {

  //Create a new list item with the text from the new task
  var listItem = createNewTaskElement(taskInput.value);
  
  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  
  //Clears out field after clicking add button
  taskInput.value = "";
  }
}

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  //selects <li> and assigns it to var listItem
  var listItem = this.parentNode;
  
  //selects <li> input field, assigns to var editInput 
  var editInput = listItem.querySelector("input[type=text]");
  
  //selects <li> label, assigns to var label
  var label = listItem.querySelector("label");
  
  //checks <li> to see if it contains class .editMode
  var containsClass = listItem.classList.contains("editMode");
  
  //if the class of the parent is .editMode
  if (containsClass) {
    //Switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
    this.innerText = "Edit";
  } else {
    //Switch to .editmode
    //input value becomes the label's text
    editInput.value = label.innerText;
    this.innerText = "Save";
  }
  
  //toggle .editMode on the list item
  listItem.classList.toggle("editMode");
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  
  //Remove the parent list item from the Ul
  var listItem = this.parentNode;//traversed (this = <button>) to (parentNode = <li>) 
  var ul = listItem.parentNode;//traversed <li> to <ul>
  ul.removeChild(listItem);//removed the child of <ul>, which is <li>
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  
  //this loads the list item (parent of the checkbox)
  var listItem = this.parentNode;
  
  //Append the list item to the #completed-tasks
  completedTasksHolder.appendChild(listItem);
  //When task is not completed, it is pushed back to incomplete list
  bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  
  //this loads the list item (parent of the checkbox)
  var listItem = this.parentNode;
  
  //Append the list item to the #completed-tasks
  incompleteTasksHolder.appendChild(listItem);
  //When task is not completed, it is pushed back to complete list
  bindTaskEvents(listItem, taskCompleted);
  
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler){
  console.log("Bind list item events");
  //select itaskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  // bind editTask to edit button
  editButton.onclick = editTask;
    
  //bind deleteTask to delete Button
  deleteButton.onclick = deleteTask;
  
  //bind checkboxEventHandler to checkbox
  checkBox.onchange = checkboxEventHandler;
  
}

var ajaxRequest = function() {
  console.log("AJAX request");
}


//Set the click handler to the addTask Function
addButton.addEventListener("click", addTask);

//Set the click handler to the AJAX request
addButton.addEventListener("click", ajaxRequest);


//cycle over the incompleTaskHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++){
  //bind events to list items children(taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
  
  
//cycle over the completedTasksHolder
for(var i = 0; i < completedTasksHolder.children.length; i++){
    //bind events to list items children(taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}









