"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Navi = (function () {
    function Navi() {
        this.navTabs = [
            'Home',
            'About',
            'Services',
            'Projects',
            'Contact'
        ];
        this.glyphs = [
            'home',
            'user',
            'certificate',
            'tasks',
            'comment'
        ];
        this.social = [
            'email',
            'twitter',
            'facebook',
            'dribble',
        ];
    }
    return Navi;
}());
Navi = __decorate([
    core_1.Component({
        selector: 'navi',
        templateUrl: './nav.component.html',
        styleUrls: ['./css/nav.css'],
    })
], Navi);
exports.Navi = Navi;
//# sourceMappingURL=nav.component.js.map