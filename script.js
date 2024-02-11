document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addTaskButton').addEventListener('click', addTask);
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field after adding task
}
