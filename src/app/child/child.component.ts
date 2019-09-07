import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent extends ParentComponent implements OnInit {

  constructor() {
    super();
    console.log(`child constructor`);
  }

  ngOnInit() {
    console.log(`child ngOnInit`);
  }

}
