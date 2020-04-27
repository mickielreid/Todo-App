import { Injectable, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class FinishService {

  @Output() Tofinish : EventEmitter<Todo> = new EventEmitter();

  finishTodos : Todo[] = [new Todo("brush teeth", false),new Todo("buy a plane", false)];

  constructor() { }


  getAll():Todo[]{
      return this.finishTodos;
  }
  

  addToFinish(todo : Todo){
    this.finishTodos.push(todo);
  }

  deleteFinish(index){
    this.finishTodos.splice(index, 1);
  }
}
