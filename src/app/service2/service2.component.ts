import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  // everytime this component is called new instance of the data service will be created
  // if you exit from the component the instance of data service will be destroyed also and new instance of data service will be created on the next call of this component
  providers: [DataService],
  styles: []
})
export class Service2Component implements OnInit {
  data: any[];
  city: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.GetCities();
  }
  Add() {
    this.dataService.AddCity(this.city);
    this.city = '';
  }

}
