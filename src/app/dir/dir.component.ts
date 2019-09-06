import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styles: []
})
export class DirComponent implements OnInit {
  num: number;
  alphabet: string;
  colors: any[];
  color: string;
  constructor() { }
  ngOnInit() {
    this.num = 1;
    this.alphabet = 'a';
    this.colors = ['red', 'blue', 'green'];
    this.color = '';
  }
}
