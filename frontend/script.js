
function addTask() {
    let task = document.getElementById("taskInput").value;
    let date = document.getElementById("taskDate").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task + " - " + date +
    ' <button onclick="this.parentElement.remove()">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
}
