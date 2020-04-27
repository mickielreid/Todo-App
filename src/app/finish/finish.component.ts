import { Component, OnInit } from '@angular/core';
import { FinishService } from '../services/finish.service';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  finish : Todo[] = [];


  constructor(private finshService: FinishService) { }

  ngOnInit(): void {

   this.finish =  this.finshService.getAll();
   console.log("array " +this.finish)
  }

}
