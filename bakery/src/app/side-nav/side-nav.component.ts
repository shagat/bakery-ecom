import { Component, OnInit } from '@angular/core';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import {
  faCommentDots,
  faSnowflake,
  faStar,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  faHome = faHouzz;
  faStar = faStar;
  faSnow = faSnowflake;
  faComment = faCommentDots;
  constructor() {}

  ngOnInit(): void {}
}
