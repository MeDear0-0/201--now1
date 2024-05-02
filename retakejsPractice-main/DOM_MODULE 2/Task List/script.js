document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const deleteAllButton = document.getElementById('deleteAllButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    deleteAllButton.addEventListener('click', function () {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');

        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
});
