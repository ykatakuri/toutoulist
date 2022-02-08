import { Component, Input, OnInit, Output } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todos } from '../../models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todos[];
  index: number;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }
}
