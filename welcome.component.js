"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var Welcoming = (function () {
    function Welcoming() {
        this.skill = "";
        this.p = 0;
    }
    Welcoming.prototype.startover = function () {
        this.changeSkill();
    };
    Welcoming.prototype.changeSkill = function () {
        var skills = ['small business websites', 'corporate websites', 'personal websites', 'company intranet', 'web applications', 'user interfaces', 'iOS applications'];
        var skilling = "";
        var i = 0;
        var x = 0;
        var n = Observable_1.Observable.interval(225).timeInterval();
        var sub = n.subscribe(function () {
            skilling = skills[i];
            this.skill = skilling;
            document.getElementById('miss').innerHTML = skilling;
            if (x != 120) {
                x = x + 1;
                if (i == skills.length - 1) {
                    i = 0;
                }
                else {
                    i = i + 1;
                }
            }
        });
        return skilling;
    };
    Welcoming.prototype.ngOnInit = function () {
        this.changeSkill();
    };
    Welcoming.prototype.ngOnDestroy = function () {
    };
    return Welcoming;
}());
Welcoming = __decorate([
    core_1.Component({
        selector: 'welcome',
        templateUrl: './welcome.component.html',
        styleUrls: ['./css/welcome.css']
    })
], Welcoming);
exports.Welcoming = Welcoming;
//# sourceMappingURL=welcome.component.js.map