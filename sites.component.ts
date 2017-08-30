import {Component} from '@angular/core';
import {Navi} from './nav.component';
import {HomeThings} from './home.component';
import * as angular from "angular";

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./css/sites.css']
})

export class Sites{
  sites = [
    'SignatureSeriesArts.com',
    '5StarShotsEvents.com',
    'Generali-Intranet'
  ];

namer = [
  'SignatureSeriesArts',
  '5StarShotsEvents',
  'Generali-Intranet'
]
index = 0;
talentKeys = Object.keys;
talents = [
  {name: 'HTML', des: 'This is used to make the webpage'},
  {name: 'CSS', des: 'This is used to create styles for the webpage'},
  {name: 'jQuery', des: 'This is used to create the functionality for the site.'},
  {name: 'Angular', des: 'Javascript framework that meshes all the basic web development technologies'},
  {name: 'Javascript', des: 'Pivotal scripting language'},
  {name: 'Csharp', des: 'Web development language'},
  {name: 'Umbraco', des: 'CMS (Content Management System). A CMS is an application (more likely web-based), that provides capabilities for multiple users with different permission levels to manage (all or a section of) content, data or information of a website project, or internet / intranet application.'},
  {name: 'Orchard', des: 'CMS (Content Management System). A CMS is an application (more likely web-based), that provides capabilities for multiple users with different permission levels to manage (all or a section of) content, data or information of a website project, or internet / intranet application.}'
}];
traits = [
  {name: 'Web Design', des: 'Planning a web layout can be hard. Let me help you with that!', img: 'www'},
  {name: 'Web Development', des: 'Got a design? I'+"'"+'ll develop the code to bring your concept to life', img: 'webdeveloper'},
  {name: 'Mobile Sites', des: 'Your awesome site can be just as stunning on your mobile devices.', img: 'mobileweb'},
  {name: "User Interface (U.I.)", des: "I create beautiful and simple user interfaces", img: "ui"},
  {name: "User Experience (U.X.)", des: "I strive to make great user experiences for all sites I develop", img: "ux"},
  {name: "Trobleshooting", des: "Got an issue? No worries! I'll have you up and running in no time", img: "troubleshoot"},
  {name: "Data Management", des: "Need a database? I got that covered. I can manage all of your site data", img: "datamanagement"},
  {name: "Helpdesk Support", des: "I am also available for hire to maintain your company's hardware.", img: "helpdesk"},
  {name: 'iOS Development', des: "Yes, I DO build apps!", img: 'iosdevelopment'}
]
}
