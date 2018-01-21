import { Component, ElementRef, AfterViewInit, Input, Output, EventEmitter, ViewChild, NgZone } from '@angular/core';

@Component({
    selector: 'gmaps',
    template: '<div id="{{gmapsDivId}}" #gmapsDiv></div>'
})
export class GMapsComponent implements AfterViewInit {

    private _gmaps: google.maps.Map = {} as google.maps.Map;
    @ViewChild('gmapsDiv')
    private _gmapsDivElementRef: ElementRef;

    private _center: google.maps.LatLng;
    private _heading: number;
    private _mapTypeId: google.maps.MapTypeId;
    private _streetView: google.maps.StreetViewPanorama;
    private _tilt: number;
    private _zoom: number;
    @Input() gmapsDivId: string;

    //TODO find alt to use 'click'
    @Output("mapClick") click: EventEmitter<google.maps.MouseEvent> = new EventEmitter();
    @Output() rightClick: EventEmitter<google.maps.MouseEvent> = new EventEmitter();
    @Output() created: EventEmitter<google.maps.Map> = new EventEmitter();
    @Output() boundsChange: EventEmitter<google.maps.LatLngBounds> = new EventEmitter();
    @Output() centerChange: EventEmitter<google.maps.LatLng> = new EventEmitter();
    @Output() zoomChange: EventEmitter<number> = new EventEmitter();

    constructor(private _ngZone: NgZone) {
    }

    @Input() set center(value: google.maps.LatLng) {
        this._center = value;
        if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
            this._gmaps.setCenter(this._center);
    }

    @Input() set heading(value: number) {
        this._heading = value;
        if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
            this._gmaps.setHeading(this._heading);
    }

    @Input() set mapTypeId(value: google.maps.MapTypeId) {
        this._mapTypeId = value;
        if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
            this._gmaps.setMapTypeId(this._mapTypeId);
    }

    @Input() set streetView(value: google.maps.StreetViewPanorama) {
        this._streetView = value;
        if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
            this._gmaps.setStreetView(this._streetView);
    }

    @Input() set tilt(value: number) {
        this._tilt = value;
        if (this._gmaps != null && this._gmaps instanceof google.maps.Map)
            this._gmaps.setTilt(this._tilt);
    }

    @Input() set zoom(value: number) {
        this._zoom = value;
        if (this._gmaps != null && this._gmaps instanceof google.maps.Map) this._gmaps.setZoom(this._zoom);
    }

    ngAfterViewInit() {
        this._gmaps = new google.maps.Map(this._gmapsDivElementRef.nativeElement as Element);
        this._gmaps.setCenter(this._center);
        this._gmaps.setHeading(this._heading);
        if (this._mapTypeId != null) this._gmaps.setMapTypeId(this._mapTypeId);
        this._gmaps.setStreetView(this._streetView);
        this._gmaps.setTilt(this._tilt);
        this._gmaps.setZoom(this._zoom);
        this._gmaps.addListener(Events.CLICK, (mouseEvent: google.maps.MouseEvent) => {
            this._ngZone.run(() => {
                this.click.emit(mouseEvent);
            });
        });
        this._gmaps.addListener(Events.RIGHT_CLICK, (mouseEvent: google.maps.MouseEvent) => {
            this._ngZone.run(() => {
                this.rightClick.emit(mouseEvent);
            });
        });
        this._gmaps.addListener(Events.BOUNDS_CHANGED, () => {
            this._ngZone.run(() => {
                this.boundsChange.emit(this._gmaps.getBounds());
                this.centerChange.emit(this._gmaps.getCenter());
                this.zoomChange.emit(this._gmaps.getZoom());
            });
        });
        this.created.emit(this._gmaps);
    }

}

//enums in TS sucks
class Events {
    static get CLICK(): string { return "click" }
    static get RIGHT_CLICK(): string { return "rightclick" }
    static get BOUNDS_CHANGED(): string { return "bounds_changed" }
}