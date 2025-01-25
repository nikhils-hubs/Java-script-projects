document.addEventListener('DOMContentLoaded', () => {
    const taskinput = document.getElementById("task-input");
    const addtaskbtn = document.getElementById("add-task-btn");
    const tasklist = document.getElementById("task-list");

    function addtask() {
        const tasktext = taskinput.value.trim();
        if (tasktext === '') {
            alert('Please Enter a task!');
            return;
        }

        const taskitem = document.createElement("li");
        const taskspan = document.createElement("span");
        const delbtn = document.createElement("button");
        const markbtn = document.createElement("button");

        taskspan.textContent = tasktext;
        delbtn.textContent = 'Delete';
        markbtn.textContent = 'DONE!';

        delbtn.classList.add('delete-btn');
        markbtn.classList.add('mark-btn');

        // Toggle "completed" class when the Mark button is clicked
        markbtn.addEventListener('click', () => {
            taskspan.classList.toggle('completed');
            if (taskspan.classList.contains('completed')) {
                markbtn.textContent = 'Undo';
            } else {
                markbtn.textContent = 'Completed';
            }
        });

        // Remove the task when the Delete button is clicked
        delbtn.addEventListener('click', () => {
            taskitem.remove();
        });

        taskitem.appendChild(taskspan);
        taskitem.appendChild(markbtn);
        taskitem.appendChild(delbtn);
        tasklist.appendChild(taskitem);

        taskinput.value = '';
    }

    addtaskbtn.addEventListener('click', addtask);

    taskinput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addtask();
        }
    });
});
