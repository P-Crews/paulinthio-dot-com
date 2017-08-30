import {Component} from '@angular/core';
import {Navi} from './nav.component';
import {Sites} from './sites.component';
import {Welcoming} from './welcome.component';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./css/contact.css'],
})

export class Contact{
  objectKeys = Object.keys;
  items = { Email: 'Pacjr1126@icloud.com', LinkedIn: 'Paul Crews', Monster: 'Paul Crews', Twitter: '@Fuhhcue' };
  constructor(){};
}
