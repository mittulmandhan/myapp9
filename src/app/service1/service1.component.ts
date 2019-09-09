import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styles: []
})
export class Service1Component implements OnInit {
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
