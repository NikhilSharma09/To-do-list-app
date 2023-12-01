document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    window.addTask = addTask; // Expose addTask to global scope for button click

    window.removeTask = function(button) {
        const li = button.parentElement;
        taskList.removeChild(li);
    };
});
