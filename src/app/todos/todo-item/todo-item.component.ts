import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { ServiceService } from 'src/app/services/service.service';
import { FinishService } from 'src/app/services/finish.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


 
  
  @Input() todo:Todo;
  @Input('counter') counter:any;

  constructor(private tSErvice: ServiceService, private finishService: FinishService) { }

  ngOnInit(): void {
  }


  onClickMe(event){

    event.preventDefault();
    // console.log("hello");
     this.finishService.addToFinish(this.todo);
     this.tSErvice.deleteTodo(this.counter);
  
  }



}
