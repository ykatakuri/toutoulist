import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

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

  completeTodo(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }

  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.newTodo = todo.name;
    this.todos.splice(index, 1);
  }
}
