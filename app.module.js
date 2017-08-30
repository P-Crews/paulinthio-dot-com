"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var nav_component_1 = require("./nav.component");
var home_component_1 = require("./home.component");
var sites_component_1 = require("./sites.component");
var contact_component_1 = require("./contact.component");
var welcome_component_1 = require("./welcome.component");
var footer_component_1 = require("./footer.component");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, nav_component_1.Navi, home_component_1.HomeThings, sites_component_1.Sites, contact_component_1.Contact, welcome_component_1.Welcoming, footer_component_1.Footer],
        bootstrap: [app_component_1.AppComponent],
        exports: [nav_component_1.Navi]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map