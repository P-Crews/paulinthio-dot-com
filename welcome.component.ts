import {Component, OnInit, OnDestroy} from '@angular/core';
import {Navi} from './nav.component';
import {Sites} from './sites.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./css/welcome.css']
})

export class Welcoming implements OnInit, OnDestroy{
skill = "";
p = 0;
startover(){
  this.changeSkill();
}
  changeSkill(){
    var skills = ['small business websites', 'corporate websites', 'personal websites', 'company intranet', 'web applications', 'user interfaces', 'iOS applications']
    var skilling = "";
    var i = 0;
    var x = 0;
  let n = Observable.interval(225).timeInterval();
  var sub = n.subscribe(
    function(){
      skilling = skills[i]
      this.skill = skilling;
      document.getElementById('miss').innerHTML = skilling;
      if(x != 120){
      x = x + 1;
      if(i == skills.length - 1){
        i = 0;
      }else{
        i = i + 1;
      }
    }
  }
  )
  return skilling;
  }
    ngOnInit(){
      this.changeSkill();
    }
    ngOnDestroy(){

    }

}
