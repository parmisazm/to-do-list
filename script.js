const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){ // if input box is empty you must write a message
    alert("You must write something")
  } else {
    let li = document.createElement("li"); // creating and storing an html element with tag name li in li variable
    li.innerHTML = inputBox.value; // adding the li to html
    listContainer.appendChild(li); // display the li under listContainer
    // add cross-line
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // clear the inputbox after a word is entered
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener("click", function(e){
   // first it will check where we have clicked, if we click on LI, it add the checked class
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  // clicked on Span, it will delete the parent element which is LI element and task will be deleted
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data",listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();