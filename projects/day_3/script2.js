function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');
            const taskText = taskInput.value;

            if (taskText) {
                const li = document.createElement('li');
                li.textContent = taskText;
                taskList.appendChild(li);

                taskInput.value = '';
                li.addEventListener('click', () => {
                    taskList.removeChild(li);
                });
            }
        }
