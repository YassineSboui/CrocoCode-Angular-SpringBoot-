import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;

  signUp(obj: any) {
    console.log(obj.value);
  }
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    });
  }
  ngOnDestroy(): void {}
}
