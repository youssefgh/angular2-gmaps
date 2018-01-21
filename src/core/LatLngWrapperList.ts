import { LatLngWrapper } from './LatLngWrapper';

export class LatLngWrapperList {

    private _array: LatLngWrapper[] = new Array<LatLngWrapper>();

    onAdd: (latLngWrapper: LatLngWrapper) => void;
    onRemove: (index: number) => void;
    onChange: (latLngWrapper: LatLngWrapper) => void;

    constructor() {
    }

    get array(): LatLngWrapper[] {
        return this._array;
    }

    add(latLngWrapper: LatLngWrapper) {
        this._array.push(latLngWrapper);
        this.onAdd(latLngWrapper);
        latLngWrapper.onChange = (latLngWrapper: LatLngWrapper) => {
            this.onChange(latLngWrapper);
        };
    }

    remove(latLngWrapper: LatLngWrapper) {
        var index: number = this._array.indexOf(latLngWrapper);
        this._array.splice(index, 1);
        this.onRemove(index);
    }

    set(index: number, latLngWrapper: LatLngWrapper) {
        this._array[index] = latLngWrapper;
    }

    isEmpty(): boolean { return this._array.length == 0 }

}