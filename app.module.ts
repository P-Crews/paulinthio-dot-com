import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Navi} from './nav.component';
import {HomeThings} from './home.component';
import {Sites} from './sites.component';
import {Contact} from './contact.component';
import {Welcoming} from './welcome.component';
import {Footer} from './footer.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Navi, HomeThings, Sites, Contact, Welcoming, Footer ],
  bootstrap:    [ AppComponent ],
  exports: [Navi]
})
export class AppModule { }
