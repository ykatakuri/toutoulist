import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toutoulist';
  todos : Todo[] = [];
  newTodo: string;

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

  completeTodo(id:number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  deleteTodo(id:number) {
    this.todos.splice(id, 1);
  }
}
