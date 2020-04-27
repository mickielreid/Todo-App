import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @ViewChild('inputVal') inputVal: ElementRef;

  constructor(private tService: ServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log("value is " + this.inputVal.nativeElement.value);
    const userVal: string = this.inputVal.nativeElement.value;
    console.log("user val " + userVal);


    if (userVal === '') {
      alert("Submitted To do can not be empty");
    } else {
      this.tService.addItem(userVal);
      this.inputVal.nativeElement.value="";
    }
  }


}
