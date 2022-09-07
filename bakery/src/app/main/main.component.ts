import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faBars,
  faCartShopping,
  faMoneyCheck,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  sideNavState = true;
  faBars = faBars;
  faCart = faCartShopping;
  faCheckout = faMoneyCheck;
  faSearch = faSearch;

  constructor() {}

  toggleSideNav() {
    this.sideNavState = !this.sideNavState;
  }
}
