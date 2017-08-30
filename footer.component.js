"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Footer = (function () {
    function Footer() {
        this.index = 0;
        this.footLinks = [
            'Home',
            'About',
            'Services',
            'Projects',
            'Contact'
        ];
        this.footContact = [
            'email',
            'twitter',
            'facebook',
            'dribble',
        ];
        this.services = [
            'Web Development',
            'Web Design',
            'Troubleshooting',
            'Helpdesk Support',
            'Data Management'
        ];
        this.credits = [
            'flaticon',
            'stack overflow',
            'google fonts',
            'Angular',
            'Js Fiddle'
        ];
        this.date = new Date();
    }
    return Footer;
}());
Footer = __decorate([
    core_1.Component({
        selector: 'footer',
        styleUrls: ['./css/footer.css'],
        templateUrl: './footer.component.html'
    })
], Footer);
exports.Footer = Footer;
//# sourceMappingURL=footer.component.js.map