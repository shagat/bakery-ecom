import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faBars,
  faCartShopping,
  faMoneyCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  sideNavState = true;
  faBars = faBars;
  faCart = faCartShopping;
  faCheckout = faMoneyCheck;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.route.params);
  }

  toggleSideNav() {
    this.sideNavState = !this.sideNavState;
  }
}
