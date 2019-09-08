import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, DoCheck } from '@angular/core';


// angular is suggesting us not to use ngDoCheck hook because angular internally handles it
// Thats why we are disabling the error shown by angular
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input() myCompany: string;
  @Output() myMessage = new EventEmitter<string>();
  constructor() {
    console.log(`child constructor`);
  }

  ngOnChanges() {
    console.log(`child ngOnChanges`);
  }

  ngOnInit() {
    console.log(`child ngOnInit`);
  }

Greet() {
    this.myMessage.emit(`Hi, from details!`);
  }

  ngDoCheck() {
    console.log(`child ngDoCheck`);
  }

  ngOnDestroy() {
    console.log(`child ngOnDestroy`);
  }

}
