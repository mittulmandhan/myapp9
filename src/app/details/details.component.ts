import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  @Input() myCompany: string;
  @Output() myMessage = new EventEmitter<string>();
constructor() {
  }

  ngOnInit() {
  }

Greet() {
    this.myMessage.emit(`Hi, from details!`);
  }

}
