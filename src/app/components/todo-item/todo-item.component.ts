import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() index: number;

  @Output() state = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  completeTodo(): void {
    this.state.emit();
  }

  updateTodo(): void {
    this.update.emit();
  }

  deleteTodo(): void {
    this.delete.emit();
  }
}
