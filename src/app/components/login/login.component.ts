import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { SharedFunctionService } from 'src/app/services/shared-function.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginFormGroup: FormGroup = new FormGroup({});
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private authentificationService: AuthentificationService,
    private sharedFunctionService: SharedFunctionService
  ) {}

  ngOnInit(): void {
    this.LoginFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      mot_de_passe: ['', Validators.required],
    });
  }

  seConnecter() {
    this.authentificationService
      .signin(this.LoginFormGroup.value)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['']);
        }
        this.sharedFunctionService.sendClickEvent();
      });
  }
}
