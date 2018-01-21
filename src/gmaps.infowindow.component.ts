import { Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: 'gmaps-infowindow'
})
export class GMapsInfoWindowComponent implements OnInit {

    private _infoWindow: google.maps.InfoWindow;
    private _gmaps: google.maps.Map;

    @Output() created: EventEmitter<google.maps.Icon> = new EventEmitter();

    constructor() {
        this._infoWindow = new google.maps.InfoWindow();
    }

    @Input() set gmaps(value: google.maps.Map) {
        this._gmaps = value;
    }

    @Input() set position(value: google.maps.LatLng) {
        this._infoWindow.setPosition(value);
    }

    @Input() set content(value: string) {
        this._infoWindow.setContent(value);
    }

    @Input() set open(value: boolean) {
        if (value) this._infoWindow.open(this._gmaps);
        else this._infoWindow.close();
    }

    ngOnInit() { }

}