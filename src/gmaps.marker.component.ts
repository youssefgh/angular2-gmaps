import { Directive, OnInit, OnDestroy, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { LatLngWrapper } from './core/LatLngWrapper';

@Directive({
    selector: 'gmaps-marker'
})
export class GMapsMarkerComponent implements OnInit, OnDestroy {

    _marker: google.maps.Marker;
    _position: LatLngWrapper;

    //TODO find alt to use 'click'
    @Output("markerClick") click: EventEmitter<LatLngWrapper> = new EventEmitter();
    @Output() rightClick: EventEmitter<LatLngWrapper> = new EventEmitter();
    @Output() dragEnd: EventEmitter<LatLngWrapper> = new EventEmitter();
    @Output() positionChange: EventEmitter<LatLngWrapper> = new EventEmitter();

    constructor(private ngZone: NgZone) {
        this._marker = new google.maps.Marker();
    }

    @Input() set gmaps(value: google.maps.Map) {
        this._marker.setMap(value);
    }

    @Input() set title(value: string) {
        this._marker.setTitle(value);
    }

    @Input() set icon(value: google.maps.Icon) {
        this._marker.setIcon(value);
    }

    @Input() set position(value: LatLngWrapper) {
        this._position = value;
        this._marker.setPosition(this._position.latLng);
    }

    @Input() set draggable(value: boolean) {
        this._marker.setDraggable(value);
    }

    ngOnInit() {
        this._marker.addListener(Events.CLICK, (mouseEvent: google.maps.MouseEvent) => {
            this.ngZone.run(() => {
                this._updatePosition();
                this.click.emit(this._position);
            });
        });
        this._marker.addListener(Events.RIGHT_CLICK, (mouseEvent: google.maps.MouseEvent) => {
            this.ngZone.run(() => {
                this._updatePosition();
                this.rightClick.emit(this._position);
            });
        });
        this._marker.addListener(Events.DRAG_END, (mouseEvent: google.maps.MouseEvent) => {
            this.ngZone.run(() => {
                this._updatePosition();
                this.dragEnd.emit(this._position);
                this.positionChange.emit(this._position);
            });
        });
    }
    
    //TODO search for how to attach this to emiter
    private _updatePosition(){
        this._position.latLng = this._marker.getPosition();
    }

    ngOnDestroy() {
        this.gmaps = null;
    }
}

//enums in TS sucks
class Events {
    static CLICK: string = "click";
    static RIGHT_CLICK: string = "rightclick";
    static DRAG_END: string = "dragend";
}