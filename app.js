function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
      const uncompletedTasks = document.getElementById('uncompletedTasks');
      const li = document.createElement('li');
      li.textContent = taskInput.value;
      li.onclick = function() {
        this.classList.toggle('completed');
        if (this.classList.contains('completed')) {
          document.getElementById('completedTasks').appendChild(this);
        } else {
          uncompletedTasks.appendChild(this);
        }
      };
      uncompletedTasks.appendChild(li);
      taskInput.value = ''; // Clear input after adding
    }
  }
  