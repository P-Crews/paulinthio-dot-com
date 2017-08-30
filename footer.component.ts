import {Component} from '@angular/core';
import {Navi} from './nav.component';


@Component({
  selector: 'footer',
  styleUrls: ['./css/footer.css'],
  templateUrl: './footer.component.html'
})

export class Footer{

index = 0;
footLinks = [
    'Home',
    'About',
    'Services',
    'Projects',
    'Contact'
  ]
footContact = [
  'email',
  'twitter',
  'facebook',
  'dribble',
]
services = [
  'Web Development',
  'Web Design',
  'Troubleshooting',
  'Helpdesk Support',
  'Data Management'
]
credits = [
  'flaticon',
  'stack overflow',
  'google fonts',
  'Angular',
  'Js Fiddle'
]
date = new Date();
}
