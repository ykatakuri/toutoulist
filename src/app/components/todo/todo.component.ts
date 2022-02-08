import { Component, Input, OnInit, Output } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todos } from '../../models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todos;
  @Input() index: number;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  onComplete(): void {
    this.todosService.completeTodoById(this.todo.id);
  }

  onEdit(): void {
  }

  onDelete(): void {
    this.todosService.deleteTodoById(this.todo.id);
  }
}
