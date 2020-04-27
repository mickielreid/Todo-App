import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  allTodo: Todo[] = [];

  constructor(private TService: ServiceService) { }

  ngOnInit(): void {
    this.allTodo = this.TService.getAllList();
  }


  



}
