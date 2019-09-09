import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styles: []
})
export class ModelformComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(`^[6,7,8,9]\\d{9}$`)]],
      terms: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  SaveData() {
    if (this.userForm.valid) {
      console.log(`form is valid!`);
      console.log(this.userForm.value);
    }
  }

}
