"use strict";
var LatLngWrapperList = (function () {
    function LatLngWrapperList() {
        this._array = new Array();
    }
    Object.defineProperty(LatLngWrapperList.prototype, "array", {
        get: function () {
            return this._array;
        },
        enumerable: true,
        configurable: true
    });
    LatLngWrapperList.prototype.add = function (latLngWrapper) {
        var _this = this;
        this._array.push(latLngWrapper);
        this.onAdd(latLngWrapper);
        latLngWrapper.onChange = function (latLngWrapper) {
            _this.onChange(latLngWrapper);
        };
    };
    LatLngWrapperList.prototype.remove = function (latLngWrapper) {
        var index = this._array.indexOf(latLngWrapper);
        this._array.splice(index, 1);
        this.onRemove(index);
    };
    LatLngWrapperList.prototype.set = function (index, latLngWrapper) {
        this._array[index] = latLngWrapper;
    };
    LatLngWrapperList.prototype.isEmpty = function () { return this._array.length == 0; };
    return LatLngWrapperList;
}());
exports.LatLngWrapperList = LatLngWrapperList;
//# sourceMappingURL=LatLngWrapperList.js.map