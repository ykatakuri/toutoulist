import { Component, OnInit, Input } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  buttonText!: string;
  newTodo: string;
  todo: Todos;

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
    this.buttonText = "Ajouter";
  }

  onAddTodo() {
    if(this.newTodo) {
      let todo = new Todos();
      todo.id = new Date();
      todo.title = this.newTodo;
      todo.isCompleted = false;
      this.todosService.todos.push(todo);
      this.newTodo = "";
    } else {
      alert("Saisissez une todo!");
    }
  }
}
