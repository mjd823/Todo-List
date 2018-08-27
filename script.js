var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function(todo) {
      if (todo.completed === true){
        completedTodos++;
      }
    });
    
    this.todos.forEach(function(todo){
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else{
        todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }  
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(todo, position){
      var todoP = document.createElement('p');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(X) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      todoP.id = position;
      todoP.textContent = todoTextWithCompletion;
      todoP.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoP);
    },this);
  },
  createDeleteButton : function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
    // get element that was clicked on
    var elementClicked = event.target;
    //Check if element clicked is a delete button
    if (elementClicked.className === 'deleteButton'){
      handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  },


  // createToggleButton : function(){
  //   var toggleButton = document.createElement('button');
  //   toggleButton.textContent = 'Toggle';
  //   toggleButton.className = 'toggleButton';
  //   return toggleButton;
// }
};

view.setUpEventListeners();

// debugging

function toggleButtonClicked (){
  handlers.toggleAll();
  if (todoList.todos.length=== 0 ){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    var empty = document.createElement('p');
    todosUl.appendChild(empty);
    empty.textContent = ('LIST IS EMPTY!!')
    alert('List is empty!');
  }

};







let leslie = 27;
var marquis = 28;






