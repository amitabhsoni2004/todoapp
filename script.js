let tasks = document.getElementById("tasks");
let task = document.getElementById("task");
let addbtn = document.getElementById("addbtn");
let textadd = document.getElementById("textadd");
let svg = document.getElementById("svg");
function printtask() {
    let text = task.value;
    if (text.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    let taskContainer = document.createElement("div");
    taskContainer.className = "taskContainer";
    let newTask = document.createElement("div");
    let newSvg = svg.cloneNode(true);
    newTask.textContent = text;
    newTask.className = "taskstyle";
    newSvg.style.display = "block";
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(newSvg);
    textadd.appendChild(taskContainer);
    task.value = "";

    newSvg.addEventListener("click",()=>{
        taskContainer.remove();
       
    });
}

addbtn.addEventListener("click", (event) => {
    event.preventDefault();
    printtask();
});
