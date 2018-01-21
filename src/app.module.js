"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var gmaps_component_1 = require('./gmaps.component');
var gmaps_marker_component_1 = require('./gmaps.marker.component');
var gmaps_polyline_component_1 = require('./gmaps.polyline.component');
var gmaps_icon_component_1 = require('./gmaps.icon.component');
var gmaps_infowindow_component_1 = require('./gmaps.infowindow.component');
var gmaps_example_component_1 = require('./gmaps.example.component');
var gmaps_marker_example_component_1 = require('./gmaps.marker.example.component');
var gmaps_polyline_example_component_1 = require('./gmaps.polyline.example.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, gmaps_component_1.GMapsComponent, gmaps_marker_component_1.GMapsMarkerComponent,
                gmaps_polyline_component_1.GMapsPolylineComponent, gmaps_icon_component_1.GMapsIconComponent, gmaps_infowindow_component_1.GMapsInfoWindowComponent,
                gmaps_example_component_1.GMapsExampleComponent, gmaps_marker_example_component_1.GMapsMarkerExampleComponent,
                gmaps_polyline_example_component_1.GMapsPolylineExampleComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map