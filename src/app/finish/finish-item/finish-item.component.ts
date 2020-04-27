import { Component, OnInit, Input } from '@angular/core';
import { FinishService } from 'src/app/services/finish.service';

@Component({
  selector: 'app-finish-item',
  templateUrl: './finish-item.component.html',
  styleUrls: ['./finish-item.component.css']
})
export class FinishItemComponent implements OnInit {


  @Input() todo;
  @Input() counter;
  constructor(private finishService: FinishService) { }

  ngOnInit(): void {
  }

  onClickMe($event){

    this.finishService.deleteFinish(this.counter);
  }
}
