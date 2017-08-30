"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Sites = (function () {
    function Sites() {
        this.sites = [
            'SignatureSeriesArts.com',
            '5StarShotsEvents.com',
            'Generali-Intranet'
        ];
        this.namer = [
            'SignatureSeriesArts',
            '5StarShotsEvents',
            'Generali-Intranet'
        ];
        this.index = 0;
        this.talentKeys = Object.keys;
        this.talents = [
            { name: 'HTML', des: 'This is used to make the webpage' },
            { name: 'CSS', des: 'This is used to create styles for the webpage' },
            { name: 'jQuery', des: 'This is used to create the functionality for the site.' },
            { name: 'Angular', des: 'Javascript framework that meshes all the basic web development technologies' },
            { name: 'Javascript', des: 'Pivotal scripting language' },
            { name: 'Csharp', des: 'Web development language' },
            { name: 'Umbraco', des: 'CMS (Content Management System). A CMS is an application (more likely web-based), that provides capabilities for multiple users with different permission levels to manage (all or a section of) content, data or information of a website project, or internet / intranet application.' },
            { name: 'Orchard', des: 'CMS (Content Management System). A CMS is an application (more likely web-based), that provides capabilities for multiple users with different permission levels to manage (all or a section of) content, data or information of a website project, or internet / intranet application.}'
            }
        ];
        this.traits = [
            { name: 'Web Design', des: 'Planning a web layout can be hard. Let me help you with that!', img: 'www' },
            { name: 'Web Development', des: 'Got a design? I' + "'" + 'll develop the code to bring your concept to life', img: 'webdeveloper' },
            { name: 'Mobile Sites', des: 'Your awesome site can be just as stunning on your mobile devices.', img: 'mobileweb' },
            { name: "User Interface (U.I.)", des: "I create beautiful and simple user interfaces", img: "ui" },
            { name: "User Experience (U.X.)", des: "I strive to make great user experiences for all sites I develop", img: "ux" },
            { name: "Trobleshooting", des: "Got an issue? No worries! I'll have you up and running in no time", img: "troubleshoot" },
            { name: "Data Management", des: "Need a database? I got that covered. I can manage all of your site data", img: "datamanagement" },
            { name: "Helpdesk Support", des: "I am also available for hire to maintain your company's hardware.", img: "helpdesk" },
            { name: 'iOS Development', des: "Yes, I DO build apps!", img: 'iosdevelopment' }
        ];
    }
    return Sites;
}());
Sites = __decorate([
    core_1.Component({
        selector: 'sites',
        templateUrl: './sites.component.html',
        styleUrls: ['./css/sites.css']
    })
], Sites);
exports.Sites = Sites;
//# sourceMappingURL=sites.component.js.map