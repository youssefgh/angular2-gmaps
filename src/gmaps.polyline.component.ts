import { Directive, OnInit, OnDestroy, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { LatLngWrapper } from './core/LatLngWrapper';
import { LatLngWrapperList } from './core/LatLngWrapperList';

@Directive({
    selector: 'gmaps-polyline'
})
export class GMapsPolylineComponent implements OnInit, OnDestroy {

    private _polyline: google.maps.Polyline;
    private _path: LatLngWrapperList;
    private _polylineOptions: google.maps.PolylineOptions = {};

    //TODO find alt to use 'click'
    @Output("polylineClick") click: EventEmitter<google.maps.Polyline> = new EventEmitter();
    //TODO redefine return types
    @Output() rightClick: EventEmitter<google.maps.Polyline> = new EventEmitter();
    @Output() doubleClick: EventEmitter<LatLngWrapper> = new EventEmitter();
    @Output() dragEnd: EventEmitter<google.maps.Polyline> = new EventEmitter();
    @Output() mouseOut: EventEmitter<google.maps.LatLng> = new EventEmitter();
    @Output() mouseOver: EventEmitter<google.maps.LatLng> = new EventEmitter();

    constructor(private _ngZone: NgZone) {
        this._polyline = new google.maps.Polyline();
    }

    @Input() set gmaps(value: google.maps.Map) {
        if (value instanceof google.maps.Map)
            this._polyline.setMap(value);
    }

    @Input() set visible(value: boolean) {
        this._polyline.setVisible(value);
    }

    @Input() set editable(value: boolean) {
        this._polyline.setEditable(value);
    }

    @Input() set path(value: LatLngWrapperList) {
        this._path = value;
        this._polyline.getPath().clear();
        for (var latLngWrapper of this._path.array) {
            this._polyline.getPath().push(latLngWrapper.latLng);
        }
        this._path.onAdd = (latLngWrapper: LatLngWrapper) => {
            this._polyline.getPath().push(latLngWrapper.latLng);
        };
        this._path.onRemove = (index: number) => {
            this._polyline.getPath().removeAt(index);
        };
        this._path.onChange = (latLngWrapper: LatLngWrapper) => {
            this._polyline.getPath().setAt(this._path.array.indexOf(latLngWrapper), latLngWrapper.latLng);
        };
        this._polyline.getPath().addListener(MVCArrayEvents.SET_AT, (index: number) => {
            this._path.set(index, LatLngWrapper.fromLatLng(this._polyline.getPath().getAt(index)));
        });
    }

    @Input() set strokeColor(value: string) {
        this._polylineOptions.strokeColor = value;
        this._polyline.setOptions(this._polylineOptions);
    }

    @Input() set strokeOpacity(value: number) {
        this._polylineOptions.strokeOpacity = value;
        this._polyline.setOptions(this._polylineOptions);
    }

    @Input() set strokeWeight(value: number) {
        this._polylineOptions.strokeWeight = value;
        this._polyline.setOptions(this._polylineOptions);
    }

    @Input() set zIndex(value: number) {
        this._polylineOptions.zIndex = value;
        this._polyline.setOptions(this._polylineOptions);
    }

    ngOnInit() {
        this._polyline.addListener(Events.CLICK, (e: google.maps.PolyMouseEvent) => {
            this._ngZone.run(() => {
                this.click.emit(this._polyline);
            });
        });
        this._polyline.addListener(Events.RIGHT_CLICK, (e: google.maps.PolyMouseEvent) => {
            this._ngZone.run(() => {
                this.rightClick.emit(this._polyline);
            });
        });
        this._polyline.addListener(Events.DOUBLE_CLICK, (e: google.maps.PolyMouseEvent) => {
            //can be null if the mouse is moving fast
            if (e.vertex != null) {
                this._ngZone.run(() => {
                    this.doubleClick.emit(this._path.array[e.vertex]);
                });
            }
        });
        this._polyline.addListener(Events.DRAG_END, (e: google.maps.PolyMouseEvent) => {
            this._ngZone.run(() => {
                this.dragEnd.emit(this._polyline);
            });
        });
        this._polyline.addListener(Events.MOUSE_OUT, (e: google.maps.PolyMouseEvent) => {
            this._ngZone.run(() => {
                this.mouseOut.emit();
            });
        });
        this._polyline.addListener(Events.MOUSE_OVER, (e: google.maps.PolyMouseEvent) => {
            //can be null if the mouse is moving fast
            if (e.vertex != null) {
                this._ngZone.run(() => {
                    this.mouseOver.emit(this._path.array[e.vertex].latLng);
                });
            }
        });
    }

    ngOnDestroy() {
        this.gmaps = null;
    }

}

//enums in TS sucks
class Events {
    static get CLICK(): string { return "click" };
    static get DOUBLE_CLICK(): string { return "dblclick" };
    static get RIGHT_CLICK(): string { return "rightclick" };
    static get DRAG_END(): string { return "dragend" };
    static get MOUSE_OUT(): string { return "mouseout" };
    static get MOUSE_OVER(): string { return "mouseover" };
}

class MVCArrayEvents {
    static get SET_AT(): string { return "set_at" }
}