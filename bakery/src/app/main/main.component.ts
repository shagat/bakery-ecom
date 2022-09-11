import { Component } from '@angular/core';
import {
  faBars,
  faCartShopping,
  faMoneyCheck,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  sideNavState = false;
  faBars = faBars;
  faCart = faCartShopping;
  faCheckout = faMoneyCheck;
  faSearch = faSearch;
  faPerson = faUser;

  constructor() {}

  toggleSideNav() {
    this.sideNavState = !this.sideNavState;
  }
}
