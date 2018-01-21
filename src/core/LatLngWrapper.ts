export class LatLngWrapper {

    private _latLng: google.maps.LatLng;
    onChange: (latLngWrapper: LatLngWrapper) => void;

    constructor(private _lat: number, private _lng: number) {
        this._sync();
    }

    static fromLatLng(_latLng: google.maps.LatLng): LatLngWrapper {
        var latLngWrapper: LatLngWrapper = new LatLngWrapper(null, null);
        latLngWrapper.latLng = _latLng;
        return latLngWrapper;
    }

    set latLng(value: google.maps.LatLng) {
        this._lat = value.lat();
        this._lng = value.lng();
        this._latLng = value;
    }

    get latLng(): google.maps.LatLng {
        return this._latLng;
    }

    set lat(value: number) {
        this._lat = value;
        this._sync();
    }

    get lat(): number {
        return this._lat;
    }

    set lng(value: number) {
        this._lng = value;
        this._sync();
    }

    get lng(): number {
        return this._lng;
    }

    private _sync() {
        this._latLng = new google.maps.LatLng(this._lat, this._lng);
        if (this.onChange != null) {
            this.onChange(this);
        }
    }

    equal(latLngWrapper: LatLngWrapper): boolean {
        return this.lat == latLngWrapper.lat && this.lng == latLngWrapper.lng;
    }
}