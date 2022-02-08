import { Injectable } from '@angular/core';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todo: string;

  todos: Todos[] = [
    {
      id: new Date(),
      title: "Aller chercher le toutou chez le véto",
      isCompleted: false 
    },
    {
      id: new Date(),
      title: "Aller promener le toutou",
      isCompleted: false 
    },
    {
      id: new Date(),
      title: "Braiser le toutou sur un barbecue",
      isCompleted: false 
    },
  ];

  getAllTodos(): Todos[] {
    return this.todos;
  }

  getTodoById(todoId: Date): Todos {
    const todo = this.todos.find(todo => todo.id === todoId);

    if (!todo) {
      throw new Error('Todo not found!');
    } else {
      return todo;
    }
  }

  completeTodoById(todoId: Date): void {
    const todo = this.getTodoById(todoId);

    todo.isCompleted = !todo.isCompleted;
  }

  updateTodo(): void {

  }

  deleteTodoById(todoId: Date) {
    const todo = this.getTodoById(todoId);
    const index = this.todos.indexOf(todo);
    
    this.todos.splice(index, 1);
  }
}
