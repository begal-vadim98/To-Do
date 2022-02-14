const functionTodo = function () {
  const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

  let toDoData = [];

  const render = function () {

    todoList.innerHTML = "";
    todoCompleted.innerHTML = "";
    headerInput.value = "";

    toDoData.forEach((element, index, array) => {
      const li = document.createElement('li');
      li.classList.add('todo-item');

      li.innerHTML = `	<span class="text-todo">${element.text}</span>
      <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
      </div> `;

      if (!element.completed) todoList.append(li);

      else todoCompleted.append(li)

      li.querySelector('.todo-complete').addEventListener('click', function () {
        element.completed = !element.completed;
        render();
      });

      li.querySelector('.todo-remove').addEventListener('click', function () {
        array.splice(index, 1);
       
        render();
      });
   
    });
    localStorage.setItem('todo', JSON.stringify(toDoData));

    
  }
  todoControl.addEventListener('submit', function (event) {
    event.preventDefault();

    if (headerInput.value.trim()) {

      const newToDo = {
        text: headerInput.value,
        completed: false
      };
      // toDoData = JSON.parse(toDoData);
      toDoData.push(newToDo);
      render();
      
    }

  });

  toDoData = JSON.parse(localStorage.todo);
  if(toDoData.length !== 0)   render();
  
}
functionTodo();