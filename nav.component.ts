import {Component} from '@angular/core'
import {HomeThings} from './home.component';

@Component({
  selector: 'navi',
  templateUrl: './nav.component.html',
  styleUrls: ['./css/nav.css'],
})
export class Navi {
public navTabs = [
  'Home',
  'About',
  'Services',
  'Projects',
  'Contact'
]
glyphs = [
'home',
'user',
'certificate',
'tasks',
'comment'
]
social = [
'email',
'twitter',
'facebook',
'dribble',
]
}
