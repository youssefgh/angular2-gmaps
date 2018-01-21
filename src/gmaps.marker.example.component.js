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
var GMapsMarkerExampleComponent = (function () {
    function GMapsMarkerExampleComponent() {
        this.latLngWrapper = new LatLngWrapper_1.LatLngWrapper(33.55770396470521, -7.5963592529296875);
        this.zoom = 9;
        this.gmapsOptions = { center: this.latLngWrapper.latLng, zoom: this.zoom };
        this.iconScaledSize = new google.maps.Size(30, 30);
        this.markers = new Array();
        this.markersWithIcon = new Array();
    }
    GMapsMarkerExampleComponent.prototype.iconCreated = function (icon) {
        this.icon = icon;
    };
    GMapsMarkerExampleComponent.prototype.onGMapsCreation = function (gmaps) {
        this.gmaps = gmaps;
    };
    GMapsMarkerExampleComponent.prototype.onGMapsClick = function (mouseEvent) {
        this.markers.push(LatLngWrapper_1.LatLngWrapper.fromLatLng(mouseEvent.latLng));
    };
    GMapsMarkerExampleComponent.prototype.onGMapsRightClick = function (mouseEvent) {
        this.markersWithIcon.push(LatLngWrapper_1.LatLngWrapper.fromLatLng(mouseEvent.latLng));
    };
    GMapsMarkerExampleComponent.prototype.onMarkerRightClick = function (latLngWrapper) {
        this.markers.splice(this.markers.indexOf(latLngWrapper), 1);
    };
    GMapsMarkerExampleComponent.prototype.onMarkerWithIconRightClick = function (latLngWrapper) {
        this.markersWithIcon.splice(this.markersWithIcon.indexOf(latLngWrapper), 1);
    };
    GMapsMarkerExampleComponent = __decorate([
        core_1.Component({
            selector: 'gmaps-marker-example',
            templateUrl: 'gmaps.marker.example.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GMapsMarkerExampleComponent);
    return GMapsMarkerExampleComponent;
}());
exports.GMapsMarkerExampleComponent = GMapsMarkerExampleComponent;
//# sourceMappingURL=gmaps.marker.example.component.js.map