import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos : Todo[] = [];
  newTodo: string;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if(this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = "";
    } else {
      alert("Saisissez une tâche..");
    }
  }

  completeTodo(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted;
  }

  updateTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.newTodo = todo.name;
    this.todos.splice(index, 1);
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
