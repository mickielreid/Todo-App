import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item/new-item.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { FinishComponent } from './finish/finish.component';
import { FinishItemComponent } from './finish/finish-item/finish-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    TodosComponent,
    TodoItemComponent,
    FinishComponent,
    FinishItemComponent
  ],
  imports: [
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
