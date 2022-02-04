import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HtmltopdfComponent } from './components/htmltopdf/htmltopdf.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HtmltopdfComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
