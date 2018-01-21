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
var GMapsComponent = (function () {
    function GMapsComponent(_ngZone) {
        this._ngZone = _ngZone;
        this._gmaps = {};
        //TODO find alt to use 'click'
        this.click = new core_1.EventEmitter();
        this.rightClick = new core_1.EventEmitter();
        this.created = new core_1.EventEmitter();
        this.boundsChange = new core_1.EventEmitter();
        this.centerChange = new core_1.EventEmitter();
        this.zoomChange = new core_1.EventEmitter();
    }
    Object.defineProperty(GMapsComponent.prototype, "center", {
        set: function (value) {
            this._center = value;
            if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
                this._gmaps.setCenter(this._center);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsComponent.prototype, "heading", {
        set: function (value) {
            this._heading = value;
            if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
                this._gmaps.setHeading(this._heading);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsComponent.prototype, "mapTypeId", {
        set: function (value) {
            this._mapTypeId = value;
            if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
                this._gmaps.setMapTypeId(this._mapTypeId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsComponent.prototype, "streetView", {
        set: function (value) {
            this._streetView = value;
            if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
                this._gmaps.setStreetView(this._streetView);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsComponent.prototype, "tilt", {
        set: function (value) {
            this._tilt = value;
            if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
                this._gmaps.setTilt(this._tilt);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsComponent.prototype, "zoom", {
        set: function (value) {
            this._zoom = value;
            if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
                this._gmaps.setZoom(this._zoom);
        },
        enumerable: true,
        configurable: true
    });
    GMapsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._gmaps = new google.maps.Map(this._gmapsDivElementRef.nativeElement);
        this._gmaps.setCenter(this._center);
        this._gmaps.setHeading(this._heading);
        if (this._mapTypeId != null)
            this._gmaps.setMapTypeId(this._mapTypeId);
        this._gmaps.setStreetView(this._streetView);
        this._gmaps.setTilt(this._tilt);
        this._gmaps.setZoom(this._zoom);
        this._gmaps.addListener(Events.CLICK, function (mouseEvent) {
            _this._ngZone.run(function () {
                _this.click.emit(mouseEvent);
            });
        });
        this._gmaps.addListener(Events.RIGHT_CLICK, function (mouseEvent) {
            _this._ngZone.run(function () {
                _this.rightClick.emit(mouseEvent);
            });
        });
        this._gmaps.addListener(Events.BOUNDS_CHANGED, function () {
            _this._ngZone.run(function () {
                _this.boundsChange.emit(_this._gmaps.getBounds());
                _this.centerChange.emit(_this._gmaps.getCenter());
                _this.zoomChange.emit(_this._gmaps.getZoom());
            });
        });
        this.created.emit(this._gmaps);
    };
    __decorate([
        core_1.ViewChild('gmapsDiv'), 
        __metadata('design:type', core_1.ElementRef)
    ], GMapsComponent.prototype, "_gmapsDivElementRef", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GMapsComponent.prototype, "gmapsDivId", void 0);
    __decorate([
        core_1.Output("mapClick"), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsComponent.prototype, "click", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsComponent.prototype, "rightClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsComponent.prototype, "created", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsComponent.prototype, "boundsChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsComponent.prototype, "centerChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsComponent.prototype, "zoomChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', google.maps.LatLng), 
        __metadata('design:paramtypes', [google.maps.LatLng])
    ], GMapsComponent.prototype, "center", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], GMapsComponent.prototype, "heading", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], GMapsComponent.prototype, "mapTypeId", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', google.maps.StreetViewPanorama), 
        __metadata('design:paramtypes', [google.maps.StreetViewPanorama])
    ], GMapsComponent.prototype, "streetView", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], GMapsComponent.prototype, "tilt", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], GMapsComponent.prototype, "zoom", null);
    GMapsComponent = __decorate([
        core_1.Component({
            selector: 'gmaps',
            template: '<div id="{{gmapsDivId}}" #gmapsDiv></div>'
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], GMapsComponent);
    return GMapsComponent;
}());
exports.GMapsComponent = GMapsComponent;
//enums in TS sucks
var Events = (function () {
    function Events() {
    }
    Object.defineProperty(Events, "CLICK", {
        get: function () { return "click"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Events, "RIGHT_CLICK", {
        get: function () { return "rightclick"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Events, "BOUNDS_CHANGED", {
        get: function () { return "bounds_changed"; },
        enumerable: true,
        configurable: true
    });
    return Events;
}());
//# sourceMappingURL=gmaps.component.js.map