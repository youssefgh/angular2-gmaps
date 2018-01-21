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
var GMapsInfoWindowComponent = (function () {
    function GMapsInfoWindowComponent() {
        this.created = new core_1.EventEmitter();
        this._infoWindow = new google.maps.InfoWindow();
    }
    Object.defineProperty(GMapsInfoWindowComponent.prototype, "gmaps", {
        set: function (value) {
            this._gmaps = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsInfoWindowComponent.prototype, "position", {
        set: function (value) {
            this._infoWindow.setPosition(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsInfoWindowComponent.prototype, "content", {
        set: function (value) {
            this._infoWindow.setContent(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsInfoWindowComponent.prototype, "open", {
        set: function (value) {
            if (value)
                this._infoWindow.open(this._gmaps);
            else
                this._infoWindow.close();
        },
        enumerable: true,
        configurable: true
    });
    GMapsInfoWindowComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsInfoWindowComponent.prototype, "created", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', google.maps.Map), 
        __metadata('design:paramtypes', [google.maps.Map])
    ], GMapsInfoWindowComponent.prototype, "gmaps", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', google.maps.LatLng), 
        __metadata('design:paramtypes', [google.maps.LatLng])
    ], GMapsInfoWindowComponent.prototype, "position", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], GMapsInfoWindowComponent.prototype, "content", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], GMapsInfoWindowComponent.prototype, "open", null);
    GMapsInfoWindowComponent = __decorate([
        core_1.Directive({
            selector: 'gmaps-infowindow'
        }), 
        __metadata('design:paramtypes', [])
    ], GMapsInfoWindowComponent);
    return GMapsInfoWindowComponent;
}());
exports.GMapsInfoWindowComponent = GMapsInfoWindowComponent;
//# sourceMappingURL=gmaps.infowindow.component.js.map