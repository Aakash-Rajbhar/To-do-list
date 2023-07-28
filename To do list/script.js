const inputText = document.getElementById("input-text");
const TaskListcontainer = document.getElementById("list-container");

function AddTaskBtn() {
  if (inputText.value === ""){
    alert("Please enter a task name");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    TaskListcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputText.value = "";
  saveData();
}

TaskListcontainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }

},false);

function saveData(){
    localStorage.setItem("data",TaskListcontainer.innerHTML);
}

function showTask(){
    TaskListcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
