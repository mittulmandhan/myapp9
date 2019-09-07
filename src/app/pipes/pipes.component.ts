import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {
employee: any[];
  constructor() { }

  ngOnInit() {
    // we dont currently have any backend server so we are hard coding our data
    this.employee = [
      {name: 'Rohan', address: 'Noida', salary: 10000, joining: new Date()},
      {name: 'Ankit', address: 'Delhi', salary: 12000, joining: new Date()},
      {name: 'Mohan', address: 'Bangalore', salary: 11000, joining: new Date()}
    ];
  }

}
