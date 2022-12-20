import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { SharedFunctionService } from 'src/app/services/shared-function.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  clickEventSubscription: Subscription;
  isClient: boolean;
  isAdmin: boolean;
  isLogedIn: boolean;
  constructor(
    private sharedFunctionService: SharedFunctionService,
    private authentificationService: AuthentificationService
  ) {
    this.clickEventSubscription = this.sharedFunctionService
      .getClickEvent()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  deconnexion() {
    this.authentificationService.logOut();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.isLogedIn =
      localStorage.getItem('TOKEN') != null &&
      localStorage.getItem('TOKEN') != 'undefined';
    if (localStorage.getItem('currentUser') != null) {
      this.isClient =
        JSON.parse(localStorage.getItem('currentUser')).__type == 'Client';

      this.isAdmin =
        JSON.parse(localStorage.getItem('currentUser')).__type == 'Admin';
    }
  }
}
