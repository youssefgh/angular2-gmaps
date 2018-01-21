import { Component } from '@angular/core';
import { LatLngWrapper } from './core/LatLngWrapper';

@Component({
    selector: 'gmaps-example',
    templateUrl: 'gmaps.example.component.html'
})
export class GMapsExampleComponent {

    latLngWrapper: LatLngWrapper = new LatLngWrapper(33.55770396470521, -7.5963592529296875);
    zoom: number = 9;
    gmapsOptions: google.maps.MapOptions = { center: this.latLngWrapper.latLng, zoom: this.zoom };

    bounds: google.maps.LatLngBounds;
    gmaps: google.maps.Map;

    onGMapsCreation(gmaps: google.maps.Map) {
        this.gmaps = gmaps;
        console.log("Gmaps created: " + this.gmaps);
    }

    onGMapsClick(mouseEvent: google.maps.MouseEvent) {
        window.alert("click at: " + mouseEvent.latLng);
    }

    onGMapsRightClick(mouseEvent: google.maps.MouseEvent) {
        window.alert("right click at: " + mouseEvent.latLng);
    }

}