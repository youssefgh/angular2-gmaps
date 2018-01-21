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
var LatLngWrapper_1 = require('./core/LatLngWrapper');
var GMapsExampleComponent = (function () {
    function GMapsExampleComponent() {
        this.latLngWrapper = new LatLngWrapper_1.LatLngWrapper(33.55770396470521, -7.5963592529296875);
        this.zoom = 9;
        this.gmapsOptions = { center: this.latLngWrapper.latLng, zoom: this.zoom };
    }
    GMapsExampleComponent.prototype.onGMapsCreation = function (gmaps) {
        this.gmaps = gmaps;
        console.log("Gmaps created: " + this.gmaps);
    };
    GMapsExampleComponent.prototype.onGMapsClick = function (mouseEvent) {
        window.alert("click at: " + mouseEvent.latLng);
    };
    GMapsExampleComponent.prototype.onGMapsRightClick = function (mouseEvent) {
        window.alert("right click at: " + mouseEvent.latLng);
    };
    GMapsExampleComponent = __decorate([
        core_1.Component({
            selector: 'gmaps-example',
            templateUrl: 'gmaps.example.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GMapsExampleComponent);
    return GMapsExampleComponent;
}());
exports.GMapsExampleComponent = GMapsExampleComponent;
//# sourceMappingURL=gmaps.example.component.js.map