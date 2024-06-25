document.getElementById("todo-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the input values
    // for task
    const input = document.getElementById("todo-input");
    const newTask = input.value.trim();
    // for task name
    const todoName = document.getElementById("todo-name");
    const newTaskName = todoName.value.trim();

    if (newTask && newTaskName) {
        // Create a new list item
        const li = document.createElement("li");
        li.innerHTML = `<h4>${newTaskName}</h4> ${newTask}`;

        // Create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(deleteBtn);

        // Append the new task to the list
        document.getElementById("todo-list").appendChild(li);

        // Clear the input fields
        input.value = "";
        todoName.value = "";
    }
});
