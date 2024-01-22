// Agregar tarea a la lista
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const newTaskText = taskInput.value.trim();

    if (newTaskText !== '') {
        const listItem = document.createElement("li");
        listItem.className = 'task';
        listItem.innerHTML = `<span>${newTaskText}</span><button onclick="deleteTask(this)">Delete</button><button class="done">Done Task</button>`;

        taskList.appendChild(listItem);
        taskInput.value = '';

        // Añadir evento 'click' al botón "Done Task" dentro de la nueva tarea
        const doneButton = listItem.querySelector(".done");
        doneButton.addEventListener("click", function() {
            doneTask(this);
        });
    }
}

// Eliminar tarea
function deleteTask(btn) {
    const task = btn.parentNode;
    task.parentNode.removeChild(task);
}

// Tareas hechas
function doneTask(btn) {
    const doneTaskList = document.getElementById('doneTask');
    const task = btn.parentNode;
    let now = new Date();
    
    // Crear un elemento span para mostrar la hora actual
    const dateElement = document.createElement("span");
    dateElement.textContent = ` - Completed at ${now.toLocaleTimeString()}`;

    // Agregar la hora actual al elemento doneTask

    // Eliminar botones del elemento 'doneTask' antes de agregarlo
    const buttons = task.querySelectorAll("button");
    buttons.forEach(button => {
        button.remove();
    });

    // Agregar la tarea al doneTaskList junto con la hora actual
    doneTaskList.appendChild(task);
    task.appendChild(dateElement);

}
