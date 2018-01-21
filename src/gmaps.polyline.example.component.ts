import { Component } from '@angular/core';
import { LatLngWrapper } from './core/LatLngWrapper';
import { LatLngWrapperList } from './core/LatLngWrapperList';

@Component({
    selector: 'gmaps-polyline-example',
    templateUrl: 'gmaps.polyline.example.component.html'
})
export class GMapsPolylineExampleComponent {

    center: LatLngWrapper = new LatLngWrapper(33.55770396470521, -7.5963592529296875);
    zoom: number = 9;

    gmaps: google.maps.Map = {} as google.maps.Map;
    infoWindowPosition: google.maps.LatLng;

    path: LatLngWrapperList;
    paths: LatLngWrapperList[] = new Array<LatLngWrapperList>();

    constructor() {
        this.createPath();
    }

    onGMapsCreation(gmaps: google.maps.Map) {
        this.gmaps = gmaps;
    }

    onGMapsClick(e: google.maps.MouseEvent) {
        this.path.add(LatLngWrapper.fromLatLng(e.latLng));
    }

    onGMapsPolylineMouseOut() {
        this.infoWindowPosition = null;
    }

    onGMapsPolylineMouseOver(latLng: google.maps.LatLng) {
        this.infoWindowPosition = latLng;
    }

    createPath() {
        this.path = new LatLngWrapperList();
    }

    removePath() {
        this.path = null;
    }

    savePath() {
        this.paths.push(this.path);
        this.createPath();
    }
}