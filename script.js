document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== "") {
        addTaskToList(task);
        taskInput.value = '';
        taskInput.focus();
    }
});

function addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const taskText = document.createTextNode(task);
    listItem.appendChild(taskText);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
}