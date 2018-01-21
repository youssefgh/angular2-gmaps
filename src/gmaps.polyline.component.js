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
var GMapsPolylineComponent = (function () {
    function GMapsPolylineComponent(_ngZone) {
        this._ngZone = _ngZone;
        this._polylineOptions = {};
        //TODO find alt to use 'click'
        this.click = new core_1.EventEmitter();
        //TODO redefine return types
        this.rightClick = new core_1.EventEmitter();
        this.doubleClick = new core_1.EventEmitter();
        this.dragEnd = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this._polyline = new google.maps.Polyline();
    }
    Object.defineProperty(GMapsPolylineComponent.prototype, "gmaps", {
        set: function (value) {
            if (value instanceof google.maps.Map)
                this._polyline.setMap(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsPolylineComponent.prototype, "visible", {
        set: function (value) {
            this._polyline.setVisible(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsPolylineComponent.prototype, "editable", {
        set: function (value) {
            this._polyline.setEditable(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsPolylineComponent.prototype, "path", {
        set: function (value) {
            var _this = this;
            this._path = value;
            this._polyline.getPath().clear();
            for (var _i = 0, _a = this._path.array; _i < _a.length; _i++) {
                var latLngWrapper = _a[_i];
                this._polyline.getPath().push(latLngWrapper.latLng);
            }
            this._path.onAdd = function (latLngWrapper) {
                _this._polyline.getPath().push(latLngWrapper.latLng);
            };
            this._path.onRemove = function (index) {
                _this._polyline.getPath().removeAt(index);
            };
            this._path.onChange = function (latLngWrapper) {
                _this._polyline.getPath().setAt(_this._path.array.indexOf(latLngWrapper), latLngWrapper.latLng);
            };
            this._polyline.getPath().addListener(MVCArrayEvents.SET_AT, function (index) {
                _this._path.set(index, LatLngWrapper_1.LatLngWrapper.fromLatLng(_this._polyline.getPath().getAt(index)));
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsPolylineComponent.prototype, "strokeColor", {
        set: function (value) {
            this._polylineOptions.strokeColor = value;
            this._polyline.setOptions(this._polylineOptions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsPolylineComponent.prototype, "strokeOpacity", {
        set: function (value) {
            this._polylineOptions.strokeOpacity = value;
            this._polyline.setOptions(this._polylineOptions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsPolylineComponent.prototype, "strokeWeight", {
        set: function (value) {
            this._polylineOptions.strokeWeight = value;
            this._polyline.setOptions(this._polylineOptions);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsPolylineComponent.prototype, "zIndex", {
        set: function (value) {
            this._polylineOptions.zIndex = value;
            this._polyline.setOptions(this._polylineOptions);
        },
        enumerable: true,
        configurable: true
    });
    GMapsPolylineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._polyline.addListener(Events.CLICK, function (e) {
            _this._ngZone.run(function () {
                _this.click.emit(_this._polyline);
            });
        });
        this._polyline.addListener(Events.RIGHT_CLICK, function (e) {
            _this._ngZone.run(function () {
                _this.rightClick.emit(_this._polyline);
            });
        });
        this._polyline.addListener(Events.DOUBLE_CLICK, function (e) {
            //can be null if the mouse is moving fast
            if (e.vertex != null) {
                _this._ngZone.run(function () {
                    _this.doubleClick.emit(_this._path.array[e.vertex]);
                });
            }
        });
        this._polyline.addListener(Events.DRAG_END, function (e) {
            _this._ngZone.run(function () {
                _this.dragEnd.emit(_this._polyline);
            });
        });
        this._polyline.addListener(Events.MOUSE_OUT, function (e) {
            _this._ngZone.run(function () {
                _this.mouseOut.emit();
            });
        });
        this._polyline.addListener(Events.MOUSE_OVER, function (e) {
            //can be null if the mouse is moving fast
            if (e.vertex != null) {
                _this._ngZone.run(function () {
                    _this.mouseOver.emit(_this._path.array[e.vertex].latLng);
                });
            }
        });
    };
    GMapsPolylineComponent.prototype.ngOnDestroy = function () {
        this.gmaps = null;
    };
    __decorate([
        core_1.Output("polylineClick"), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsPolylineComponent.prototype, "click", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsPolylineComponent.prototype, "rightClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsPolylineComponent.prototype, "doubleClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsPolylineComponent.prototype, "dragEnd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsPolylineComponent.prototype, "mouseOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsPolylineComponent.prototype, "mouseOver", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', google.maps.Map), 
        __metadata('design:paramtypes', [google.maps.Map])
    ], GMapsPolylineComponent.prototype, "gmaps", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], GMapsPolylineComponent.prototype, "visible", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], GMapsPolylineComponent.prototype, "editable", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', LatLngWrapperList_1.LatLngWrapperList), 
        __metadata('design:paramtypes', [LatLngWrapperList_1.LatLngWrapperList])
    ], GMapsPolylineComponent.prototype, "path", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], GMapsPolylineComponent.prototype, "strokeColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], GMapsPolylineComponent.prototype, "strokeOpacity", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], GMapsPolylineComponent.prototype, "strokeWeight", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], GMapsPolylineComponent.prototype, "zIndex", null);
    GMapsPolylineComponent = __decorate([
        core_1.Directive({
            selector: 'gmaps-polyline'
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], GMapsPolylineComponent);
    return GMapsPolylineComponent;
}());
exports.GMapsPolylineComponent = GMapsPolylineComponent;
//enums in TS sucks
var Events = (function () {
    function Events() {
    }
    Object.defineProperty(Events, "CLICK", {
        get: function () { return "click"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Events, "DOUBLE_CLICK", {
        get: function () { return "dblclick"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Events, "RIGHT_CLICK", {
        get: function () { return "rightclick"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Events, "DRAG_END", {
        get: function () { return "dragend"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Events, "MOUSE_OUT", {
        get: function () { return "mouseout"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Events, "MOUSE_OVER", {
        get: function () { return "mouseover"; },
        enumerable: true,
        configurable: true
    });
    ;
    return Events;
}());
var MVCArrayEvents = (function () {
    function MVCArrayEvents() {
    }
    Object.defineProperty(MVCArrayEvents, "SET_AT", {
        get: function () { return "set_at"; },
        enumerable: true,
        configurable: true
    });
    return MVCArrayEvents;
}());
//# sourceMappingURL=gmaps.polyline.component.js.map