import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  cities: any[];

  constructor() {
    this.cities = ['Noida'];
    // Noida is default city that all the instances will have initially
    // after Noida new cities can be added
  }
  AddCity(city: string) {
    this.cities.push(city);
  }
  GetCities() {
    return this.cities;
  }
}
