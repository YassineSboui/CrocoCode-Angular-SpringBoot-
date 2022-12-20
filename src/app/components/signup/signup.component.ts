import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { SharedFunctionService } from 'src/app/services/shared-function.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private authentificationService: AuthentificationService,
    private sharedFunctionService: SharedFunctionService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cin: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mot_de_passe: [
        '',
        [
          Validators.required,
          Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
        ],
      ],
    });
  }

  signUp() {
    this.authentificationService
      .SignUpClient(this.signUpForm.value)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['']);
        }
        this.sharedFunctionService.sendClickEvent();
      });
  }

  ngOnDestroy(): void {}
}
