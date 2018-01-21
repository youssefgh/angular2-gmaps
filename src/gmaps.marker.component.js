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
var GMapsMarkerComponent = (function () {
    function GMapsMarkerComponent(ngZone) {
        this.ngZone = ngZone;
        //TODO find alt to use 'click'
        this.click = new core_1.EventEmitter();
        this.rightClick = new core_1.EventEmitter();
        this.dragEnd = new core_1.EventEmitter();
        this.positionChange = new core_1.EventEmitter();
        this._marker = new google.maps.Marker();
    }
    Object.defineProperty(GMapsMarkerComponent.prototype, "gmaps", {
        set: function (value) {
            this._marker.setMap(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsMarkerComponent.prototype, "title", {
        set: function (value) {
            this._marker.setTitle(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsMarkerComponent.prototype, "icon", {
        set: function (value) {
            this._marker.setIcon(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsMarkerComponent.prototype, "position", {
        set: function (value) {
            this._position = value;
            this._marker.setPosition(this._position.latLng);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsMarkerComponent.prototype, "draggable", {
        set: function (value) {
            this._marker.setDraggable(value);
        },
        enumerable: true,
        configurable: true
    });
    GMapsMarkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._marker.addListener(Events.CLICK, function (mouseEvent) {
            _this.ngZone.run(function () {
                _this._updatePosition();
                _this.click.emit(_this._position);
            });
        });
        this._marker.addListener(Events.RIGHT_CLICK, function (mouseEvent) {
            _this.ngZone.run(function () {
                _this._updatePosition();
                _this.rightClick.emit(_this._position);
            });
        });
        this._marker.addListener(Events.DRAG_END, function (mouseEvent) {
            _this.ngZone.run(function () {
                _this._updatePosition();
                _this.dragEnd.emit(_this._position);
                _this.positionChange.emit(_this._position);
            });
        });
    };
    //TODO search for how to attach this to emiter
    GMapsMarkerComponent.prototype._updatePosition = function () {
        this._position.latLng = this._marker.getPosition();
    };
    GMapsMarkerComponent.prototype.ngOnDestroy = function () {
        this.gmaps = null;
    };
    __decorate([
        core_1.Output("markerClick"), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsMarkerComponent.prototype, "click", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsMarkerComponent.prototype, "rightClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsMarkerComponent.prototype, "dragEnd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsMarkerComponent.prototype, "positionChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', google.maps.Map), 
        __metadata('design:paramtypes', [google.maps.Map])
    ], GMapsMarkerComponent.prototype, "gmaps", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], GMapsMarkerComponent.prototype, "title", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], GMapsMarkerComponent.prototype, "icon", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', LatLngWrapper_1.LatLngWrapper), 
        __metadata('design:paramtypes', [LatLngWrapper_1.LatLngWrapper])
    ], GMapsMarkerComponent.prototype, "position", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], GMapsMarkerComponent.prototype, "draggable", null);
    GMapsMarkerComponent = __decorate([
        core_1.Directive({
            selector: 'gmaps-marker'
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], GMapsMarkerComponent);
    return GMapsMarkerComponent;
}());
exports.GMapsMarkerComponent = GMapsMarkerComponent;
//enums in TS sucks
var Events = (function () {
    function Events() {
    }
    Events.CLICK = "click";
    Events.RIGHT_CLICK = "rightclick";
    Events.DRAG_END = "dragend";
    return Events;
}());
//# sourceMappingURL=gmaps.marker.component.js.map