import { Component } from '@angular/core';
import {Navi} from './nav.component';
import {HomeThings} from './home.component';
import {Contact} from './contact.component';
import {Welcoming} from './welcome.component'

@Component({
  selector: 'my-app',
  templateUrl: './home.component.html',
})
export class AppComponent  { name = 'Angular'; }
