import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent   {
  fb = faFacebook;
  inst = faInstagram;
  twit = faTwitter;
  yout = faYoutube;
  pint = faPinterest;
  constructor() {}
}
