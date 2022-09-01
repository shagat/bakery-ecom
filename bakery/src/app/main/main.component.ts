import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  sideNavState = true;

  constructor() {}

  toggleSideNav() {
    this.sideNavState = !this.sideNavState;
    console.log(this.sideNavState);
  }
}
