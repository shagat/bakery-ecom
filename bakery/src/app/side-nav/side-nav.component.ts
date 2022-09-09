import { Component } from '@angular/core';
import {
  faHome,
  faCake,
  faGlassWhiskey,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent  {
  faHome = faHome;
  faCake = faCake;
  faSnow = faGlassWhiskey;
  faComment = faCommentDots;
  constructor() {}
}
