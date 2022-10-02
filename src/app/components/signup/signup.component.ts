import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
        ],
      ],
    });
  }
  ngOnDestroy(): void {}
}
