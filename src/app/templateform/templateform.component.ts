import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styles: []
})
export class TemplateformComponent implements OnInit {
  user: User;
  constructor() {
    this.user = new User();
   }

  ngOnInit() {
  }

  Save(form: NgForm) {
    if (form.valid) {
      alert('valid');
    }
  }

}
