angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'Study AngularJS', done:true},
      {text:'build an AngularJS app', done:true},
	  {text:'Decorate w/ CSS', done:true},
	  {text:'Turn in puff assignment 5', done:true},
	  {text:'Start puff assignment 6', done:false},
	  {text:'FINAL EXAM!!', done:false},];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
	
	todoList.clearComplete = function() {
		todoList.todos = _.filter(todoList.todos, function(todo){
			return !todo.done;
		});
	};
  });