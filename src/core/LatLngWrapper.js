"use strict";
var LatLngWrapper = (function () {
    function LatLngWrapper(_lat, _lng) {
        this._lat = _lat;
        this._lng = _lng;
        this._sync();
    }
    LatLngWrapper.fromLatLng = function (_latLng) {
        var latLngWrapper = new LatLngWrapper(null, null);
        latLngWrapper.latLng = _latLng;
        return latLngWrapper;
    };
    Object.defineProperty(LatLngWrapper.prototype, "latLng", {
        get: function () {
            return this._latLng;
        },
        set: function (value) {
            this._lat = value.lat();
            this._lng = value.lng();
            this._latLng = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngWrapper.prototype, "lat", {
        get: function () {
            return this._lat;
        },
        set: function (value) {
            this._lat = value;
            this._sync();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngWrapper.prototype, "lng", {
        get: function () {
            return this._lng;
        },
        set: function (value) {
            this._lng = value;
            this._sync();
        },
        enumerable: true,
        configurable: true
    });
    LatLngWrapper.prototype._sync = function () {
        this._latLng = new google.maps.LatLng(this._lat, this._lng);
        if (this.onChange != null) {
            this.onChange(this);
        }
    };
    LatLngWrapper.prototype.equal = function (latLngWrapper) {
        return this.lat == latLngWrapper.lat && this.lng == latLngWrapper.lng;
    };
    return LatLngWrapper;
}());
exports.LatLngWrapper = LatLngWrapper;
//# sourceMappingURL=LatLngWrapper.js.map