import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  cities: any[];

  constructor() {
    this.cities = ['Noida'];
  }
  AddCity(city: string) {
    this.cities.push(city);
  }
  GetCities() {
    return this.cities;
  }
}
