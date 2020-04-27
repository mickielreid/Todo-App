import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  todoList: Todo[] = [new Todo("make bed", false),new Todo("buy lambo", false) ];


  constructor() { }


  addItem(item:string){
    this.todoList.push(new Todo(item, false))
  }

  getAllList(): Todo[]{
    return this.todoList;
  }

  deleteTodo(index){
    this.todoList.splice(index, 1);
  }
  
}
