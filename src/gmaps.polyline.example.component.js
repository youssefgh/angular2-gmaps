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
var LatLngWrapperList_1 = require('./core/LatLngWrapperList');
var GMapsPolylineExampleComponent = (function () {
    function GMapsPolylineExampleComponent() {
        this.center = new LatLngWrapper_1.LatLngWrapper(33.55770396470521, -7.5963592529296875);
        this.zoom = 9;
        this.gmaps = {};
        this.paths = new Array();
        this.createPath();
    }
    GMapsPolylineExampleComponent.prototype.onGMapsCreation = function (gmaps) {
        this.gmaps = gmaps;
    };
    GMapsPolylineExampleComponent.prototype.onGMapsClick = function (e) {
        this.path.add(LatLngWrapper_1.LatLngWrapper.fromLatLng(e.latLng));
    };
    GMapsPolylineExampleComponent.prototype.onGMapsPolylineMouseOut = function () {
        this.infoWindowPosition = null;
    };
    GMapsPolylineExampleComponent.prototype.onGMapsPolylineMouseOver = function (latLng) {
        this.infoWindowPosition = latLng;
    };
    GMapsPolylineExampleComponent.prototype.createPath = function () {
        this.path = new LatLngWrapperList_1.LatLngWrapperList();
    };
    GMapsPolylineExampleComponent.prototype.removePath = function () {
        this.path = null;
    };
    GMapsPolylineExampleComponent.prototype.savePath = function () {
        this.paths.push(this.path);
        this.createPath();
    };
    GMapsPolylineExampleComponent = __decorate([
        core_1.Component({
            selector: 'gmaps-polyline-example',
            templateUrl: 'gmaps.polyline.example.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GMapsPolylineExampleComponent);
    return GMapsPolylineExampleComponent;
}());
exports.GMapsPolylineExampleComponent = GMapsPolylineExampleComponent;
//# sourceMappingURL=gmaps.polyline.example.component.js.map