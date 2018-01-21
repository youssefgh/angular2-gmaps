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
var GMapsIconComponent = (function () {
    function GMapsIconComponent() {
        this.created = new core_1.EventEmitter();
        this._icon = {};
    }
    Object.defineProperty(GMapsIconComponent.prototype, "scaledSize", {
        set: function (value) {
            this._icon.scaledSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GMapsIconComponent.prototype, "url", {
        set: function (value) {
            this._icon.url = value;
        },
        enumerable: true,
        configurable: true
    });
    GMapsIconComponent.prototype.ngOnInit = function () {
        this.created.emit(this._icon);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GMapsIconComponent.prototype, "created", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', google.maps.Size), 
        __metadata('design:paramtypes', [google.maps.Size])
    ], GMapsIconComponent.prototype, "scaledSize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], GMapsIconComponent.prototype, "url", null);
    GMapsIconComponent = __decorate([
        core_1.Directive({
            selector: 'gmaps-icon'
        }), 
        __metadata('design:paramtypes', [])
    ], GMapsIconComponent);
    return GMapsIconComponent;
}());
exports.GMapsIconComponent = GMapsIconComponent;
//# sourceMappingURL=gmaps.icon.component.js.map