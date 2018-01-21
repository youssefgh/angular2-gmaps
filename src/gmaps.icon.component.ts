import { Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: 'gmaps-icon'
})
export class GMapsIconComponent implements OnInit {

    private _icon: google.maps.Icon;

    @Output() created: EventEmitter<google.maps.Icon> = new EventEmitter();

    constructor() {
        this._icon = {};
    }

    @Input() set scaledSize(value: google.maps.Size) {
        this._icon.scaledSize = value;
    }

    @Input() set url(value: string) {
        this._icon.url = value;
    }

    ngOnInit() {
        this.created.emit(this._icon);
    }

}